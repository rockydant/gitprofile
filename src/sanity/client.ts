// Sanity client for fetching data from Sanity CMS
const SANITY_PROJECT_ID = "wuwsdjgk";
const SANITY_DATASET = "production";
const SANITY_API_VERSION = "2024-01-01";
const SANITY_BASE_URL = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}`;

interface SanityProject {
  title: string;
  description: string;
  imageUrl: string;
  link: {
    _type: string;
    current: string;
  } | string;
}

interface TransformedProject {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

/**
 * Fetches data from Sanity API with proper error handling
 */
async function fetchFromSanity(query: string): Promise<any> {
  try {
    const url = `${SANITY_BASE_URL}?query=${encodeURIComponent(query)}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'cors',
    });
    
    if (!response.ok) {
      if (response.status === 403) {
        throw new Error('CORS error: Sanity API blocked request from localhost');
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.result || [];
  } catch (error) {
    console.error('Failed to fetch from Sanity:', error);
    throw error;
  }
}

/**
 * Fetches projects from Sanity
 */
export async function fetchSanityProjects(): Promise<TransformedProject[]> {
  try {
    const query = `*[_type == "project"]{
      title,
      description,
      imageUrl,
      link
    }`;
    
    const projects: SanityProject[] = await fetchFromSanity(query);
    
    // Transform Sanity data to match the expected format
    const transformedProjects = projects.map((project: SanityProject) => ({
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl,
      link: typeof project.link === 'object' ? project.link.current : project.link || '#',
    }));
    
    return transformedProjects;
  } catch (error) {
    console.log('Using config projects as fallback.');
    return [];
  }
}

/**
 * Fetches experiences from Sanity (for future use)
 */
export async function fetchSanityExperiences(): Promise<any[]> {
  try {
    const query = `*[_type == "experience"]{
      company,
      position,
      description,
      from,
      to,
      companyLink
    }`;
    
    return await fetchFromSanity(query);
  } catch (error) {
    console.log('Failed to fetch experiences from Sanity, using config fallback.');
    return [];
  }
}

/**
 * Fetches skills from Sanity (for future use)
 */
export async function fetchSanitySkills(): Promise<string[]> {
  try {
    const query = `*[_type == "skill"]{
      name
    }`;
    
    const skills = await fetchFromSanity(query);
    return skills.map((skill: any) => skill.name);
  } catch (error) {
    console.log('Failed to fetch skills from Sanity, using config fallback.');
    return [];
  }
}

/**
 * Fetches educations from Sanity (for future use)
 */
export async function fetchSanityEducations(): Promise<any[]> {
  try {
    const query = `*[_type == "education"]{
      institution,
      degree,
      from,
      to
    }`;
    
    return await fetchFromSanity(query);
  } catch (error) {
    console.log('Failed to fetch educations from Sanity, using config fallback.');
    return [];
  }
}

/**
 * Fetches certifications from Sanity (for future use)
 */
export async function fetchSanityCertifications(): Promise<any[]> {
  try {
    const query = `*[_type == "certification"]{
      name,
      body,
      year,
      link
    }`;
    
    return await fetchFromSanity(query);
  } catch (error) {
    console.log('Failed to fetch certifications from Sanity, using config fallback.');
    return [];
  }
} 