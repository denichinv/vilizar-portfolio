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
      "A developer quiz application with configurable quizzes, a secure server-side QuizAPI proxy, resilient error handling, approximately 90% test coverage and Playwright-tested user journeys.",
    value: "~90%",
    label: "Test Coverage",
    badges: [
      "React 19",
      "Secure API Proxy",
      "49 Vitest Tests",
      "Playwright E2E",
    ],
    image: {
      src: "/images/projects/devquiz-banner.webp",
      alt: "DevQuiz interface showing a developer question with multiple-choice answers and the current score.",
    },
    links: {
      live: "https://dev-quiz-v.netlify.app/",
      source: "https://github.com/denichinv/quiz-app",
      caseStudy: "devquiz",
    },
    caseStudy: {
      overview:
        "DevQuiz is a React 19 and TypeScript application for testing knowledge across developer-focused topics. Users can choose a category, difficulty and quiz length before answering questions supplied by QuizAPI.io. The project combines a focused quiz experience with secure API handling and extensive automated testing.",

      challenge:
        "The main challenge was making a third-party quiz API safe and dependable in a browser-based application. The QuizAPI key could not be exposed to users, and the interface needed to handle failed requests, empty question sets and inconsistent answer options while keeping scoring and navigation predictable.",

      architecture:
        "The React application separates quiz setup, loading, question and completion states into focused components. Browser requests are sent to a Netlify Function, which reads the QuizAPI key from the server environment, requests questions from QuizAPI.io and normalises the response before returning it to the frontend. The client filters unavailable answers, identifies the correct option, shuffles the choices and stores the active quiz state in React.",

      testing:
        "The project has 49 passing Vitest and React Testing Library tests across seven files, covering components, quiz state, API response handling and answer shuffling. The current coverage report shows 89.47% statement coverage and 89.88% line coverage, with all UI components at 100%. Four Playwright tests cover the main browser journeys, including loading the application, starting and completing a quiz, displaying answer feedback and showing the final score. Separate GitHub Actions workflows run the Vitest and Playwright suites on pull requests and changes to the main branch.",

      features: [
        "Seventeen developer-focused quiz categories",
        "Easy, medium and hard difficulty selection",
        "Configurable quizzes with 5, 10, 15 or 20 questions",
        "Server-side QuizAPI proxy using Netlify Functions",
        "API key protected through server environment variables",
        "Normalised and shuffled answer options",
        "Immediate correct and incorrect answer feedback",
        "Live score tracking and final results",
        "Empty-response and request-failure handling",
        "Restartable quiz journey",
        "49 Vitest and React Testing Library tests",
        "Four Playwright end-to-end tests",
        "Automated test workflows with GitHub Actions",
        "Modular Sass architecture",
      ],

      techStack: [
        "React 19",
        "TypeScript",
        "Vite",
        "Sass",
        "QuizAPI.io",
        "Netlify Functions",
        "Vitest",
        "React Testing Library",
        "Playwright",
        "GitHub Actions",
      ],
    },
  },
  {
    id: "workout-builder",
    title: "Workout Builder",
    description:
      "A seven-day workout planner with a searchable exercise library, custom exercises, editable sets and reps, browser persistence and approximately 90% test coverage.",
    value: "7-Day",
    label: "Workout Planner",
    badges: ["React 19", "localStorage", "22 Jest Tests", "~90% Coverage"],
    image: {
      src: "/images/projects/workout-builder-banner.webp",
      alt: "Workout Builder interface showing an exercise library and a seven-day weekly workout plan.",
    },
    links: {
      live: "https://workoutroutinebuilder.netlify.app/",
      source: "https://github.com/denichinv/workout-routine-builder",
      caseStudy: "workout-builder",
    },
    caseStudy: {
      overview:
        "Workout Builder is a React 19 application for creating a complete weekly exercise routine in the browser. Users can search the built-in exercise library, create their own exercises, assign them to any day of the week and customise the number of sets and repetitions. Both the exercise library and weekly plan persist between sessions without requiring an account.",

      challenge:
        "The main challenge was keeping seven independent daily plans, a customisable exercise library and editable workout values synchronised through one interface. Updates needed to affect only the selected day or exercise while remaining predictable, responsive and persistent after the browser was closed.",

      architecture:
        "The application uses React state to manage the exercise library and a weekly object containing an exercise array for each day. Functional state updates create new arrays and objects when exercises are assigned, edited or removed. Lazy state initialisers restore the saved library and weekly plan from localStorage, while separate effects save both collections whenever they change. The interface is divided into focused ExerciseList and Planner components.",

      testing:
        "The project has 22 passing Jest and React Testing Library tests across four test suites. They cover the default exercise data, component rendering, empty states, search and category filtering, custom exercise creation and deletion, day assignment, exercise removal, sets and reps updates, weekly exercise counts and localStorage persistence. The current report shows 89.85% statement coverage and 93.65% line coverage, with 100% statement coverage across the Planner and ExerciseList components. GitHub Actions runs the complete Jest coverage suite for pushes and pull requests.",

      features: [
        "Seven-day workout planning",
        "Searchable built-in exercise library",
        "First-letter exercise filtering",
        "Custom exercise creation and deletion",
        "Exercise assignment to individual days",
        "Editable sets and repetitions",
        "Automatic weekly exercise count",
        "Empty-state guidance for every day",
        "Weekly plan persistence with localStorage",
        "Custom exercise persistence with localStorage",
        "Responsive one, three and seven-column planner layouts",
        "22 Jest and React Testing Library tests",
        "Approximately 90% statement coverage",
        "Automated test coverage checks with GitHub Actions",
      ],

      techStack: [
        "React 19",
        "JavaScript",
        "Vite",
        "Tailwind CSS 4",
        "localStorage",
        "Jest",
        "React Testing Library",
        "Testing Library User Event",
        "GitHub Actions",
        "Netlify",
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
