
import React from 'react';
import { NextSeo } from 'next-seo';
import { pageSEO } from '../config/seo';

type SEOProps = {
  pageName: 'home' | 'mission' | 'stories' | 'actNow';
  title?: string;
  description?: string;
  canonical?: string;
  imageUrl?: string;
};

const SEO: React.FC<SEOProps> = ({ 
  pageName, 
  title, 
  description, 
  canonical,
  imageUrl
}) => {
  const pageConfig = pageSEO[pageName];
  
  return (
    <NextSeo
      title={title || pageConfig.title}
      description={description || pageConfig.description}
      canonical={canonical || pageConfig.canonical}
      openGraph={{
        title: title || pageConfig.title,
        description: description || pageConfig.description,
        url: canonical || pageConfig.canonical,
        images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: title || pageConfig.title }] : undefined,
      }}
    />
  );
};

export default SEO;
