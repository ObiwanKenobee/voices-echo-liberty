
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4'

// CORS headers for browser access
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
}

// Create a Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL') || ''
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''

const supabase = createClient(supabaseUrl, supabaseServiceKey)

interface RequestParams {
  entity: string
  id?: string
}

// Helper function to parse the path parameters
function parseRequestParams(req: Request): RequestParams {
  const url = new URL(req.url)
  const pathParts = url.pathname.split('/').filter(Boolean)
  
  // Remove "api" from the path parts if it exists
  const apiIndex = pathParts.findIndex(part => part === 'api')
  if (apiIndex !== -1) {
    pathParts.splice(apiIndex, 1)
  }

  return {
    entity: pathParts[0] || '',
    id: pathParts[1],
  }
}

// Helper function to get entity table name
function getTableName(entity: string): string {
  const entityToTableMap: Record<string, string> = {
    'suppliers': 'suppliers',
    'assessments': 'supplier_assessments',
    'initiatives': 'ethical_sourcing_initiatives',
    'reports': 'esg_reports',
    'risks': 'risk_assessments',
    'alerts': 'wildlife_alerts',
    'cases': 'cases',
    'partners': 'partners',
    'metrics': 'esg_metrics',
  }
  
  return entityToTableMap[entity] || entity
}

async function handleGet(params: RequestParams, url: URL) {
  const tableName = getTableName(params.entity)
  
  try {
    console.log(`GET request for ${tableName}${params.id ? ` with ID ${params.id}` : ''}`)
    
    // Get query parameters
    const page = parseInt(url.searchParams.get('page') || '1')
    const pageSize = parseInt(url.searchParams.get('pageSize') || '10')
    const offset = (page - 1) * pageSize
    
    let query = supabase.from(tableName).select('*')
    
    // If ID is provided, get a specific record
    if (params.id) {
      query = query.eq('id', params.id).single()
    } else {
      // Pagination
      query = query.range(offset, offset + pageSize - 1)
      
      // Handle filters
      for (const [key, value] of url.searchParams.entries()) {
        if (!['page', 'pageSize'].includes(key)) {
          query = query.eq(key, value)
        }
      }
      
      // Sort by creation date if available
      if (tableName !== 'spatial_ref_sys' && tableName !== 'geometry_columns' && tableName !== 'geography_columns') {
        query = query.order('created_at', { ascending: false })
      }
    }
    
    const { data, error } = await query
    
    if (error) throw error
    
    return new Response(JSON.stringify({ data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error(`Error in GET ${tableName}:`, error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
}

async function handlePost(params: RequestParams, req: Request) {
  const tableName = getTableName(params.entity)
  
  try {
    const body = await req.json()
    console.log(`POST request to ${tableName} with data:`, body)
    
    // Add created_at timestamp if not provided
    if (!body.created_at && tableName !== 'spatial_ref_sys' && tableName !== 'geometry_columns' && tableName !== 'geography_columns') {
      body.created_at = new Date().toISOString()
    }
    
    // Insert the data
    const { data, error } = await supabase
      .from(tableName)
      .insert(body)
      .select()
    
    if (error) throw error
    
    return new Response(JSON.stringify({ data, message: 'Record created successfully' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 201,
    })
  } catch (error) {
    console.error(`Error in POST ${tableName}:`, error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
}

async function handlePut(params: RequestParams, req: Request) {
  if (!params.id) {
    return new Response(JSON.stringify({ error: 'ID is required for PUT requests' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
  
  const tableName = getTableName(params.entity)
  
  try {
    const body = await req.json()
    console.log(`PUT request to ${tableName} with ID ${params.id} and data:`, body)
    
    // Add updated_at timestamp if the column exists
    if (tableName !== 'spatial_ref_sys' && tableName !== 'geometry_columns' && tableName !== 'geography_columns') {
      body.updated_at = new Date().toISOString()
    }
    
    // Update the record
    const { data, error } = await supabase
      .from(tableName)
      .update(body)
      .eq('id', params.id)
      .select()
    
    if (error) throw error
    
    return new Response(JSON.stringify({ data, message: 'Record updated successfully' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error(`Error in PUT ${tableName}:`, error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
}

async function handleDelete(params: RequestParams) {
  if (!params.id) {
    return new Response(JSON.stringify({ error: 'ID is required for DELETE requests' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
  
  const tableName = getTableName(params.entity)
  
  try {
    console.log(`DELETE request for ${tableName} with ID ${params.id}`)
    
    // Delete the record
    const { data, error } = await supabase
      .from(tableName)
      .delete()
      .eq('id', params.id)
    
    if (error) throw error
    
    return new Response(JSON.stringify({ message: 'Record deleted successfully' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error(`Error in DELETE ${tableName}:`, error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
}

// Main handler
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders,
    })
  }
  
  const url = new URL(req.url)
  const params = parseRequestParams(req)
  
  if (!params.entity) {
    return new Response(JSON.stringify({ 
      error: 'Invalid route. Use /api/{entity} or /api/{entity}/{id}',
      availableEntities: [
        'suppliers', 'assessments', 'initiatives', 'reports', 
        'risks', 'alerts', 'cases', 'partners', 'metrics'
      ]
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
  
  try {
    console.log(`Processing ${req.method} request for entity: ${params.entity}${params.id ? ` with ID: ${params.id}` : ''}`)
    
    // Handle different HTTP methods
    switch (req.method) {
      case 'GET':
        return await handleGet(params, url)
      case 'POST':
        return await handlePost(params, req)
      case 'PUT':
        return await handlePut(params, req)
      case 'DELETE':
        return await handleDelete(params)
      default:
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 405,
        })
    }
  } catch (error) {
    console.error('Unhandled error:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
