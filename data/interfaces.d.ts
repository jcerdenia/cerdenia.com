export interface NewsItem {
  title: string;
  url: string;
  source: string;
  date: string;
  language?: string;
  location?: string;
  blurb?: string | null;
}

export interface NewsItemGroup {
  title: string;
  items: NewsItem[];
}

export interface Work {
  title: string;
  subtitle?: string;
  instrumentation: string;
  year: number;
  description?: string;
  category: string;
  scoreUrl?: string;
  slug: string;
}

export interface Writing {
  title: string;
  date: string;
  location?: string;
  slug: string;
}
