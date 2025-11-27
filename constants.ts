import { Project, Post, GalleryItem, SocialLink } from './types';

export const RESUME_LINK = 'https://drive.google.com/file/d/1oeRtjUIVHWZxJdFEt0RdzQW9uIsiyHC6/view?usp=sharing';

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Twitter', url: 'https://x.com/TechWithPratham', handle: '@TechWithPratham' },
  { name: 'GitHub', url: 'https://github.com/prathamisonline', handle: '@prathamisonline' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/prathamsrivastavas/', handle: 'in/prathamsrivastavas' },
  { name: 'Email', url: 'mailto:prathamsrivastavas@gmail.com', handle: 'prathamsrivastavas@gmail.com' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus SaaS Platform',
    description: 'A comprehensive B2B SaaS platform for managing enterprise workflows with real-time analytics.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    link: '#',
  },
  {
    id: '2',
    title: 'AI Code Assistant',
    description: 'An intelligent VS Code extension powered by Gemini API to suggest code optimizations in real-time.',
    tags: ['React', 'Node.js', 'Gemini API', 'Extension'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    link: '#',
  },
  {
    id: '3',
    title: 'E-Commerce Dashboard',
    description: 'High-performance inventory management dashboard processing thousands of SKUs.',
    tags: ['Vue.js', 'Firebase', 'Tailwind', 'Recharts'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    link: '#',
  },
  {
    id: '4',
    title: 'Crypto FinTech App',
    description: 'Mobile-first web application for tracking decentralized finance assets across chains.',
    tags: ['React Native', 'Web3.js', 'GraphQL'],
    imageUrl: 'https://picsum.photos/800/600?random=4',
    link: '#',
  }
];

export const POSTS: Post[] = [
  {
    id: '1',
    title: 'Mastering Server Actions in Next.js 14',
    excerpt: 'A deep dive into how server actions are changing the way we fetch and mutate data in React applications.',
    date: 'Oct 12, 2023',
    readTime: '5 min read',
    category: 'Engineering',
    content: `Server Actions in Next.js 14 represent a paradigm shift in how we build React applications. Gone are the days of manually creating API routes for every single mutation.

With Server Actions, you can define asynchronous functions that run securely on the server, and call them directly from your components. This reduces the amount of client-side JavaScript and simplifies the mental model for data mutation.

## The Mental Model

Traditionally, a form submission involved:
1. Creating a state for input values.
2. Creating an API route handler.
3. Sending a fetch request with JSON.
4. Handling loading and error states.
5. Revalidating data.

With Server Actions, this collapses into a single function call. The framework handles the heavy lifting of serialization and communication.

## Progressive Enhancement

One of the most beautiful aspects of Server Actions is how they support progressive enhancement by default. If JavaScript fails to load, forms can still work using standard HTML form submission semantics.

## Conclusion

As we move towards a more server-centric React, features like Server Actions will become the standard for building robust, performant web applications.`
  },
  {
    id: '2',
    title: 'Why I Switched from Redux to Zustand',
    excerpt: 'State management doesn’t have to be complicated. Here is why minimalist libraries are winning.',
    date: 'Sep 28, 2023',
    readTime: '4 min read',
    category: 'Opinion',
    content: `Redux has been the industry standard for years, and for good reason. It provides predictability, debuggability, and a structured way to handle complex state. However, the boilerplate has always been a pain point.

Enter Zustand.

Zustand is a small, fast, and scalable bearbones state-management solution. It has a comfy API based on hooks, and it doesn't wrap your app in context providers.

## Simplicity First

Defining a store in Zustand is incredibly simple. You don't need actions, reducers, or types scattered across multiple files. You just define a hook.

## Performance

Zustand solves the zombie child problem and allows for transient updates without re-rendering components, something that requires careful optimization in Redux context-based solutions.

## The Verdict

For 95% of applications, Redux is overkill. Zustand offers the right balance of power and simplicity, letting developers focus on building features rather than managing boilerplate.`
  },
  {
    id: '3',
    title: 'Building Accessible UIs with Radix',
    excerpt: 'Accessibility is not an afterthought. Learn how headless UI libraries make it easier.',
    date: 'Aug 15, 2023',
    readTime: '6 min read',
    category: 'Tutorial',
    content: `Building accessible UI components from scratch is hard. You have to manage keyboard navigation, focus trapping, ARIA attributes, and screen reader announcements.

Radix UI solves this by providing unstyled, accessible primitives.

## What is Headless UI?

A headless UI library gives you the logic and accessibility features of a component without any styles. This gives you complete control over the design while ensuring your app is usable by everyone.

## The Popover Primitive

Take a Popover for example. Building one requires handling:
- Toggling visibility
- Positioning (using Popper.js or Floating UI)
- Clicking outside to close
- Focus management
- Escape key to close

Radix handles all of this out of the box. You just bring your Tailwind classes.`
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', src: 'https://picsum.photos/600/600?random=10', alt: 'Workspace Setup', location: 'Home Office' },
  { id: '2', src: 'https://picsum.photos/600/800?random=11', alt: 'Conference Talk', location: 'Bangalore' },
  { id: '3', src: 'https://picsum.photos/600/600?random=12', alt: 'Hiking Trip', location: 'Himachal' },
  { id: '4', src: 'https://picsum.photos/800/600?random=13', alt: 'Coffee Shop Coding', location: 'Mumbai' },
  { id: '5', src: 'https://picsum.photos/600/600?random=14', alt: 'Team Meetup', location: 'Goa' },
  { id: '6', src: 'https://picsum.photos/600/800?random=15', alt: 'Urban Photography', location: 'Delhi' },
];