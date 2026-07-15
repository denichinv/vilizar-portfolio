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
  caseStudy: {
    overview: string;
    challenge: string;
    architecture: string;
    testing: string;
    features: string[];
    techStack: string[];
  };
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "euphoria-wellness",
    title: "Euphoria Wellness",
    description:
      "A live client-facing wellness studio website built with React, TypeScript and responsive UI.",
    value: "LIVE",
    label: "Client Site",
    badges: ["Client Project", "React 19", "Bilingual"],
    image: {
      src: "/images/projects/euphoria-wellness-banner.webp",
      alt: "Euphoria Wellness website preview showing a modern wellness studio landing page.",
    },
    links: {
      live: "https://euphoria-wellness.com/",
      source: "https://github.com/denichinv/euphoria-wellness-studio-bg",
      caseStudy: "euphoria-wellness",
    },
    caseStudy: {
      overview:
        "Euphoria Wellness is a client website developed for a wellness studio to provide a modern online presence. The project focuses on responsive design, accessibility and delivering a polished production-ready experience.",
      challenge:
        "Designing a responsive client website that balances aesthetics, usability and maintainability while meeting real client requirements.",
      architecture:
        "The project uses reusable React components and a scalable folder structure to keep the codebase organised while supporting future content expansion.",
      testing:
        "The project was manually tested across multiple screen sizes and browsers to ensure a consistent responsive experience and reliable functionality.",
      features: [
        "Fully responsive design",
        "Modern landing page experience",
        "Bilingual content",
        "Performance-focused implementation",
        "Reusable React components",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "React Router",
        "Responsive Design",
      ],
    },
  },
  {
    id: "devquiz",
    title: "DevQuiz",
    description:
      "A fully tested quiz application built with QuizAPI.io, TypeScript and modern React patterns.",
    value: "~90%",
    label: "Test Coverage",
    badges: ["QuizAPI.io", "Playwright E2E", "TypeScript"],
    image: {
      src: "/images/projects/devquiz-banner.webp",
      alt: "DevQuiz app preview showing a developer quiz interface with answer options.",
    },
    links: {
      live: "https://dev-quiz-v.netlify.app/",
      source: "https://github.com/denichinv/quiz-app",
      caseStudy: "devquiz",
    },
    caseStudy: {
      overview:
        "DevQuiz is a quiz application built to strengthen my TypeScript, API integration and automated testing skills. It focuses on clean React patterns, reliable user interactions and a well-tested codebase.",
      challenge:
        "Creating a reliable quiz experience while maintaining high test coverage and a responsive user interface.",
      architecture:
        "The application follows a component-based React architecture with reusable UI components, clear state management and strict TypeScript typing to keep the codebase maintainable.",
      testing:
        "The project includes unit, integration and end-to-end tests using Vitest, React Testing Library and Playwright to ensure a reliable user experience.",
      features: [
        "Fetches quiz questions from QuizAPI.io",
        "Category and difficulty selection",
        "Instant score calculation",
        "Responsive interface",
        "Comprehensive automated testing",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "QuizAPI.io",
        "Vitest",
        "React Testing Library",
        "Playwright",
      ],
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
      src: "/images/projects/workout-builder-banner.webp",
      alt: "Workout Builder app preview showing a weekly workout planning interface.",
    },
    links: {
      live: "https://workoutroutinebuilder.netlify.app/",
      source: "https://github.com/denichinv/workout-routine-builder",
      caseStudy: "workout-builder",
    },
    caseStudy: {
      overview:
        "Workout Builder is a workout planning application that helps users create and manage weekly exercise routines. The project focuses on state management, persistent storage with localStorage and an intuitive user experience.",
      challenge:
        "Managing workout state while persisting user data across sessions using localStorage.",
      architecture:
        "The application separates reusable UI components from state management logic, making it easier to extend new exercises and weekly plans without increasing complexity.",
      testing:
        "Core application behaviour is covered with automated tests to verify state updates, persistent storage and user interactions.",
      features: [
        "Create weekly workout routines",
        "Add custom exercises",
        "Persistent localStorage data",
        "Simple drag-free workflow",
        "Responsive design",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "localStorage",
        "Vitest",
        "React Testing Library",
      ],
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
      src: "/images/projects/cinevault-banner.webp",
      alt: "CineVault app preview showing a movie discovery interface with movie cards.",
    },
    links: {
      live: "https://cinevaultmoviesapp.netlify.app/",
      source: "https://github.com/denichinv/CineVault",
      caseStudy: "cinevault",
    },
    caseStudy: {
      overview:
        "CineVault is a movie discovery application built to practise API integration, filtering, sorting, responsive UI and automated testing.",
      challenge:
        "Building a fast movie discovery experience around the TMDB API while keeping the UI responsive and the codebase maintainable.",
      architecture:
        "The application is organised into reusable React components with separated business logic, allowing filtering, sorting and API communication to remain maintainable as the project grows.",
      testing:
        "The application includes comprehensive automated tests covering components, user interactions and critical application flows while maintaining high code coverage.",
      features: [
        "Movie search powered by the TMDB API",
        "Advanced filtering and sorting",
        "Responsive movie grid",
        "Loading skeletons",
        "High automated test coverage",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "TMDB API",
        "Vitest",
        "React Testing Library",
        "GitHub Actions",
      ],
    },
  },
];
