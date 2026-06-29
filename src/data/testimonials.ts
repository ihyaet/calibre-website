export interface Testimonial {
  id: string;
  name: string;
  role: string;
  poster: string;
  videoSrc: string | null;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Jhon Doe",
    role: "Content Creator",
    poster: "/renders/testimonial-1-poster.jpg",
    videoSrc: null,
  },
  {
    id: "t2",
    name: "Sarah Chen",
    role: "Video Editor",
    poster: "/renders/testimonial-2-poster.jpg",
    videoSrc: null,
  },
  {
    id: "t3",
    name: "Marcus Reid",
    role: "Music Producer",
    poster: "/renders/testimonial-3-poster.jpg",
    videoSrc: null,
  },
];
