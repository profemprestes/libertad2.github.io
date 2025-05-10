// src/lib/json-ld.ts
import type { NewsArticle, Product, Match, Equipo } from '@/types';
import { clubContactInfo } from './mock-data'; 
import { equipos } from './equipos-data'; 

const SITE_URL = 'https://pruebaslibertad.netlify.app';
const CLUB_NAME = "Club Atlético Libertad";
const CLUB_LOGO_URL = `${SITE_URL}/LogoLibertad.png`;
const CLUB_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: clubContactInfo.address.split(',')[0]?.trim(), 
  addressLocality: "Canelones",
  addressRegion: "Canelones",
  addressCountry: "UY",
  postalCode: "" 
};
const CLUB_TELEPHONE = clubContactInfo.phone !== '+097 ... ...' ? clubContactInfo.phone.replace(/\s|\+/g, '') : undefined;

// Helper function for safe date parsing
const safeToISOString = (dateString?: string): string | undefined => {
  if (!dateString) return undefined;
  const dateObj = new Date(dateString);
  if (isNaN(dateObj.getTime())) {
    console.warn(`JSON-LD: Invalid date string encountered: ${dateString}`);
    return undefined; 
  }
  return dateObj.toISOString();
};

export function generateOrganizationData() {
  const socialLinks = clubContactInfo.socialMedia.map(sm => sm.url).filter(Boolean);
  
  const organizationData: any = { // Use any or a more specific type if you have one for the schema
    "@context": "https://schema.org",
    "@type": "SportsTeam",
    name: CLUB_NAME,
    alternateName: "Decano del Fútbol Canario",
    url: SITE_URL,
    logo: CLUB_LOGO_URL,
    foundingDate: "1906-03-18", 
    address: CLUB_ADDRESS,
    sport: "Soccer"
  };

  if (CLUB_TELEPHONE || clubContactInfo.email) {
    organizationData.contactPoint = {
      "@type": "ContactPoint",
      ...(CLUB_TELEPHONE && { telephone: CLUB_TELEPHONE }),
      ...(clubContactInfo.email && { email: clubContactInfo.email }),
      contactType: "Customer Service",
    };
  }
  
  if (socialLinks.length > 0) {
    organizationData.sameAs = socialLinks;
  }
  
  return organizationData;
}

export function generateWebSiteData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${CLUB_NAME} - Sitio Oficial`,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate": `${SITE_URL}/buscar?q={search_term_string}` 
      },
      "query-input": "required name=search_term_string"
    },
    publisher: {
      "@type": "SportsTeam",
      name: CLUB_NAME,
      logo: {
        "@type": "ImageObject",
        url: CLUB_LOGO_URL
      }
    }
  };
}

export function generateNewsArticleData(article: NewsArticle) {
  const articleUrl = `${SITE_URL}/news/${article.id}`;
  const imageUrl = article.imageUrl 
    ? (article.imageUrl.startsWith('http') ? article.imageUrl : `${SITE_URL}${article.imageUrl}`) 
    : CLUB_LOGO_URL;

  const bodyContent = (typeof article.content === 'string' && article.content.trim() !== '') 
    ? article.content.replace(/\\n/g, '\n') 
    : article.summary; // Fallback to summary

  const publishedDate = safeToISOString(article.date);

  const newsArticleSchema: any = { 
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    headline: article.title,
    image: [imageUrl],
    author: {
      "@type": "Organization", 
      name: article.author || CLUB_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: CLUB_NAME,
      logo: {
        "@type": "ImageObject",
        url: CLUB_LOGO_URL,
        width: 512,
        height: 512
      },
    },
    description: article.summary,
    articleBody: bodyContent, 
  };

  if (publishedDate) {
    newsArticleSchema.datePublished = publishedDate;
    newsArticleSchema.dateModified = publishedDate;
  }

  return newsArticleSchema;
}

export function generateProductData(product: Product, pageUrl: string) {
  const imageUrl = product.imageUrl.startsWith('http') ? product.imageUrl : `${SITE_URL}${product.imageUrl}`;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [imageUrl],
    description: product.description,
    sku: product.id, 
    brand: {
      "@type": "Brand",
      name: CLUB_NAME,
    },
    offers: {
      "@type": "Offer",
      url: pageUrl, 
      priceCurrency: "UYU",
      price: product.price.toString(),
      availability: "https://schema.org/InStock", 
      seller: {
        "@type": "Organization",
        name: CLUB_NAME,
      },
    },
  };
}

export function generateEventData(match: Match) {
  const eventUrl = `${SITE_URL}/matches#${match.id}`; 

  const teamSchema = (name: string, logoInput?: string) => {
    const logoUrl = logoInput 
        ? (logoInput.startsWith('http') ? logoInput : `${SITE_URL}${logoInput}`) 
        : CLUB_LOGO_URL;
    return {
        "@type": "SportsTeam",
        name: name,
        logo: logoUrl,
    }
  };
  
  const getTeamDetails = (teamName: string, opponentLogo?: string) => {
    if (teamName === CLUB_NAME) {
      return teamSchema(CLUB_NAME, CLUB_LOGO_URL);
    }
    const opponentInfo = equipos.find(e => e.nombre === teamName || e.nombreCorto === teamName);
    return teamSchema(teamName, opponentInfo?.escudoUrl || opponentLogo); 
  };

  const startDate = safeToISOString(match.date);

  const eventSchema: any = { 
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `${match.competition}: ${match.homeTeam} vs ${match.awayTeam}`,
    eventStatus: match.status === 'upcoming' ? "https://schema.org/EventScheduled" : 
                 match.status === 'past' ? "https://schema.org/EventCompleted" : 
                 match.status === 'live' ? "https://schema.org/EventRescheduled" : "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: match.venue,
      address: match.venue === "Estadio Libertad" || match.venue === "Parque Battle" ? CLUB_ADDRESS : undefined,
    },
    homeTeam: getTeamDetails(match.homeTeam, match.homeTeam === CLUB_NAME ? CLUB_LOGO_URL : match.opponentLogoUrl),
    awayTeam: getTeamDetails(match.awayTeam, match.awayTeam === CLUB_NAME ? CLUB_LOGO_URL : match.opponentLogoUrl),
    description: `Partido de ${match.competition} entre ${match.homeTeam} y ${match.awayTeam} en ${match.venue}. Categoría: ${match.category || 'Principal'}.`,
    organizer: {
      "@type": "SportsTeam",
      name: CLUB_NAME,
    },
    url: eventUrl,
  };

  if (startDate) {
    eventSchema.startDate = startDate;
  }

  if (match.status === 'past' && typeof match.homeScore === 'number' && typeof match.awayScore === 'number') {
    eventSchema.result = {
        "@type": "SportsEventResult",
        homeScore: match.homeScore.toString(),
        awayScore: match.awayScore.toString()
    };
  }
  
  return eventSchema;
}


export function generateLocalBusinessData() {
  const socialLinks = clubContactInfo.socialMedia.map(sm => sm.url).filter(Boolean);
  const localBusinessData: any = {
    "@context": "https://schema.org",
    "@type": "SportsClub", 
    name: CLUB_NAME,
    url: `${SITE_URL}/contact`,
    logo: CLUB_LOGO_URL,
    image: CLUB_LOGO_URL,
    address: CLUB_ADDRESS,    
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-34.534986", 
      longitude: "-56.283216",
    },
  };

  if (CLUB_TELEPHONE) {
    localBusinessData.telephone = CLUB_TELEPHONE;
  }
  if (clubContactInfo.email) {
    localBusinessData.email = clubContactInfo.email;
  }
  if (socialLinks.length > 0) {
    localBusinessData.sameAs = socialLinks;
  }

  return localBusinessData;
}

export function JsonLdScript<T>({ data }: { data: T | T[] }): JSX.Element | null {
  if (!data || (Array.isArray(data) && data.length === 0)) return null;
  
  // Create a more stable key, e.g., based on a unique ID if present, or a hash of the stringified data.
  // For simplicity here, if it's an array, we'll use a fixed key or index-based keys for multiple scripts.
  // If data is an object with a 'name' or '@id', use that. Otherwise, fallback carefully.
  let keySuffix = 'default';
  if (typeof data === 'object' && data !== null) {
    if ('@id' in data && typeof (data as any)['@id'] === 'string') {
      keySuffix = (data as any)['@id'];
    } else if ('name' in data && typeof (data as any).name === 'string') {
      keySuffix = (data as any).name;
    } else if ('headline' in data && typeof (data as any).headline === 'string') { // For NewsArticle
      keySuffix = (data as any).headline;
    }
  }
  const scriptKey = `json-ld-${keySuffix.replace(/[^a-zA-Z0-9-_]/g, '') || Math.random().toString(36).substring(7)}`;


  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      key={scriptKey}
    />
  );
}
