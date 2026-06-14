export type FeaturedProject = {
  id: string;
  title: string;
  description: string;
  value: string;
  label: string;
  badges: string[];
  image: {
    src: string;
    alt: string;
  };
  links: {
    live: string;
    source: string;
    caseStudy: string;
  };
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "devquiz",
    title: "DevQuiz",
    description:
      "A fully tested quiz application built with QuizAPI.io, TypeScript and modern React patterns.",
    value: "~90%",
    label: "Test Coverage",
    badges: ["QuizAPI.io", "Playwright E2E", "TypeScript"],
    image: {
      src: "/images/projects/placeholder.webp",
      alt: "Placeholder project preview",
    },
    links: {
      live: "https://dev-quiz-v.netlify.app/",
      source: "https://github.com/denichinv/quiz-app",
      caseStudy: "devquiz",
    },
  },
  {
    id: "cinevault",
    title: "CineVault",
    description:
      "A movie discovery app using the TMDB API with filtering, sorting and a tested UI.",
    value: "95.52%",
    label: "Test Coverage",
    badges: ["TMDB API", "Filtering", "GitHub Actions"],
    image: {
      src: "/images/projects/placeholder.webp",
      alt: "Placeholder project preview",
    },
    links: {
      live: "https://cinevaultmoviesapp.netlify.app/",
      source: "https://github.com/denichinv/CineVault",
      caseStudy: "cinevault",
    },
  },
  {
    id: "workout-builder",
    title: "Workout Builder",
    description:
      "A 7-day workout planning app with custom exercises, persistent state and automated tests.",
    value: "7-Day",
    label: "Workout Planner",
    badges: ["localStorage", "Custom Exercises", "22 Tests"],
    image: {
      src: "/images/projects/placeholder.webp",
      alt: "Placeholder project preview",
    },
    links: {
      live: "https://workoutroutinebuilder.netlify.app/",
      source: "https://github.com/denichinv/workout-routine-builder",
      caseStudy: "workout-builder",
    },
  },
  {
    id: "euphoria-wellness",
    title: "Euphoria Wellness",
    description:
      "A live client-facing wellness studio website built with React, TypeScript and responsive UI.",
    value: "LIVE",
    label: "Client Site",
    badges: ["Client Project", "React 19", "Bilingual"],
    image: {
      src: "/images/projects/placeholder.webp",
      alt: "Placeholder project preview",
    },
    links: {
      live: "https://euphoria-wellness.com/",
      source: "https://github.com/denichinv/euphoria-wellness-studio-bg",
      caseStudy: "euphoria-wellness",
    },
  },
];
