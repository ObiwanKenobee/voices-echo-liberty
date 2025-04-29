
// SEO Configuration file
export const defaultSEO = {
  titleTemplate: '%s | Voices for the Voiceless',
  defaultTitle: 'Voices for the Voiceless | Protecting Wildlife and Liberating Humans',
  description: 'Join a global movement protecting wildlife and liberating humans from modern-day slavery—through truth, technology, and sacred responsibility.',
  canonical: 'https://voicesforthevoiceless.org/',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://voicesforthevoiceless.org/',
    siteName: 'Voices for the Voiceless',
    title: 'Voices for the Voiceless',
    description: 'Join a global movement protecting wildlife and liberating humans from modern-day slavery—through truth, technology, and sacred responsibility.',
    images: [
      {
        url: 'https://lovable.dev/opengraph-image-p98pqg.png',
        width: 1200,
        height: 630,
        alt: 'Voices for the Voiceless',
      },
    ],
  },
  twitter: {
    handle: '@lovable_dev',
    site: '@lovable_dev',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: 'Voices for the Voiceless',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
};

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'Protecting Wildlife and Liberating Humans',
    description: 'Join a global movement protecting wildlife and liberating humans from modern-day slavery—through truth, technology, and sacred responsibility.',
    canonical: 'https://voicesforthevoiceless.org/',
  },
  mission: {
    title: 'Our Sacred Mission',
    description: 'We exist to protect the exploited, amplify silenced voices, and restore balance between humanity and the natural world through technology, advocacy, and direct intervention.',
    canonical: 'https://voicesforthevoiceless.org/mission',
  },
  stories: {
    title: 'Stories of Impact',
    description: 'Behind every statistic is a story. Meet the wildlife and people whose lives have been changed through our collective action.',
    canonical: 'https://voicesforthevoiceless.org/stories',
  },
  actNow: {
    title: 'Take Action Now',
    description: 'Whether you\'re a technologist, donor, or activist, there\'s a place for you in our global community of changemakers.',
    canonical: 'https://voicesforthevoiceless.org/act-now',
  }
};

// Schema markup for various page types
export const getOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Voices for the Voiceless',
    url: 'https://voicesforthevoiceless.org',
    logo: 'https://voicesforthevoiceless.org/logo.png',
    description: 'A global movement protecting wildlife and liberating humans from modern-day slavery—through truth, technology, and sacred responsibility.',
    sameAs: [
      'https://twitter.com/lovable_dev',
      'https://www.facebook.com/voicesforthevoiceless',
      'https://www.instagram.com/voicesforthevoiceless',
      'https://www.linkedin.com/company/voices-for-the-voiceless',
    ],
  };
};

export const getArticleSchema = (article: {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
  modifiedAt?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.imageUrl,
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt || article.publishedAt,
    publisher: {
      '@type': 'Organization',
      name: 'Voices for the Voiceless',
      logo: {
        '@type': 'ImageObject',
        url: 'https://voicesforthevoiceless.org/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
};
