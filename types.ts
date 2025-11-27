export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  location: string;
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
}
