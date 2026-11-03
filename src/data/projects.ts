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
      "A production bilingual website for a wellness studio in Blagoevgrad, presenting Pilates Reformer and XBODY EMS services with responsive media, a service-specific booking enquiry form and technical SEO.",
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
      alt: "Euphoria Wellness Studio desktop and mobile mockups presenting Pilates Reformer and XBody EMS services.",
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
        "Booking enquiry form with required service selection, powered by Netlify Forms",
        "Refined responsive footer with service-specific contact details",
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
      "A developer practice workspace with configurable quizzes, answer review, missed-question retries and a validated server-side QuizAPI proxy with timeout recovery.",
    value: "Review",
    label: "Practice & Retry",
    badges: [
      "React 19",
      "Secure API Proxy",
      "Answer Review",
      "Playwright E2E",
    ],
    image: {
      src: "/images/projects/devquiz-banner.webp",
      alt: "DevQuiz desktop setup and mobile quiz mockups showing answer feedback and progress.",
    },
    links: {
      live: "https://dev-quiz-v.netlify.app/",
      source: "https://github.com/denichinv/quiz-app",
      caseStudy: "devquiz",
    },
    caseStudy: {
      overview:
        "DevQuiz is a React 19 and TypeScript application for testing knowledge across developer-focused topics. Users can choose a category, difficulty and quiz length before answering questions supplied by QuizAPI.io. The redesigned practice workspace adds progress tracking, accessible answer feedback, a full answer review and retries using only the questions missed in the latest round.",

      challenge:
        "The main challenge was making a third-party quiz API safe and dependable in a browser-based application. The QuizAPI key could not be exposed to users, and the interface needed to handle failed requests, empty question sets and inconsistent answer options while keeping scoring and navigation predictable.",

      architecture:
        "The React application separates quiz setup, loading, question and completion states into focused components. Browser requests are sent to a Netlify Function, which reads the QuizAPI key from the server environment, requests questions from QuizAPI.io and normalises the response before returning it to the frontend. The proxy validates category, difficulty and question count against shared options, checks upstream responses and aborts requests after 10 seconds. The client applies a separate 15-second deadline, cancels obsolete requests and accepts only unambiguous single-answer questions. React state retains the active round and answer history, allowing missed-question retries without another API request.",

      testing:
        "Vitest and React Testing Library cover quiz components, state transitions, question validation and answer shuffling, alongside server-function tests for request validation, response normalisation, malformed data, failures and timeouts. Playwright runs against a local Vite server with mocked function responses, covering setup, completion, answer review, missed-question retries, replay, keyboard navigation, phone and desktop layouts, and timeout recovery. GitHub Actions runs the automated suites, with Playwright pinned to Ubuntu 24.04. Coverage is generated from the current checkout rather than presented as a fixed percentage.",

      features: [
        "Seventeen developer-focused quiz categories",
        "Easy, medium and hard difficulty selection",
        "Configurable quizzes with 5, 10, 15 or 20 questions",
        "Server-side QuizAPI proxy using Netlify Functions",
        "API key protected through server environment variables",
        "Normalised and shuffled answer options",
        "Immediate correct and incorrect answer feedback",
        "Live score tracking and question progress",
        "Answer review after each completed round",
        "Retry missed questions without another API request",
        "Replay with original settings or return to setup",
        "Keyboard focus management and reduced-motion support",
        "Validated proxy requests with server and browser timeouts",
        "Empty-response and request-failure handling",
        "Restartable quiz journey",
        "Vitest component, integration and server-function tests",
        "Mocked Playwright browser journeys",
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
      "A seven-day workout planner with a searchable exercise library backed by an Express API and Turso database, custom exercises, editable sets and reps, and a weekly plan saved in the browser.",
    value: "7-Day",
    label: "Workout Planner",
    badges: ["React 19", "Express API", "Turso", "Render & Netlify"],
    image: {
      src: "/images/projects/workout-builder-banner.webp",
      alt: "Workout Builder desktop and mobile mockups showing the exercise library, weekly plan, and editable sets and reps.",
    },
    links: {
      live: "https://workoutroutinebuilder.netlify.app/",
      source: "https://github.com/denichinv/workout-routine-builder",
      caseStudy: "workout-builder",
    },
    caseStudy: {
      overview:
        "Workout Builder is a React 19 application for creating a complete weekly exercise routine in the browser. Users can search the built-in exercise library, create their own exercises, assign them to any day of the week and customise the number of sets and repetitions. The exercise library is stored in Turso through a Node.js and Express API, while the weekly plan stays in localStorage. The frontend is hosted on Netlify and proxies production API requests to Render.",

      challenge:
        "The main challenge was keeping seven independent daily plans, a customisable exercise library and editable workout values synchronised through one interface. The move from browser-only exercise storage to an API-backed library also needed to preserve existing custom exercises, handle loading and failed requests, and keep the weekly plan available locally.",

      architecture:
        "React state manages the exercise library and seven daily workout arrays. The frontend loads, creates and deletes library exercises through an Express API backed by Turso via the libSQL client. A one-time import transfers an existing localStorage exercise library to the API. Loading states, request cancellation and a retry action handle library requests. The weekly routine continues to load and save locally through localStorage. Netlify rewrites /api requests to the Render-hosted backend.",

      testing:
        "The repository uses Jest and React Testing Library for exercise data, library and planner components, and application interactions, including day assignment, exercise removal, sets and reps updates and weekly-plan persistence. GitHub Actions runs the Jest suite. The Express and Turso backend is a recent extension of the original browser-based application; the existing frontend coverage figures do not establish backend test coverage.",

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
        "Exercise library persistence in Turso through an Express API",
        "One-time import of an existing browser exercise library",
        "Exercise-library loading, error and retry states",
        "Netlify API proxy to the Render-hosted backend",
        "Responsive one, three and seven-column planner layouts",
        "Jest and React Testing Library test suite",
        "Automated test coverage checks with GitHub Actions",
      ],

      techStack: [
        "React 19",
        "JavaScript",
        "Vite",
        "Tailwind CSS 4",
        "localStorage",
        "Node.js",
        "Express 5",
        "Turso / libSQL",
        "Render",
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
      "A React movie discovery app with debounced title search, keyboard-accessible live suggestions, TMDB category browsing, rating filters and flexible sorting.",
    value: "Live",
    label: "Movie Search",
    badges: [
      "React 19",
      "TMDB API",
      "Live Suggestions",
      "Playwright E2E",
    ],
    image: {
      src: "/images/projects/cinevault-banner.webp",
      alt: "CineVault desktop and mobile mockups showing movie search, poster grids, rating filters and sorting controls.",
    },
    links: {
      live: "https://cinevaultmoviesapp.netlify.app/",
      source: "https://github.com/denichinv/CineVault",
      caseStudy: "cinevault",
    },
    caseStudy: {
      overview:
        "CineVault is a React 19 movie discovery application powered by the TMDB API. It is a refactored rebuild of an earlier movie project, created to improve the code structure, deployment reliability and automated testing. Users can browse popular, top-rated and upcoming films or search by title with live suggestions, then filter and sort the results.",
      challenge:
        "The main challenge was coordinating API-driven categories with local filtering and sorting while keeping the interface predictable. Live search needed to coordinate debounced requests, immediate submission and keyboard-accessible suggestions. Clearing search or changing category needed to restore category browsing, while filters and sorting remained usable for both search and category results.",
      architecture:
        "The application keeps the active movie category in the top-level App component and delegates discovery behaviour to MovieList. MovieList fetches the selected TMDB endpoint, stores both the original response and the visible movie collection, and manages loading, rating and sorting state. Focused Header, FilterMovies, SortMovies, MovieCard and MovieCardSkeleton components separate navigation, controls and presentation. A Headless UI combobox presents up to five suggestions with posters and release years. Title search uses a 300 ms debounce, with immediate submission through Enter or Search. Clearing the query restores the current category, and category navigation resets search. The TMDB key is supplied through a Vite environment variable and requests are made directly from the browser.",
      testing:
        "Vitest and React Testing Library cover movie discovery components and interactions, with V8 coverage generated from the current checkout. Playwright starts a local Vite server and mocks TMDB responses and images, covering page loading, rating filters, sorting, live search, immediate submission, clearing and category navigation. Suggestion tests exercise mouse and keyboard selection, dismissal, and desktop and mobile layouts. GitHub Actions runs unit, integration and browser tests for pushes and pull requests targeting main or master.",
      features: [
        "Popular, top-rated and upcoming TMDB collections",
        "Debounced title search with immediate Enter or Search submission",
        "Up to five live suggestions with posters and release years",
        "Mouse and keyboard suggestion selection with Headless UI",
        "Clear search and category navigation restore category browsing",
        "Poster fallbacks and request-error messages",
        "Rating filters for movies scored 6+, 7+ or 8+",
        "Sorting by release date and rating",
        "Ascending and descending title sorting",
        "Responsive movie poster grid",
        "Loading skeletons while TMDB data is fetched",
        "Empty state when no films match the rating filter",
        "Direct links from movie cards to TMDB",
        "Vitest and React Testing Library tests with V8 coverage",
        "Mocked Playwright tests for browsing and live search",
        "Automated test workflows with GitHub Actions",
        "Production deployment on Netlify",
      ],
      techStack: [
        "React 19",
        "JavaScript",
        "Vite",
        "Headless UI",
        "CSS",
        "TMDB API",
        "Vitest",
        "React Testing Library",
        "Playwright",
        "GitHub Actions",
        "Netlify",
      ],
    },
  },
];
