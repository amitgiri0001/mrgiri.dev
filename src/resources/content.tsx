import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Amit",
  lastName: "Giri",
  name: "Amit Giri",
  role: "Senior Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "amit.giri0001@gmail.com",
  location: "Asia/Singapore", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>I write on Substack at mrgiri.substack.com</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/amitgiri0001",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/amitgiri0001",
    essential: true,
  },
  {
    name: "Substack",
    icon: "substack",
    link: "https://mrgiri.substack.com",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi, I'm Amit Giri (Mr. Giri)</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Project
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
    Developer, creator, and builder of AI-powered web experiences.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendar.app.google/pdTavc8AG9o8wv916",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Senior Software Engineer with 11+ years of experience designing, scaling, and operating 
        business-critical backend systems across retail, healthcare, and media. Strong expertise 
        in distributed systems, API design, cloud-native architectures (GCP, AWS), and backend 
        performance optimization using Golang and Node.js. Proven track record in leading system 
        design initiatives, defining SLI/SLOs and error budgets, improving infrastructure cost 
        efficiency, and building internal developer platforms. Known for translating complex 
        business requirements into reliable, scalable, and cost-effective backend solutions 
        while mentoring engineers and influencing technical direction across teams.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "NTUC Enterprise (FairPrice)",
        timeframe: "Apr 2022 - Present",
        role: "Senior Product Engineer",
        achievements: [
          <>
            Led backend and platform architecture for a multi-vendor retail marketplace supporting 
            seller onboarding, logistics, cart, checkout, and order management on GCP.
          </>,
          <>
            Delivered a low-latency backend enabling <strong>1-hour delivery</strong> by redesigning cart 
            and checkout workflows to meet strict SLAs.
          </>,
          <>
            Defined and owned <strong>SLIs, SLOs, and error budgets</strong> for critical services, guiding 
            release decisions and incident response.
          </>,
          <>
            Optimized cloud infrastructure costs by right-sizing resources, eliminating over-provisioning, 
            and migrating services to <strong>GCP Cloud Run</strong>.
          </>,
          <>
            Built <strong>DiffMind</strong>, an AI-powered internal code review assistant integrated with 
            Bitbucket to automate PR reviews for quality, security, and best practices.
          </>,
          <>
            Developed an internal API documentation platform to automatically generate, version, and 
            publish service contracts as a single source of truth.
          </>,
          <>
            Designed and implemented a secure RBAC-based SSO platform for 150+ sellers with zero 
            production security incidents.
          </>,
          <>
            Reduced Lead Time for Changes from 9.7 days to 5.1 days (<strong>~47% improvement</strong>) through 
            CI/CD improvements, contract testing, and feature flags.
          </>,
          <>
            Mentored engineers, conducted technical interviews, and contributed to cross-team 
            architectural reviews to improve engineering effectiveness.
          </>,
        ],
        images: [],
      },
      {
        company: "MyDoc Healthcare",
        timeframe: "Jun 2019 - Mar 2022",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Designed and implemented scalable, multi-region payment systems integrating 
            STRIPE and RAPYD.
          </>,
          <>
            Led the migration from monolithic legacy systems to microservices, improving 
            scalability and deployment velocity.
          </>,
        ],
        images: [],
      },
      {
        company: "Isentia",
        timeframe: "Aug 2017 - Jun 2019",
        role: "Software Engineer (Full Stack)",
        achievements: [
          <>
            Built backend services and full-stack features using Node.js, React, and AWS.
          </>,
          <>
            Designed high-availability AWS architectures and optimized ElasticSearch indexes.
          </>,
        ],
        images: [],
      },
      {
        company: "Earlier Career",
        timeframe: "2013 - 2017",
        role: "Xcdify Solutions, QSI (NextGen Healthcare), Emids",
        achievements: [
          <>
            Early-career roles focused on frontend engineering and established a strong foundation 
            in scalable web application development.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Bachelor of Engineering — Information Technology",
        description: <>Bhilai Institute of Technology (BIT), Durg</>,
      },
      {
        name: "Diploma — Information Technology",
        description: <>Govt. Polytechnic, Durg</>,
      },
    ],
  },
  certifications: {
    display: true, // set to false to hide this section
    title: "Certifications",
    items: [
      {
        name: "Google Cloud Certified Professional Cloud Developer",
        issuer: "Google Cloud",
        link: "https://www.credly.com/badges/a3ce2a12-f8b8-4d7e-bc5b-2909af19e454/public_url",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Backend & Architecture",
        description: (
          <>Distributed Systems, Microservices Architecture, System Design, RESTful API Design, Contract Testing, Backend Performance Optimization.</>
        ),
        tags: [
          { name: "Golang" },
          { name: "Node.js" },
          { name: "TypeScript" },
          { name: "JavaScript" },
        ],
        images: [],
      },
      {
        title: "Cloud & Infrastructure",
        description: (
          <>Google Cloud Platform (GCP), Amazon Web Services (AWS), Cloud Run, Kubernetes, Docker, Infrastructure Cost Optimization & Capacity Right-Sizing.</>
        ),
        tags: [
          { name: "GCP" },
          { name: "AWS" },
          { name: "Docker" },
          { name: "Kubernetes" },
          { name: "GitHub Actions" },
          { name: "Bitbucket Pipelines" },
        ],
        images: [],
      },
      {
        title: "Reliability Engineering",
        description: (
          <>SLI/SLO Definition & Ownership, Error Budget Management, Observability, Incident Response, Automated Rollbacks.</>
        ),
        tags: [
          { name: "Datadog" },
          { name: "Feature Flags" },
          { name: "Split.io" },
        ],
        images: [],
      },
      {
        title: "Data & Storage",
        description: (
          <>PostgreSQL, MySQL, CockroachDB, DynamoDB, ElasticSearch.</>
        ),
        tags: [
          { name: "PostgreSQL" },
          { name: "MySQL" },
          { name: "DynamoDB" },
          { name: "ElasticSearch" },
        ],
        images: [],
      },
      {
        title: "Security & Access Control",
        description: (
          <>SSO, OAuth2, RBAC, ABAC, Auth0.</>
        ),
        tags: [
          { name: "SSO" },
          { name: "OAuth2" },
          { name: "RBAC" },
          { name: "Auth0" },
        ],
        images: [],
      },
      {
        title: "Developer Productivity",
        description: (
          <>Internal Platforms & Tooling, API Governance & Documentation Systems, AI-assisted Engineering Tools, MCP-based Developer Tooling.</>
        ),
        tags: [
          { name: "AI Tools" },
          { name: "MCP" },
          { name: "Internal Platforms" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about tech and engineering...",
  description: `Read what ${person.name} has been thinking about`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Engineering projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
