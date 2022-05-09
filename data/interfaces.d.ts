export interface NewsItem {
  title: string;
  url: string;
  source: string;
  date: string;
  location?: string;
  blurb?: string;
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
  slug: string;
}
