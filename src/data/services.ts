export type ServicePackage = {
  id: string;
  title: string;
  price: string;
  description: string;
  features: readonly string[];
  featured: boolean;
};

export const servicePackages = [
  {
    id: "landing-page",
    title: "Landing Page",
    price: "£199",
    description:
      "A focused online presence for a personal brand, service or small business.",
    features: [
      "One responsive page",
      "Up to five content sections",
      "Contact or enquiry form",
      "Basic SEO metadata",
      "Deployment setup",
      "One revision round",
    ],
    featured: false,
  },
  {
    id: "small-business",
    title: "Small Business Website",
    price: "£399",
    description:
      "A complete website for a business that needs more space to present its services.",
    features: [
      "Up to four pages",
      "Responsive custom design",
      "Contact or booking form",
      "Basic technical SEO",
      "Maps and social links",
      "Two revision rounds",
    ],
    featured: true,
  },
  {
    id: "custom-website",
    title: "Custom Website",
    price: "£699",
    description:
      "For websites that need custom functionality, integrations or more complex content.",
    features: [
      "Custom pages and interactions",
      "API or third-party integrations",
      "Advanced forms",
      "Testing and deployment",
      "Scope agreed before development",
      "Tailored project quote",
    ],
    featured: false,
  },
] satisfies readonly ServicePackage[];
