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
    liveLabel?: string;
    source: string;
    caseStudy: string;
  };
  caseStudy: {
    overview: string;
    challenge: string;
    architecture: string;
    testing: string;
    audit?: {
      source: string;
      date: string;
      reportUrl: string;
      metrics: { value: string; label: string }[];
    };
    features: string[];
    techStack: string[];
  };
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "euphoria-wellness",
    title: "Euphoria Wellness Studio",
    description:
      "A production bilingual website for a wellness studio in Blagoevgrad, presenting Pilates Reformer and XBODY EMS services with responsive media, a booking enquiry form and technical SEO.",
    value: "LIVE",
    label: "Client Website",
    badges: [
      "Client Project",
      "React 19",
      "Bulgarian & English",
      "28 Automated Tests",
    ],
    image: {
      src: "/images/projects/euphoria-wellness-banner.webp",
      alt: "Euphoria Wellness Studio homepage presenting XBODY EMS and Pilates Reformer services.",
    },
    links: {
      live: "https://euphoria-wellness.com/",
      liveLabel: "Visit Live Site",
      source: "https://github.com/denichinv/euphoria-wellness-studio-bg",
      caseStudy: "euphoria-wellness",
    },
    caseStudy: {
      overview:
        "Euphoria Wellness Studio is a production client website for a wellness studio in Blagoevgrad, Bulgaria. It presents the studio's Pilates Reformer and XBODY EMS services in Bulgarian and English and provides a booking enquiry form for prospective clients. A Semrush audit generated in September 2026 reported 95% Site Health, 99% AI Search Health and no errors.",
      challenge:
        "The project needed to present two specialised wellness services within one consistent visual experience. It also needed to support Bulgarian and English content, adapt to different screen sizes, manage image and video assets efficiently, and provide a straightforward way for visitors to contact the studio.",
      architecture:
        "The website is a single-page React 19 and TypeScript application organised into reusable section and UI components. Typed translation dictionaries and a shared language provider manage the Bulgarian and English content. Responsive picture sources provide different image sizes for mobile and desktop screens, while gallery videos use poster images, deferred loading and viewport-based playback. Form submissions are handled through Netlify Forms without a custom backend.",
      testing:
        "The project has 28 automated tests across eight test files using Vitest and React Testing Library. They cover component rendering, semantic headings, language selection and persistence, responsive media attributes, viewport-controlled video behaviour, reduced-motion preferences, and contact-form submission states. GitHub Actions runs linting, all tests and a production build for pull requests and changes to the main branch.",
      audit: {
        source: "Semrush Site Audit",
        date: "3 September 2026",
        reportUrl: "/reports/euphoria-semrush-site-audit-2026-09-03.pdf",
        metrics: [
          { value: "95%", label: "Site Health" },
          { value: "99%", label: "AI Search Health" },
          { value: "0", label: "Errors" },
        ],
      },
      features: [
        "Bulgarian-first interface with English language switching",
        "Pilates Reformer and XBODY EMS service presentation",
        "Responsive WebP images for mobile and desktop screens",
        "Deferred gallery videos with poster images",
        "Viewport-based video playback",
        "Reduced-motion handling for animated media",
        "Booking enquiry form powered by Netlify Forms",
        "Canonical and social-sharing metadata",
        "LocalBusiness structured data",
        "Sitemap and robots.txt configuration",
        "28 automated component and integration tests",
        "Automated quality checks with GitHub Actions",
        "Netlify deploy previews and production hosting",
        "Semrush audit: 95% Site Health, 99% AI Search Health and 0 errors as of September 2026",
      ],
      techStack: [
        "React 19",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Vitest",
        "React Testing Library",
        "GitHub Actions",
        "Netlify",
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
