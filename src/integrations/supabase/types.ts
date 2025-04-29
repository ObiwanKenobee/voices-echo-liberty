export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      analytics_metrics: {
        Row: {
          id: string
          metric_name: string
          metric_type: string
          metric_value: number
          timestamp: string
          user_id: string
        }
        Insert: {
          id?: string
          metric_name: string
          metric_type: string
          metric_value: number
          timestamp?: string
          user_id: string
        }
        Update: {
          id?: string
          metric_name?: string
          metric_type?: string
          metric_value?: number
          timestamp?: string
          user_id?: string
        }
        Relationships: []
      }
      analytics_reports: {
        Row: {
          created_at: string
          data: Json
          description: string | null
          id: string
          report_type: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          data: Json
          description?: string | null
          id?: string
          report_type: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          data?: Json
          description?: string | null
          id?: string
          report_type?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      biodiversity_reports: {
        Row: {
          data: Json
          generated_at: string
          id: string
          impact_score: number
          report_type: string
          risk_level: string
          species_affected: number
          status: string
          title: string
          user_id: string
        }
        Insert: {
          data?: Json
          generated_at?: string
          id?: string
          impact_score: number
          report_type: string
          risk_level: string
          species_affected: number
          status?: string
          title: string
          user_id: string
        }
        Update: {
          data?: Json
          generated_at?: string
          id?: string
          impact_score?: number
          report_type?: string
          risk_level?: string
          species_affected?: number
          status?: string
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      carbon_footprint_data: {
        Row: {
          created_at: string | null
          emission_scope: Database["public"]["Enums"]["emission_scope"]
          emission_unit: string
          emission_value: number
          id: string
          is_verified: boolean | null
          location: string | null
          metadata: Json | null
          source_name: string
          source_type: Database["public"]["Enums"]["carbon_data_source"]
          timestamp: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          emission_scope: Database["public"]["Enums"]["emission_scope"]
          emission_unit: string
          emission_value: number
          id?: string
          is_verified?: boolean | null
          location?: string | null
          metadata?: Json | null
          source_name: string
          source_type: Database["public"]["Enums"]["carbon_data_source"]
          timestamp?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          emission_scope?: Database["public"]["Enums"]["emission_scope"]
          emission_unit?: string
          emission_value?: number
          id?: string
          is_verified?: boolean | null
          location?: string | null
          metadata?: Json | null
          source_name?: string
          source_type?: Database["public"]["Enums"]["carbon_data_source"]
          timestamp?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      cases: {
        Row: {
          assigned_to: string | null
          category: string | null
          created_at: string | null
          description: string | null
          evidence_links: string[] | null
          id: string
          incident_date: string | null
          location: string | null
          reporter_id: string | null
          status: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          assigned_to?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          evidence_links?: string[] | null
          id?: string
          incident_date?: string | null
          location?: string | null
          reporter_id?: string | null
          status?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          assigned_to?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          evidence_links?: string[] | null
          id?: string
          incident_date?: string | null
          location?: string | null
          reporter_id?: string | null
          status?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      collaboration_metrics: {
        Row: {
          contract_status: string
          engagement_score: number
          id: string
          intelligence_shared: number
          partner_id: string
          timestamp: string
          user_id: string
        }
        Insert: {
          contract_status: string
          engagement_score: number
          id?: string
          intelligence_shared?: number
          partner_id: string
          timestamp?: string
          user_id: string
        }
        Update: {
          contract_status?: string
          engagement_score?: number
          id?: string
          intelligence_shared?: number
          partner_id?: string
          timestamp?: string
          user_id?: string
        }
        Relationships: []
      }
      community_insights: {
        Row: {
          content: string
          created_at: string
          id: string
          insight_type: string
          sentiment_score: number | null
          source: string | null
          topic: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          insight_type: string
          sentiment_score?: number | null
          source?: string | null
          topic: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          insight_type?: string
          sentiment_score?: number | null
          source?: string | null
          topic?: string
          updated_at?: string
        }
        Relationships: []
      }
      compliance_automation_rules: {
        Row: {
          created_at: string
          criteria: Json
          description: string | null
          framework: string
          frequency: string
          id: string
          last_run_at: string | null
          name: string
          next_run_at: string | null
          rule_type: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          criteria?: Json
          description?: string | null
          framework: string
          frequency: string
          id?: string
          last_run_at?: string | null
          name: string
          next_run_at?: string | null
          rule_type: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          criteria?: Json
          description?: string | null
          framework?: string
          frequency?: string
          id?: string
          last_run_at?: string | null
          name?: string
          next_run_at?: string | null
          rule_type?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      custom_metrics: {
        Row: {
          configuration: Json | null
          created_at: string | null
          data_source: string
          description: string | null
          id: string
          is_active: boolean | null
          metric_type: Database["public"]["Enums"]["metric_type"]
          name: string
          updated_at: string | null
          user_id: string | null
          visualization_type: Database["public"]["Enums"]["visualization_type"]
        }
        Insert: {
          configuration?: Json | null
          created_at?: string | null
          data_source: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          metric_type: Database["public"]["Enums"]["metric_type"]
          name: string
          updated_at?: string | null
          user_id?: string | null
          visualization_type: Database["public"]["Enums"]["visualization_type"]
        }
        Update: {
          configuration?: Json | null
          created_at?: string | null
          data_source?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          metric_type?: Database["public"]["Enums"]["metric_type"]
          name?: string
          updated_at?: string | null
          user_id?: string | null
          visualization_type?: Database["public"]["Enums"]["visualization_type"]
        }
        Relationships: []
      }
      custom_reports: {
        Row: {
          created_at: string | null
          date_range: Json
          description: string | null
          export_format: string
          id: string
          metrics: Json
          name: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          date_range: Json
          description?: string | null
          export_format: string
          id?: string
          metrics: Json
          name: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          date_range?: Json
          description?: string | null
          export_format?: string
          id?: string
          metrics?: Json
          name?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      dashboard_preferences: {
        Row: {
          created_at: string
          id: string
          layout: Json | null
          updated_at: string
          user_id: string | null
          widgets: string[] | null
        }
        Insert: {
          created_at?: string
          id?: string
          layout?: Json | null
          updated_at?: string
          user_id?: string | null
          widgets?: string[] | null
        }
        Update: {
          created_at?: string
          id?: string
          layout?: Json | null
          updated_at?: string
          user_id?: string | null
          widgets?: string[] | null
        }
        Relationships: []
      }
      esg_benchmarks: {
        Row: {
          average_value: number
          id: string
          industry: string
          metric_name: string
          unit: string
          updated_at: string
        }
        Insert: {
          average_value: number
          id?: string
          industry: string
          metric_name: string
          unit: string
          updated_at?: string
        }
        Update: {
          average_value?: number
          id?: string
          industry?: string
          metric_name?: string
          unit?: string
          updated_at?: string
        }
        Relationships: []
      }
      esg_compliance_checks: {
        Row: {
          details: Json | null
          framework: string
          id: string
          last_checked_at: string
          next_check_at: string | null
          requirement: string
          status: string
          user_id: string
        }
        Insert: {
          details?: Json | null
          framework: string
          id?: string
          last_checked_at?: string
          next_check_at?: string | null
          requirement: string
          status: string
          user_id: string
        }
        Update: {
          details?: Json | null
          framework?: string
          id?: string
          last_checked_at?: string
          next_check_at?: string | null
          requirement?: string
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      esg_initiatives: {
        Row: {
          budget: number | null
          category: string | null
          created_at: string
          description: string | null
          end_date: string | null
          id: string
          impact_score: number | null
          started_at: string | null
          status: Database["public"]["Enums"]["initiative_status"]
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          budget?: number | null
          category?: string | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          id?: string
          impact_score?: number | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["initiative_status"]
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          budget?: number | null
          category?: string | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          id?: string
          impact_score?: number | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["initiative_status"]
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      esg_metrics: {
        Row: {
          id: string
          metric_name: string
          metric_type: string
          metric_value: number
          source: string | null
          timestamp: string
          unit: string
          user_id: string
        }
        Insert: {
          id?: string
          metric_name: string
          metric_type: string
          metric_value: number
          source?: string | null
          timestamp?: string
          unit: string
          user_id: string
        }
        Update: {
          id?: string
          metric_name?: string
          metric_type?: string
          metric_value?: number
          source?: string | null
          timestamp?: string
          unit?: string
          user_id?: string
        }
        Relationships: []
      }
      esg_report_items: {
        Row: {
          blockchain_verified: boolean
          created_at: string
          date: string
          download_link: string | null
          id: string
          scope: string
          status: string
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          blockchain_verified?: boolean
          created_at?: string
          date?: string
          download_link?: string | null
          id?: string
          scope: string
          status: string
          title: string
          type: string
          updated_at?: string
        }
        Update: {
          blockchain_verified?: boolean
          created_at?: string
          date?: string
          download_link?: string | null
          id?: string
          scope?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      esg_reports: {
        Row: {
          content: Json
          created_at: string
          id: string
          published_at: string | null
          report_type: string
          reporting_period: string | null
          status: Database["public"]["Enums"]["report_status"]
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content: Json
          created_at?: string
          id?: string
          published_at?: string | null
          report_type: string
          reporting_period?: string | null
          status?: Database["public"]["Enums"]["report_status"]
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: Json
          created_at?: string
          id?: string
          published_at?: string | null
          report_type?: string
          reporting_period?: string | null
          status?: Database["public"]["Enums"]["report_status"]
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      esg_stakeholder_engagements: {
        Row: {
          created_at: string
          engagement_date: string | null
          engagement_type: string
          follow_up_actions: string | null
          id: string
          outcomes: string | null
          stakeholder_name: string
          status: Database["public"]["Enums"]["engagement_status"]
          summary: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          engagement_date?: string | null
          engagement_type: string
          follow_up_actions?: string | null
          id?: string
          outcomes?: string | null
          stakeholder_name: string
          status?: Database["public"]["Enums"]["engagement_status"]
          summary?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          engagement_date?: string | null
          engagement_type?: string
          follow_up_actions?: string | null
          id?: string
          outcomes?: string | null
          stakeholder_name?: string
          status?: Database["public"]["Enums"]["engagement_status"]
          summary?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      ethical_impact_metrics: {
        Row: {
          category: string
          change_percentage: number | null
          comparison_period: string | null
          created_at: string | null
          id: string
          measurement_date: string | null
          metric_name: string
          metric_target: number | null
          metric_value: number
          notes: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          category: string
          change_percentage?: number | null
          comparison_period?: string | null
          created_at?: string | null
          id?: string
          measurement_date?: string | null
          metric_name: string
          metric_target?: number | null
          metric_value: number
          notes?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          category?: string
          change_percentage?: number | null
          comparison_period?: string | null
          created_at?: string | null
          id?: string
          measurement_date?: string | null
          metric_name?: string
          metric_target?: number | null
          metric_value?: number
          notes?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      ethical_sourcing_initiatives: {
        Row: {
          budget: number | null
          category: string
          created_at: string | null
          current_metrics: Json | null
          description: string | null
          end_date: string | null
          id: string
          impact_level: Database["public"]["Enums"]["impact_level"] | null
          start_date: string | null
          status: Database["public"]["Enums"]["initiative_status"] | null
          target_metrics: Json | null
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          budget?: number | null
          category: string
          created_at?: string | null
          current_metrics?: Json | null
          description?: string | null
          end_date?: string | null
          id?: string
          impact_level?: Database["public"]["Enums"]["impact_level"] | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["initiative_status"] | null
          target_metrics?: Json | null
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          budget?: number | null
          category?: string
          created_at?: string | null
          current_metrics?: Json | null
          description?: string | null
          end_date?: string | null
          id?: string
          impact_level?: Database["public"]["Enums"]["impact_level"] | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["initiative_status"] | null
          target_metrics?: Json | null
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      forum_posts: {
        Row: {
          author_id: string
          category: string
          content: string
          created_at: string
          id: string
          title: string
          updated_at: string
        }
        Insert: {
          author_id: string
          category: string
          content: string
          created_at?: string
          id?: string
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          category?: string
          content?: string
          created_at?: string
          id?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      integration_logs: {
        Row: {
          created_at: string
          details: Json | null
          event_type: string
          id: string
          integration_id: string
          message: string | null
          status: string
        }
        Insert: {
          created_at?: string
          details?: Json | null
          event_type: string
          id?: string
          integration_id: string
          message?: string | null
          status: string
        }
        Update: {
          created_at?: string
          details?: Json | null
          event_type?: string
          id?: string
          integration_id?: string
          message?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "integration_logs_integration_id_fkey"
            columns: ["integration_id"]
            isOneToOne: false
            referencedRelation: "system_integrations"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          attachment_url: string | null
          content: string
          created_at: string
          id: string
          read: boolean | null
          sender_id: string
          thread_id: string
        }
        Insert: {
          attachment_url?: string | null
          content: string
          created_at?: string
          id?: string
          read?: boolean | null
          sender_id: string
          thread_id: string
        }
        Update: {
          attachment_url?: string | null
          content?: string
          created_at?: string
          id?: string
          read?: boolean | null
          sender_id?: string
          thread_id?: string
        }
        Relationships: []
      }
      partner_applications: {
        Row: {
          company_name: string
          contact_email: string
          created_at: string
          description: string | null
          expertise: string | null
          id: string
          partnership_type: Database["public"]["Enums"]["partnership_type"]
          status: Database["public"]["Enums"]["application_status"] | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          company_name: string
          contact_email: string
          created_at?: string
          description?: string | null
          expertise?: string | null
          id?: string
          partnership_type: Database["public"]["Enums"]["partnership_type"]
          status?: Database["public"]["Enums"]["application_status"] | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          company_name?: string
          contact_email?: string
          created_at?: string
          description?: string | null
          expertise?: string | null
          id?: string
          partnership_type?: Database["public"]["Enums"]["partnership_type"]
          status?: Database["public"]["Enums"]["application_status"] | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      partners: {
        Row: {
          compliance_score: number | null
          contact_email: string | null
          created_at: string
          description: string | null
          id: string
          industry: string | null
          location: string | null
          logo_url: string | null
          name: string
          partnership_type: string
          status: Database["public"]["Enums"]["partner_status"] | null
          updated_at: string
          website_url: string | null
        }
        Insert: {
          compliance_score?: number | null
          contact_email?: string | null
          created_at?: string
          description?: string | null
          id?: string
          industry?: string | null
          location?: string | null
          logo_url?: string | null
          name: string
          partnership_type: string
          status?: Database["public"]["Enums"]["partner_status"] | null
          updated_at?: string
          website_url?: string | null
        }
        Update: {
          compliance_score?: number | null
          contact_email?: string | null
          created_at?: string
          description?: string | null
          id?: string
          industry?: string | null
          location?: string | null
          logo_url?: string | null
          name?: string
          partnership_type?: string
          status?: Database["public"]["Enums"]["partner_status"] | null
          updated_at?: string
          website_url?: string | null
        }
        Relationships: []
      }
      policies: {
        Row: {
          category: Database["public"]["Enums"]["policy_category"]
          created_at: string
          created_by: string
          current_version: string | null
          department: string | null
          description: string | null
          id: string
          status: Database["public"]["Enums"]["policy_status"] | null
          title: string
          updated_at: string
        }
        Insert: {
          category: Database["public"]["Enums"]["policy_category"]
          created_at?: string
          created_by: string
          current_version?: string | null
          department?: string | null
          description?: string | null
          id?: string
          status?: Database["public"]["Enums"]["policy_status"] | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: Database["public"]["Enums"]["policy_category"]
          created_at?: string
          created_by?: string
          current_version?: string | null
          department?: string | null
          description?: string | null
          id?: string
          status?: Database["public"]["Enums"]["policy_status"] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      policy_acknowledgments: {
        Row: {
          acknowledged_at: string
          id: string
          policy_id: string
          user_id: string
          version_id: string
        }
        Insert: {
          acknowledged_at?: string
          id?: string
          policy_id: string
          user_id: string
          version_id: string
        }
        Update: {
          acknowledged_at?: string
          id?: string
          policy_id?: string
          user_id?: string
          version_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "policy_acknowledgments_policy_id_fkey"
            columns: ["policy_id"]
            isOneToOne: false
            referencedRelation: "policies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "policy_acknowledgments_version_id_fkey"
            columns: ["version_id"]
            isOneToOne: false
            referencedRelation: "policy_versions"
            referencedColumns: ["id"]
          },
        ]
      }
      policy_approvals: {
        Row: {
          approver_id: string
          comments: string | null
          created_at: string
          id: string
          policy_id: string
          status: string
          updated_at: string
          version_id: string
        }
        Insert: {
          approver_id: string
          comments?: string | null
          created_at?: string
          id?: string
          policy_id: string
          status?: string
          updated_at?: string
          version_id: string
        }
        Update: {
          approver_id?: string
          comments?: string | null
          created_at?: string
          id?: string
          policy_id?: string
          status?: string
          updated_at?: string
          version_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "policy_approvals_policy_id_fkey"
            columns: ["policy_id"]
            isOneToOne: false
            referencedRelation: "policies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "policy_approvals_version_id_fkey"
            columns: ["version_id"]
            isOneToOne: false
            referencedRelation: "policy_versions"
            referencedColumns: ["id"]
          },
        ]
      }
      policy_versions: {
        Row: {
          changes_summary: string | null
          content: string
          created_at: string
          created_by: string
          id: string
          policy_id: string
          version_number: number
        }
        Insert: {
          changes_summary?: string | null
          content: string
          created_at?: string
          created_by: string
          id?: string
          policy_id: string
          version_number: number
        }
        Update: {
          changes_summary?: string | null
          content?: string
          created_at?: string
          created_by?: string
          id?: string
          policy_id?: string
          version_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "policy_versions_policy_id_fkey"
            columns: ["policy_id"]
            isOneToOne: false
            referencedRelation: "policies"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          focus_areas: string[] | null
          full_name: string | null
          id: string
          industry: Database["public"]["Enums"]["industry_type"] | null
          logo_url: string | null
          organization: string | null
          role: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          focus_areas?: string[] | null
          full_name?: string | null
          id: string
          industry?: Database["public"]["Enums"]["industry_type"] | null
          logo_url?: string | null
          organization?: string | null
          role?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          focus_areas?: string[] | null
          full_name?: string | null
          id?: string
          industry?: Database["public"]["Enums"]["industry_type"] | null
          logo_url?: string | null
          organization?: string | null
          role?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      referrals: {
        Row: {
          created_at: string
          id: string
          referral_code: string
          referral_url: string
          referred_user_id: string | null
          reward_claimed: boolean
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          referral_code: string
          referral_url: string
          referred_user_id?: string | null
          reward_claimed?: boolean
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          referral_code?: string
          referral_url?: string
          referred_user_id?: string | null
          reward_claimed?: boolean
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      risk_assessments: {
        Row: {
          category: string
          created_at: string
          description: string | null
          due_date: string | null
          id: string
          impact_score: number
          mitigation_plan: string | null
          probability_score: number
          risk_level: string
          status: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          impact_score: number
          mitigation_plan?: string | null
          probability_score: number
          risk_level: string
          status?: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          impact_score?: number
          mitigation_plan?: string | null
          probability_score?: number
          risk_level?: string
          status?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      risk_factors: {
        Row: {
          category: string
          created_at: string
          description: string
          id: string
          impact: number
          name: string
          probability: number
          severity: string
          status: string
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          description: string
          id?: string
          impact: number
          name: string
          probability: number
          severity: string
          status: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string
          id?: string
          impact?: number
          name?: string
          probability?: number
          severity?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      risk_zones: {
        Row: {
          coordinates: Json
          created_at: string
          description: string
          id: string
          location: string
          risk_level: Database["public"]["Enums"]["risk_level"]
          status: string
          timestamp: string
          updated_at: string
          user_id: string
        }
        Insert: {
          coordinates?: Json
          created_at?: string
          description: string
          id?: string
          location: string
          risk_level: Database["public"]["Enums"]["risk_level"]
          status?: string
          timestamp?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          coordinates?: Json
          created_at?: string
          description?: string
          id?: string
          location?: string
          risk_level?: Database["public"]["Enums"]["risk_level"]
          status?: string
          timestamp?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      roundtable_participants: {
        Row: {
          joined_at: string
          roundtable_id: string
          user_id: string
        }
        Insert: {
          joined_at?: string
          roundtable_id: string
          user_id: string
        }
        Update: {
          joined_at?: string
          roundtable_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "roundtable_participants_roundtable_id_fkey"
            columns: ["roundtable_id"]
            isOneToOne: false
            referencedRelation: "virtual_roundtables"
            referencedColumns: ["id"]
          },
        ]
      }
      security_incidents: {
        Row: {
          affected_systems: string | null
          category: Database["public"]["Enums"]["security_incident_category"]
          created_at: string
          description: string | null
          id: string
          mitigation_steps: string | null
          reported_by: string
          severity: Database["public"]["Enums"]["security_severity"]
          status: Database["public"]["Enums"]["security_incident_status"]
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          affected_systems?: string | null
          category?: Database["public"]["Enums"]["security_incident_category"]
          created_at?: string
          description?: string | null
          id?: string
          mitigation_steps?: string | null
          reported_by: string
          severity?: Database["public"]["Enums"]["security_severity"]
          status?: Database["public"]["Enums"]["security_incident_status"]
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          affected_systems?: string | null
          category?: Database["public"]["Enums"]["security_incident_category"]
          created_at?: string
          description?: string | null
          id?: string
          mitigation_steps?: string | null
          reported_by?: string
          severity?: Database["public"]["Enums"]["security_severity"]
          status?: Database["public"]["Enums"]["security_incident_status"]
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      sensor_metrics: {
        Row: {
          alert_count: number
          data_integrity_score: number
          id: string
          location: Json
          sensor_id: string
          timestamp: string
          uptime_percentage: number
          user_id: string
        }
        Insert: {
          alert_count?: number
          data_integrity_score: number
          id?: string
          location: Json
          sensor_id: string
          timestamp?: string
          uptime_percentage: number
          user_id: string
        }
        Update: {
          alert_count?: number
          data_integrity_score?: number
          id?: string
          location?: Json
          sensor_id?: string
          timestamp?: string
          uptime_percentage?: number
          user_id?: string
        }
        Relationships: []
      }
      spatial_ref_sys: {
        Row: {
          auth_name: string | null
          auth_srid: number | null
          proj4text: string | null
          srid: number
          srtext: string | null
        }
        Insert: {
          auth_name?: string | null
          auth_srid?: number | null
          proj4text?: string | null
          srid: number
          srtext?: string | null
        }
        Update: {
          auth_name?: string | null
          auth_srid?: number | null
          proj4text?: string | null
          srid?: number
          srtext?: string | null
        }
        Relationships: []
      }
      strategic_initiatives: {
        Row: {
          created_at: string
          id: number
          impact: number | null
          name: string
          progress: number | null
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          impact?: number | null
          name: string
          progress?: number | null
          status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          impact?: number | null
          name?: string
          progress?: number | null
          status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      supplier_assessments: {
        Row: {
          assessment_type: string | null
          certification_details: Json | null
          compliance_score: number | null
          contact_information: Json | null
          created_at: string | null
          due_date: string | null
          id: string
          last_audit_date: string | null
          next_audit_date: string | null
          risk_areas: string[] | null
          score: number | null
          status: Database["public"]["Enums"]["supplier_status"] | null
          supplier_id: string | null
          supplier_name: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          assessment_type?: string | null
          certification_details?: Json | null
          compliance_score?: number | null
          contact_information?: Json | null
          created_at?: string | null
          due_date?: string | null
          id?: string
          last_audit_date?: string | null
          next_audit_date?: string | null
          risk_areas?: string[] | null
          score?: number | null
          status?: Database["public"]["Enums"]["supplier_status"] | null
          supplier_id?: string | null
          supplier_name: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          assessment_type?: string | null
          certification_details?: Json | null
          compliance_score?: number | null
          contact_information?: Json | null
          created_at?: string | null
          due_date?: string | null
          id?: string
          last_audit_date?: string | null
          next_audit_date?: string | null
          risk_areas?: string[] | null
          score?: number | null
          status?: Database["public"]["Enums"]["supplier_status"] | null
          supplier_id?: string | null
          supplier_name?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      suppliers: {
        Row: {
          category: string
          contact_email: string
          contact_phone: string
          created_at: string
          id: string
          location: string
          name: string
          risk_score: number
          status: string
          updated_at: string
          verified: boolean
        }
        Insert: {
          category: string
          contact_email: string
          contact_phone: string
          created_at?: string
          id?: string
          location: string
          name: string
          risk_score: number
          status: string
          updated_at?: string
          verified?: boolean
        }
        Update: {
          category?: string
          contact_email?: string
          contact_phone?: string
          created_at?: string
          id?: string
          location?: string
          name?: string
          risk_score?: number
          status?: string
          updated_at?: string
          verified?: boolean
        }
        Relationships: []
      }
      supply_chain_nodes: {
        Row: {
          capacity: number | null
          created_at: string
          facility_type: string
          geom: unknown | null
          id: string
          inventory_level: number | null
          last_updated: string | null
          latitude: number
          location_type: string
          longitude: number
          metadata: Json | null
          name: string
          risk_score: number | null
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          capacity?: number | null
          created_at?: string
          facility_type?: string
          geom?: unknown | null
          id?: string
          inventory_level?: number | null
          last_updated?: string | null
          latitude: number
          location_type: string
          longitude: number
          metadata?: Json | null
          name: string
          risk_score?: number | null
          status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          capacity?: number | null
          created_at?: string
          facility_type?: string
          geom?: unknown | null
          id?: string
          inventory_level?: number | null
          last_updated?: string | null
          latitude?: number
          location_type?: string
          longitude?: number
          metadata?: Json | null
          name?: string
          risk_score?: number | null
          status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      supply_chain_routes: {
        Row: {
          actual_time: unknown | null
          created_at: string
          destination_id: string
          distance: number | null
          estimated_time: unknown | null
          geom: unknown | null
          id: string
          last_updated: string | null
          metadata: Json | null
          origin_id: string
          risk_level: string | null
          route_type: string
          status: string | null
          transportation_mode: string
          updated_at: string
          user_id: string
        }
        Insert: {
          actual_time?: unknown | null
          created_at?: string
          destination_id: string
          distance?: number | null
          estimated_time?: unknown | null
          geom?: unknown | null
          id?: string
          last_updated?: string | null
          metadata?: Json | null
          origin_id: string
          risk_level?: string | null
          route_type: string
          status?: string | null
          transportation_mode?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          actual_time?: unknown | null
          created_at?: string
          destination_id?: string
          distance?: number | null
          estimated_time?: unknown | null
          geom?: unknown | null
          id?: string
          last_updated?: string | null
          metadata?: Json | null
          origin_id?: string
          risk_level?: string | null
          route_type?: string
          status?: string | null
          transportation_mode?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "supply_chain_routes_destination_id_fkey"
            columns: ["destination_id"]
            isOneToOne: false
            referencedRelation: "supply_chain_nodes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "supply_chain_routes_origin_id_fkey"
            columns: ["origin_id"]
            isOneToOne: false
            referencedRelation: "supply_chain_nodes"
            referencedColumns: ["id"]
          },
        ]
      }
      system_integrations: {
        Row: {
          config: Json
          created_at: string
          credentials: Json
          id: string
          name: string
          status: Database["public"]["Enums"]["integration_status"] | null
          type: Database["public"]["Enums"]["integration_type"]
          updated_at: string
          user_id: string
        }
        Insert: {
          config?: Json
          created_at?: string
          credentials?: Json
          id?: string
          name: string
          status?: Database["public"]["Enums"]["integration_status"] | null
          type: Database["public"]["Enums"]["integration_type"]
          updated_at?: string
          user_id: string
        }
        Update: {
          config?: Json
          created_at?: string
          credentials?: Json
          id?: string
          name?: string
          status?: Database["public"]["Enums"]["integration_status"] | null
          type?: Database["public"]["Enums"]["integration_type"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      tasks: {
        Row: {
          assignee_id: string | null
          created_at: string
          created_by: string
          description: string | null
          due_date: string | null
          has_dependencies: boolean | null
          id: string
          priority: string | null
          status: Database["public"]["Enums"]["task_status"] | null
          title: string
          updated_at: string
        }
        Insert: {
          assignee_id?: string | null
          created_at?: string
          created_by: string
          description?: string | null
          due_date?: string | null
          has_dependencies?: boolean | null
          id?: string
          priority?: string | null
          status?: Database["public"]["Enums"]["task_status"] | null
          title: string
          updated_at?: string
        }
        Update: {
          assignee_id?: string | null
          created_at?: string
          created_by?: string
          description?: string | null
          due_date?: string | null
          has_dependencies?: boolean | null
          id?: string
          priority?: string | null
          status?: Database["public"]["Enums"]["task_status"] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      trending_content: {
        Row: {
          author_id: string | null
          category: string
          comments: number
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          likes: number
          published_at: string
          title: string
          trending: boolean
          updated_at: string
          views: number
        }
        Insert: {
          author_id?: string | null
          category: string
          comments?: number
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          likes?: number
          published_at?: string
          title: string
          trending?: boolean
          updated_at?: string
          views?: number
        }
        Update: {
          author_id?: string | null
          category?: string
          comments?: number
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          likes?: number
          published_at?: string
          title?: string
          trending?: boolean
          updated_at?: string
          views?: number
        }
        Relationships: []
      }
      user_content_interactions: {
        Row: {
          content_id: string
          created_at: string
          id: string
          interaction_type: string
          user_id: string
        }
        Insert: {
          content_id: string
          created_at?: string
          id?: string
          interaction_type: string
          user_id: string
        }
        Update: {
          content_id?: string
          created_at?: string
          id?: string
          interaction_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_content_interactions_content_id_fkey"
            columns: ["content_id"]
            isOneToOne: false
            referencedRelation: "trending_content"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          created_at: string | null
          id: string
          name: string
          organization: string | null
          role: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          name: string
          organization?: string | null
          role: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          organization?: string | null
          role?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_rewards: {
        Row: {
          description: string
          earned_at: string
          id: string
          is_redeemed: boolean
          redeemed_at: string | null
          reward_type: string
          user_id: string
        }
        Insert: {
          description: string
          earned_at?: string
          id?: string
          is_redeemed?: boolean
          redeemed_at?: string | null
          reward_type: string
          user_id: string
        }
        Update: {
          description?: string
          earned_at?: string
          id?: string
          is_redeemed?: boolean
          redeemed_at?: string | null
          reward_type?: string
          user_id?: string
        }
        Relationships: []
      }
      user_settings: {
        Row: {
          created_at: string
          id: string
          language: string
          notifications_enabled: boolean
          region: string
          theme: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          language?: string
          notifications_enabled?: boolean
          region?: string
          theme?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          language?: string
          notifications_enabled?: boolean
          region?: string
          theme?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      virtual_roundtables: {
        Row: {
          created_at: string
          description: string | null
          host_id: string
          id: string
          max_participants: number | null
          scheduled_for: string
          status: string
          title: string
          topic: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          host_id: string
          id?: string
          max_participants?: number | null
          scheduled_for: string
          status?: string
          title: string
          topic: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          host_id?: string
          id?: string
          max_participants?: number | null
          scheduled_for?: string
          status?: string
          title?: string
          topic?: string
          updated_at?: string
        }
        Relationships: []
      }
      waitlist: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          message: string | null
          name: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          message?: string | null
          name: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
        }
        Relationships: []
      }
      wildlife_alerts: {
        Row: {
          created_at: string
          description: string | null
          id: string
          location: Json
          risk_level: string
          status: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          location: Json
          risk_level: string
          status?: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          location?: Json
          risk_level?: string
          status?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      geography_columns: {
        Row: {
          coord_dimension: number | null
          f_geography_column: unknown | null
          f_table_catalog: unknown | null
          f_table_name: unknown | null
          f_table_schema: unknown | null
          srid: number | null
          type: string | null
        }
        Relationships: []
      }
      geometry_columns: {
        Row: {
          coord_dimension: number | null
          f_geometry_column: unknown | null
          f_table_catalog: string | null
          f_table_name: unknown | null
          f_table_schema: unknown | null
          srid: number | null
          type: string | null
        }
        Insert: {
          coord_dimension?: number | null
          f_geometry_column?: unknown | null
          f_table_catalog?: string | null
          f_table_name?: unknown | null
          f_table_schema?: unknown | null
          srid?: number | null
          type?: string | null
        }
        Update: {
          coord_dimension?: number | null
          f_geometry_column?: unknown | null
          f_table_catalog?: string | null
          f_table_name?: unknown | null
          f_table_schema?: unknown | null
          srid?: number | null
          type?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      _postgis_deprecate: {
        Args: { oldname: string; newname: string; version: string }
        Returns: undefined
      }
      _postgis_index_extent: {
        Args: { tbl: unknown; col: string }
        Returns: unknown
      }
      _postgis_pgsql_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      _postgis_scripts_pgsql_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      _postgis_selectivity: {
        Args: { tbl: unknown; att_name: string; geom: unknown; mode?: string }
        Returns: number
      }
      _st_3dintersects: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_bestsrid: {
        Args: { "": unknown }
        Returns: number
      }
      _st_contains: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_containsproperly: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_coveredby: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_covers: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_crosses: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_dwithin: {
        Args: {
          geog1: unknown
          geog2: unknown
          tolerance: number
          use_spheroid?: boolean
        }
        Returns: boolean
      }
      _st_equals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_intersects: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_linecrossingdirection: {
        Args: { line1: unknown; line2: unknown }
        Returns: number
      }
      _st_longestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      _st_maxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      _st_orderingequals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_overlaps: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_pointoutside: {
        Args: { "": unknown }
        Returns: unknown
      }
      _st_sortablehash: {
        Args: { geom: unknown }
        Returns: number
      }
      _st_touches: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_voronoi: {
        Args: {
          g1: unknown
          clip?: unknown
          tolerance?: number
          return_polygons?: boolean
        }
        Returns: unknown
      }
      _st_within: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      addauth: {
        Args: { "": string }
        Returns: boolean
      }
      addgeometrycolumn: {
        Args:
          | {
              catalog_name: string
              schema_name: string
              table_name: string
              column_name: string
              new_srid_in: number
              new_type: string
              new_dim: number
              use_typmod?: boolean
            }
          | {
              schema_name: string
              table_name: string
              column_name: string
              new_srid: number
              new_type: string
              new_dim: number
              use_typmod?: boolean
            }
          | {
              table_name: string
              column_name: string
              new_srid: number
              new_type: string
              new_dim: number
              use_typmod?: boolean
            }
        Returns: string
      }
      box: {
        Args: { "": unknown } | { "": unknown }
        Returns: unknown
      }
      box2d: {
        Args: { "": unknown } | { "": unknown }
        Returns: unknown
      }
      box2d_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      box2d_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      box2df_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      box2df_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      box3d: {
        Args: { "": unknown } | { "": unknown }
        Returns: unknown
      }
      box3d_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      box3d_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      box3dtobox: {
        Args: { "": unknown }
        Returns: unknown
      }
      bytea: {
        Args: { "": unknown } | { "": unknown }
        Returns: string
      }
      create_user_profile: {
        Args: {
          user_id: string
          user_name: string
          user_role: string
          user_organization: string
        }
        Returns: undefined
      }
      delete_user_profile: {
        Args: { user_id: string }
        Returns: undefined
      }
      disablelongtransactions: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      dropgeometrycolumn: {
        Args:
          | {
              catalog_name: string
              schema_name: string
              table_name: string
              column_name: string
            }
          | { schema_name: string; table_name: string; column_name: string }
          | { table_name: string; column_name: string }
        Returns: string
      }
      dropgeometrytable: {
        Args:
          | { catalog_name: string; schema_name: string; table_name: string }
          | { schema_name: string; table_name: string }
          | { table_name: string }
        Returns: string
      }
      enablelongtransactions: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      equals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geography: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      geography_analyze: {
        Args: { "": unknown }
        Returns: boolean
      }
      geography_gist_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      geography_gist_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      geography_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      geography_send: {
        Args: { "": unknown }
        Returns: string
      }
      geography_spgist_compress_nd: {
        Args: { "": unknown }
        Returns: unknown
      }
      geography_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      geography_typmod_out: {
        Args: { "": number }
        Returns: unknown
      }
      geometry: {
        Args:
          | { "": string }
          | { "": string }
          | { "": unknown }
          | { "": unknown }
          | { "": unknown }
          | { "": unknown }
          | { "": unknown }
          | { "": unknown }
        Returns: unknown
      }
      geometry_above: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_analyze: {
        Args: { "": unknown }
        Returns: boolean
      }
      geometry_below: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_cmp: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_contained_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_contains: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_contains_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_distance_box: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_distance_centroid: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_eq: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_ge: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_gist_compress_2d: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_gist_compress_nd: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_gist_decompress_2d: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_gist_decompress_nd: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_gist_sortsupport_2d: {
        Args: { "": unknown }
        Returns: undefined
      }
      geometry_gt: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_hash: {
        Args: { "": unknown }
        Returns: number
      }
      geometry_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_le: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_left: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_lt: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_overabove: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overbelow: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overlaps: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overlaps_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overleft: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overright: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_recv: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_right: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_same: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_same_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_send: {
        Args: { "": unknown }
        Returns: string
      }
      geometry_sortsupport: {
        Args: { "": unknown }
        Returns: undefined
      }
      geometry_spgist_compress_2d: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_spgist_compress_3d: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_spgist_compress_nd: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      geometry_typmod_out: {
        Args: { "": number }
        Returns: unknown
      }
      geometry_within: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometrytype: {
        Args: { "": unknown } | { "": unknown }
        Returns: string
      }
      geomfromewkb: {
        Args: { "": string }
        Returns: unknown
      }
      geomfromewkt: {
        Args: { "": string }
        Returns: unknown
      }
      get_proj4_from_srid: {
        Args: { "": number }
        Returns: string
      }
      get_user_profile: {
        Args: { user_id: string }
        Returns: {
          created_at: string | null
          id: string
          name: string
          organization: string | null
          role: string
          updated_at: string | null
        }[]
      }
      gettransactionid: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      gidx_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gidx_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      json: {
        Args: { "": unknown }
        Returns: Json
      }
      jsonb: {
        Args: { "": unknown }
        Returns: Json
      }
      longtransactionsenabled: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      path: {
        Args: { "": unknown }
        Returns: unknown
      }
      pgis_asflatgeobuf_finalfn: {
        Args: { "": unknown }
        Returns: string
      }
      pgis_asgeobuf_finalfn: {
        Args: { "": unknown }
        Returns: string
      }
      pgis_asmvt_finalfn: {
        Args: { "": unknown }
        Returns: string
      }
      pgis_asmvt_serialfn: {
        Args: { "": unknown }
        Returns: string
      }
      pgis_geometry_clusterintersecting_finalfn: {
        Args: { "": unknown }
        Returns: unknown[]
      }
      pgis_geometry_clusterwithin_finalfn: {
        Args: { "": unknown }
        Returns: unknown[]
      }
      pgis_geometry_collect_finalfn: {
        Args: { "": unknown }
        Returns: unknown
      }
      pgis_geometry_makeline_finalfn: {
        Args: { "": unknown }
        Returns: unknown
      }
      pgis_geometry_polygonize_finalfn: {
        Args: { "": unknown }
        Returns: unknown
      }
      pgis_geometry_union_parallel_finalfn: {
        Args: { "": unknown }
        Returns: unknown
      }
      pgis_geometry_union_parallel_serialfn: {
        Args: { "": unknown }
        Returns: string
      }
      point: {
        Args: { "": unknown }
        Returns: unknown
      }
      polygon: {
        Args: { "": unknown }
        Returns: unknown
      }
      populate_geometry_columns: {
        Args:
          | { tbl_oid: unknown; use_typmod?: boolean }
          | { use_typmod?: boolean }
        Returns: number
      }
      postgis_addbbox: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_constraint_dims: {
        Args: { geomschema: string; geomtable: string; geomcolumn: string }
        Returns: number
      }
      postgis_constraint_srid: {
        Args: { geomschema: string; geomtable: string; geomcolumn: string }
        Returns: number
      }
      postgis_constraint_type: {
        Args: { geomschema: string; geomtable: string; geomcolumn: string }
        Returns: string
      }
      postgis_dropbbox: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_extensions_upgrade: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_full_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_geos_noop: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_geos_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_getbbox: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_hasbbox: {
        Args: { "": unknown }
        Returns: boolean
      }
      postgis_index_supportfn: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_lib_build_date: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_lib_revision: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_lib_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_libjson_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_liblwgeom_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_libprotobuf_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_libxml_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_noop: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_proj_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_scripts_build_date: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_scripts_installed: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_scripts_released: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_svn_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_type_name: {
        Args: {
          geomname: string
          coord_dimension: number
          use_new_name?: boolean
        }
        Returns: string
      }
      postgis_typmod_dims: {
        Args: { "": number }
        Returns: number
      }
      postgis_typmod_srid: {
        Args: { "": number }
        Returns: number
      }
      postgis_typmod_type: {
        Args: { "": number }
        Returns: string
      }
      postgis_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_wagyu_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      spheroid_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      spheroid_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_3dclosestpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3ddistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_3dintersects: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_3dlength: {
        Args: { "": unknown }
        Returns: number
      }
      st_3dlongestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3dmakebox: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3dmaxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_3dperimeter: {
        Args: { "": unknown }
        Returns: number
      }
      st_3dshortestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_addpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_angle: {
        Args:
          | { line1: unknown; line2: unknown }
          | { pt1: unknown; pt2: unknown; pt3: unknown; pt4?: unknown }
        Returns: number
      }
      st_area: {
        Args:
          | { "": string }
          | { "": unknown }
          | { geog: unknown; use_spheroid?: boolean }
        Returns: number
      }
      st_area2d: {
        Args: { "": unknown }
        Returns: number
      }
      st_asbinary: {
        Args: { "": unknown } | { "": unknown }
        Returns: string
      }
      st_asencodedpolyline: {
        Args: { geom: unknown; nprecision?: number }
        Returns: string
      }
      st_asewkb: {
        Args: { "": unknown }
        Returns: string
      }
      st_asewkt: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: string
      }
      st_asgeojson: {
        Args:
          | { "": string }
          | { geog: unknown; maxdecimaldigits?: number; options?: number }
          | { geom: unknown; maxdecimaldigits?: number; options?: number }
          | {
              r: Record<string, unknown>
              geom_column?: string
              maxdecimaldigits?: number
              pretty_bool?: boolean
            }
        Returns: string
      }
      st_asgml: {
        Args:
          | { "": string }
          | {
              geog: unknown
              maxdecimaldigits?: number
              options?: number
              nprefix?: string
              id?: string
            }
          | { geom: unknown; maxdecimaldigits?: number; options?: number }
          | {
              version: number
              geog: unknown
              maxdecimaldigits?: number
              options?: number
              nprefix?: string
              id?: string
            }
          | {
              version: number
              geom: unknown
              maxdecimaldigits?: number
              options?: number
              nprefix?: string
              id?: string
            }
        Returns: string
      }
      st_ashexewkb: {
        Args: { "": unknown }
        Returns: string
      }
      st_askml: {
        Args:
          | { "": string }
          | { geog: unknown; maxdecimaldigits?: number; nprefix?: string }
          | { geom: unknown; maxdecimaldigits?: number; nprefix?: string }
        Returns: string
      }
      st_aslatlontext: {
        Args: { geom: unknown; tmpl?: string }
        Returns: string
      }
      st_asmarc21: {
        Args: { geom: unknown; format?: string }
        Returns: string
      }
      st_asmvtgeom: {
        Args: {
          geom: unknown
          bounds: unknown
          extent?: number
          buffer?: number
          clip_geom?: boolean
        }
        Returns: unknown
      }
      st_assvg: {
        Args:
          | { "": string }
          | { geog: unknown; rel?: number; maxdecimaldigits?: number }
          | { geom: unknown; rel?: number; maxdecimaldigits?: number }
        Returns: string
      }
      st_astext: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: string
      }
      st_astwkb: {
        Args:
          | {
              geom: unknown[]
              ids: number[]
              prec?: number
              prec_z?: number
              prec_m?: number
              with_sizes?: boolean
              with_boxes?: boolean
            }
          | {
              geom: unknown
              prec?: number
              prec_z?: number
              prec_m?: number
              with_sizes?: boolean
              with_boxes?: boolean
            }
        Returns: string
      }
      st_asx3d: {
        Args: { geom: unknown; maxdecimaldigits?: number; options?: number }
        Returns: string
      }
      st_azimuth: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_boundary: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_boundingdiagonal: {
        Args: { geom: unknown; fits?: boolean }
        Returns: unknown
      }
      st_buffer: {
        Args:
          | { geom: unknown; radius: number; options?: string }
          | { geom: unknown; radius: number; quadsegs: number }
        Returns: unknown
      }
      st_buildarea: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_centroid: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      st_cleangeometry: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_clipbybox2d: {
        Args: { geom: unknown; box: unknown }
        Returns: unknown
      }
      st_closestpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_clusterintersecting: {
        Args: { "": unknown[] }
        Returns: unknown[]
      }
      st_collect: {
        Args: { "": unknown[] } | { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_collectionextract: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_collectionhomogenize: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_concavehull: {
        Args: {
          param_geom: unknown
          param_pctconvex: number
          param_allow_holes?: boolean
        }
        Returns: unknown
      }
      st_contains: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_containsproperly: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_convexhull: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_coorddim: {
        Args: { geometry: unknown }
        Returns: number
      }
      st_coveredby: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_covers: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_crosses: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_curvetoline: {
        Args: { geom: unknown; tol?: number; toltype?: number; flags?: number }
        Returns: unknown
      }
      st_delaunaytriangles: {
        Args: { g1: unknown; tolerance?: number; flags?: number }
        Returns: unknown
      }
      st_difference: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number }
        Returns: unknown
      }
      st_dimension: {
        Args: { "": unknown }
        Returns: number
      }
      st_disjoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_distance: {
        Args:
          | { geog1: unknown; geog2: unknown; use_spheroid?: boolean }
          | { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_distancesphere: {
        Args:
          | { geom1: unknown; geom2: unknown }
          | { geom1: unknown; geom2: unknown; radius: number }
        Returns: number
      }
      st_distancespheroid: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_dump: {
        Args: { "": unknown }
        Returns: Database["public"]["CompositeTypes"]["geometry_dump"][]
      }
      st_dumppoints: {
        Args: { "": unknown }
        Returns: Database["public"]["CompositeTypes"]["geometry_dump"][]
      }
      st_dumprings: {
        Args: { "": unknown }
        Returns: Database["public"]["CompositeTypes"]["geometry_dump"][]
      }
      st_dumpsegments: {
        Args: { "": unknown }
        Returns: Database["public"]["CompositeTypes"]["geometry_dump"][]
      }
      st_dwithin: {
        Args: {
          geog1: unknown
          geog2: unknown
          tolerance: number
          use_spheroid?: boolean
        }
        Returns: boolean
      }
      st_endpoint: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_envelope: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_equals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_expand: {
        Args:
          | { box: unknown; dx: number; dy: number }
          | { box: unknown; dx: number; dy: number; dz?: number }
          | { geom: unknown; dx: number; dy: number; dz?: number; dm?: number }
        Returns: unknown
      }
      st_exteriorring: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_flipcoordinates: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_force2d: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_force3d: {
        Args: { geom: unknown; zvalue?: number }
        Returns: unknown
      }
      st_force3dm: {
        Args: { geom: unknown; mvalue?: number }
        Returns: unknown
      }
      st_force3dz: {
        Args: { geom: unknown; zvalue?: number }
        Returns: unknown
      }
      st_force4d: {
        Args: { geom: unknown; zvalue?: number; mvalue?: number }
        Returns: unknown
      }
      st_forcecollection: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_forcecurve: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_forcepolygonccw: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_forcepolygoncw: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_forcerhr: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_forcesfs: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_generatepoints: {
        Args:
          | { area: unknown; npoints: number }
          | { area: unknown; npoints: number; seed: number }
        Returns: unknown
      }
      st_geogfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_geogfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_geographyfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_geohash: {
        Args:
          | { geog: unknown; maxchars?: number }
          | { geom: unknown; maxchars?: number }
        Returns: string
      }
      st_geomcollfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomcollfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_geometricmedian: {
        Args: {
          g: unknown
          tolerance?: number
          max_iter?: number
          fail_if_not_converged?: boolean
        }
        Returns: unknown
      }
      st_geometryfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_geometrytype: {
        Args: { "": unknown }
        Returns: string
      }
      st_geomfromewkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfromewkt: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfromgeojson: {
        Args: { "": Json } | { "": Json } | { "": string }
        Returns: unknown
      }
      st_geomfromgml: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfromkml: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfrommarc21: {
        Args: { marc21xml: string }
        Returns: unknown
      }
      st_geomfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfromtwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_gmltosql: {
        Args: { "": string }
        Returns: unknown
      }
      st_hasarc: {
        Args: { geometry: unknown }
        Returns: boolean
      }
      st_hausdorffdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_hexagon: {
        Args: { size: number; cell_i: number; cell_j: number; origin?: unknown }
        Returns: unknown
      }
      st_hexagongrid: {
        Args: { size: number; bounds: unknown }
        Returns: Record<string, unknown>[]
      }
      st_interpolatepoint: {
        Args: { line: unknown; point: unknown }
        Returns: number
      }
      st_intersection: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number }
        Returns: unknown
      }
      st_intersects: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_isclosed: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_iscollection: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_isempty: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_ispolygonccw: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_ispolygoncw: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_isring: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_issimple: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_isvalid: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_isvaliddetail: {
        Args: { geom: unknown; flags?: number }
        Returns: Database["public"]["CompositeTypes"]["valid_detail"]
      }
      st_isvalidreason: {
        Args: { "": unknown }
        Returns: string
      }
      st_isvalidtrajectory: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_length: {
        Args:
          | { "": string }
          | { "": unknown }
          | { geog: unknown; use_spheroid?: boolean }
        Returns: number
      }
      st_length2d: {
        Args: { "": unknown }
        Returns: number
      }
      st_letters: {
        Args: { letters: string; font?: Json }
        Returns: unknown
      }
      st_linecrossingdirection: {
        Args: { line1: unknown; line2: unknown }
        Returns: number
      }
      st_linefromencodedpolyline: {
        Args: { txtin: string; nprecision?: number }
        Returns: unknown
      }
      st_linefrommultipoint: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_linefromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_linefromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_linelocatepoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_linemerge: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_linestringfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_linetocurve: {
        Args: { geometry: unknown }
        Returns: unknown
      }
      st_locatealong: {
        Args: { geometry: unknown; measure: number; leftrightoffset?: number }
        Returns: unknown
      }
      st_locatebetween: {
        Args: {
          geometry: unknown
          frommeasure: number
          tomeasure: number
          leftrightoffset?: number
        }
        Returns: unknown
      }
      st_locatebetweenelevations: {
        Args: { geometry: unknown; fromelevation: number; toelevation: number }
        Returns: unknown
      }
      st_longestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_m: {
        Args: { "": unknown }
        Returns: number
      }
      st_makebox2d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_makeline: {
        Args: { "": unknown[] } | { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_makepolygon: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_makevalid: {
        Args: { "": unknown } | { geom: unknown; params: string }
        Returns: unknown
      }
      st_maxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_maximuminscribedcircle: {
        Args: { "": unknown }
        Returns: Record<string, unknown>
      }
      st_memsize: {
        Args: { "": unknown }
        Returns: number
      }
      st_minimumboundingcircle: {
        Args: { inputgeom: unknown; segs_per_quarter?: number }
        Returns: unknown
      }
      st_minimumboundingradius: {
        Args: { "": unknown }
        Returns: Record<string, unknown>
      }
      st_minimumclearance: {
        Args: { "": unknown }
        Returns: number
      }
      st_minimumclearanceline: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_mlinefromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_mlinefromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_mpointfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_mpointfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_mpolyfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_mpolyfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_multi: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_multilinefromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_multilinestringfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_multipointfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_multipointfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_multipolyfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_multipolygonfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_ndims: {
        Args: { "": unknown }
        Returns: number
      }
      st_node: {
        Args: { g: unknown }
        Returns: unknown
      }
      st_normalize: {
        Args: { geom: unknown }
        Returns: unknown
      }
      st_npoints: {
        Args: { "": unknown }
        Returns: number
      }
      st_nrings: {
        Args: { "": unknown }
        Returns: number
      }
      st_numgeometries: {
        Args: { "": unknown }
        Returns: number
      }
      st_numinteriorring: {
        Args: { "": unknown }
        Returns: number
      }
      st_numinteriorrings: {
        Args: { "": unknown }
        Returns: number
      }
      st_numpatches: {
        Args: { "": unknown }
        Returns: number
      }
      st_numpoints: {
        Args: { "": unknown }
        Returns: number
      }
      st_offsetcurve: {
        Args: { line: unknown; distance: number; params?: string }
        Returns: unknown
      }
      st_orderingequals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_orientedenvelope: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_overlaps: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_perimeter: {
        Args: { "": unknown } | { geog: unknown; use_spheroid?: boolean }
        Returns: number
      }
      st_perimeter2d: {
        Args: { "": unknown }
        Returns: number
      }
      st_pointfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_pointfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_pointm: {
        Args: {
          xcoordinate: number
          ycoordinate: number
          mcoordinate: number
          srid?: number
        }
        Returns: unknown
      }
      st_pointonsurface: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_points: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_pointz: {
        Args: {
          xcoordinate: number
          ycoordinate: number
          zcoordinate: number
          srid?: number
        }
        Returns: unknown
      }
      st_pointzm: {
        Args: {
          xcoordinate: number
          ycoordinate: number
          zcoordinate: number
          mcoordinate: number
          srid?: number
        }
        Returns: unknown
      }
      st_polyfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_polyfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_polygonfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_polygonfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_polygonize: {
        Args: { "": unknown[] }
        Returns: unknown
      }
      st_project: {
        Args: { geog: unknown; distance: number; azimuth: number }
        Returns: unknown
      }
      st_quantizecoordinates: {
        Args: {
          g: unknown
          prec_x: number
          prec_y?: number
          prec_z?: number
          prec_m?: number
        }
        Returns: unknown
      }
      st_reduceprecision: {
        Args: { geom: unknown; gridsize: number }
        Returns: unknown
      }
      st_relate: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: string
      }
      st_removerepeatedpoints: {
        Args: { geom: unknown; tolerance?: number }
        Returns: unknown
      }
      st_reverse: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_segmentize: {
        Args: { geog: unknown; max_segment_length: number }
        Returns: unknown
      }
      st_setsrid: {
        Args: { geog: unknown; srid: number } | { geom: unknown; srid: number }
        Returns: unknown
      }
      st_sharedpaths: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_shiftlongitude: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_shortestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_simplifypolygonhull: {
        Args: { geom: unknown; vertex_fraction: number; is_outer?: boolean }
        Returns: unknown
      }
      st_split: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_square: {
        Args: { size: number; cell_i: number; cell_j: number; origin?: unknown }
        Returns: unknown
      }
      st_squaregrid: {
        Args: { size: number; bounds: unknown }
        Returns: Record<string, unknown>[]
      }
      st_srid: {
        Args: { geog: unknown } | { geom: unknown }
        Returns: number
      }
      st_startpoint: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_subdivide: {
        Args: { geom: unknown; maxvertices?: number; gridsize?: number }
        Returns: unknown[]
      }
      st_summary: {
        Args: { "": unknown } | { "": unknown }
        Returns: string
      }
      st_swapordinates: {
        Args: { geom: unknown; ords: unknown }
        Returns: unknown
      }
      st_symdifference: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number }
        Returns: unknown
      }
      st_symmetricdifference: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_tileenvelope: {
        Args: {
          zoom: number
          x: number
          y: number
          bounds?: unknown
          margin?: number
        }
        Returns: unknown
      }
      st_touches: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_transform: {
        Args:
          | { geom: unknown; from_proj: string; to_proj: string }
          | { geom: unknown; from_proj: string; to_srid: number }
          | { geom: unknown; to_proj: string }
        Returns: unknown
      }
      st_triangulatepolygon: {
        Args: { g1: unknown }
        Returns: unknown
      }
      st_union: {
        Args:
          | { "": unknown[] }
          | { geom1: unknown; geom2: unknown }
          | { geom1: unknown; geom2: unknown; gridsize: number }
        Returns: unknown
      }
      st_voronoilines: {
        Args: { g1: unknown; tolerance?: number; extend_to?: unknown }
        Returns: unknown
      }
      st_voronoipolygons: {
        Args: { g1: unknown; tolerance?: number; extend_to?: unknown }
        Returns: unknown
      }
      st_within: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_wkbtosql: {
        Args: { wkb: string }
        Returns: unknown
      }
      st_wkttosql: {
        Args: { "": string }
        Returns: unknown
      }
      st_wrapx: {
        Args: { geom: unknown; wrap: number; move: number }
        Returns: unknown
      }
      st_x: {
        Args: { "": unknown }
        Returns: number
      }
      st_xmax: {
        Args: { "": unknown }
        Returns: number
      }
      st_xmin: {
        Args: { "": unknown }
        Returns: number
      }
      st_y: {
        Args: { "": unknown }
        Returns: number
      }
      st_ymax: {
        Args: { "": unknown }
        Returns: number
      }
      st_ymin: {
        Args: { "": unknown }
        Returns: number
      }
      st_z: {
        Args: { "": unknown }
        Returns: number
      }
      st_zmax: {
        Args: { "": unknown }
        Returns: number
      }
      st_zmflag: {
        Args: { "": unknown }
        Returns: number
      }
      st_zmin: {
        Args: { "": unknown }
        Returns: number
      }
      text: {
        Args: { "": unknown }
        Returns: string
      }
      unlockrows: {
        Args: { "": string }
        Returns: number
      }
      update_user_profile: {
        Args: {
          user_id: string
          user_name: string
          user_role: string
          user_organization: string
        }
        Returns: undefined
      }
      updategeometrysrid: {
        Args: {
          catalogn_name: string
          schema_name: string
          table_name: string
          column_name: string
          new_srid_in: number
        }
        Returns: string
      }
    }
    Enums: {
      application_status: "pending" | "approved" | "rejected"
      carbon_data_source: "manual" | "iot" | "erp" | "smart_meter"
      emission_scope: "scope1" | "scope2" | "scope3"
      engagement_status: "planned" | "completed" | "requires_follow_up"
      esg_category: "environmental" | "social" | "governance"
      esg_status: "on_track" | "at_risk" | "off_track"
      impact_level: "low" | "medium" | "high" | "very_high"
      industry_type:
        | "manufacturing"
        | "retail"
        | "technology"
        | "agriculture"
        | "transportation"
        | "energy"
        | "healthcare"
        | "other"
      initiative_status: "planned" | "in_progress" | "completed" | "on_hold"
      integration_status: "active" | "inactive" | "error" | "pending"
      integration_type: "erp" | "crm" | "scm" | "hrm" | "custom"
      metric_type: "wildlife" | "supply_chain" | "sensor" | "collaboration"
      partner_status: "active" | "inactive" | "pending"
      partnership_type: "technology" | "consulting" | "research" | "other"
      policy_category:
        | "compliance"
        | "security"
        | "hr"
        | "operations"
        | "finance"
        | "environmental"
        | "social"
        | "governance"
      policy_status: "draft" | "under_review" | "active" | "archived"
      report_status: "draft" | "under_review" | "published"
      risk_level: "high" | "medium" | "low"
      security_incident_category:
        | "breach"
        | "malware"
        | "phishing"
        | "ddos"
        | "other"
      security_incident_status: "open" | "investigating" | "resolved" | "closed"
      security_severity: "low" | "medium" | "high" | "critical"
      supplier_status: "pending" | "approved" | "at_risk" | "suspended"
      task_status: "todo" | "in_progress" | "done"
      user_role:
        | "Supply Chain Manager"
        | "ESG Officer"
        | "CSR Leader"
        | "Sustainability Director"
        | "Operations Manager"
        | "Other"
      visualization_type:
        | "bar"
        | "line"
        | "pie"
        | "heatmap"
        | "radar"
        | "area"
        | "gauge"
    }
    CompositeTypes: {
      geometry_dump: {
        path: number[] | null
        geom: unknown | null
      }
      valid_detail: {
        valid: boolean | null
        reason: string | null
        location: unknown | null
      }
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      application_status: ["pending", "approved", "rejected"],
      carbon_data_source: ["manual", "iot", "erp", "smart_meter"],
      emission_scope: ["scope1", "scope2", "scope3"],
      engagement_status: ["planned", "completed", "requires_follow_up"],
      esg_category: ["environmental", "social", "governance"],
      esg_status: ["on_track", "at_risk", "off_track"],
      impact_level: ["low", "medium", "high", "very_high"],
      industry_type: [
        "manufacturing",
        "retail",
        "technology",
        "agriculture",
        "transportation",
        "energy",
        "healthcare",
        "other",
      ],
      initiative_status: ["planned", "in_progress", "completed", "on_hold"],
      integration_status: ["active", "inactive", "error", "pending"],
      integration_type: ["erp", "crm", "scm", "hrm", "custom"],
      metric_type: ["wildlife", "supply_chain", "sensor", "collaboration"],
      partner_status: ["active", "inactive", "pending"],
      partnership_type: ["technology", "consulting", "research", "other"],
      policy_category: [
        "compliance",
        "security",
        "hr",
        "operations",
        "finance",
        "environmental",
        "social",
        "governance",
      ],
      policy_status: ["draft", "under_review", "active", "archived"],
      report_status: ["draft", "under_review", "published"],
      risk_level: ["high", "medium", "low"],
      security_incident_category: [
        "breach",
        "malware",
        "phishing",
        "ddos",
        "other",
      ],
      security_incident_status: ["open", "investigating", "resolved", "closed"],
      security_severity: ["low", "medium", "high", "critical"],
      supplier_status: ["pending", "approved", "at_risk", "suspended"],
      task_status: ["todo", "in_progress", "done"],
      user_role: [
        "Supply Chain Manager",
        "ESG Officer",
        "CSR Leader",
        "Sustainability Director",
        "Operations Manager",
        "Other",
      ],
      visualization_type: [
        "bar",
        "line",
        "pie",
        "heatmap",
        "radar",
        "area",
        "gauge",
      ],
    },
  },
} as const
