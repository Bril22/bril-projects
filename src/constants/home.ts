import ReactImage from '@public/skills/react.png'
import NextImage from '@public/skills/nextjs.png'
import DatabaseImage from "@public/skills/database.png"
import TailwindImage from "@public/skills/tailwind.png"
import TypescriptImage from "@public/skills/typescript.png"
import AWSImage from "@public/skills/aws.png"
import NestImage from "@public/skills/nest.png"

// oter skills
import CypressImage from "@public/skills/cypress.png"
import DockerImage from "@public/skills/docker.png"
import FigmaImage from "@public/skills/figma.png"
import GitImage from "@public/skills/git.png"
import PostgresImage from "@public/skills/postgres.png"
import MongoImage from "@public/skills/mongose.png"
import PostmanImage from "@public/skills/postman.png"
import PrismaImage from "@public/skills/prisma.png"

// services
import WebAppImage from "@public/services/web-application.jpg"
import AutomationImage from "@public/services/robot.jpg"
import UXImage from "@public/services/user-experienes.jpg"

// experiences
import GeonetImage from "@public/company/geonet.png"
import JatisImage from "@public/company/jatis-mobile.png"
import SimpliImage from "@public/company/simplidots.png"
import BCAImage from "@public/company/bca.png"
import QNPImage from "@public/company/qnp.png"
import BragaImage from "@public/company/braga-tech.png"
import HoomixImage from "@public/company/hoomix.png"

import { ICardSkills } from '@/component/ui/card-skill'

export const MySkills: ICardSkills[] = [
    {
        title: "Next.js",
        description:
            "I specialize in building fast, scalable, and SEO-friendly web applications using Next.js. Whether it's server-side rendering, static site generation, or API routes, I ensure your app performs flawlessly across all devices.",
        image: NextImage,
    },
    {
        title: "NestJS",
        description:
            "I design robust and maintainable backend systems with NestJS. From RESTful APIs to microservices, I create efficient server-side solutions that scale with your business needs.",
        image: NestImage,
    },
    {
        title: "Tailwind CSS",
        description:
            "I craft beautiful, responsive, and user-friendly interfaces using Tailwind CSS. With utility-first design, I ensure your app looks stunning and works seamlessly on every screen size.",
        image: TailwindImage,
    },
    {
        title: "TypeScript",
        description:
            "I write clean, type-safe, and maintainable code with TypeScript. By catching errors at compile time, I ensure your app is reliable and easier to scale as your project grows.",
        image: TypescriptImage,
    },
    {
        title: "Database",
        description:
            "I design and optimize SQL databases to store and manage your data efficiently. From complex queries to database architecture, I ensure your data is secure, organized, and easily accessible.",
        image: DatabaseImage,
    },
    {
        title: "AWS",
        description:
            "I deploy and manage cloud-based solutions using AWS. Whether it's hosting, storage, or serverless functions, I leverage AWS to make your app scalable, secure, and cost-effective.",
        image: AWSImage,
    }
]

export const OtherSkills: ICardSkills[] = [
    {
        image: CypressImage,
        title: "Cypress",
        description: "I write comprehensive end-to-end tests with Cypress.io, ensuring your app behaves as expected across different devices and browsers.",
    },
    {
        image: DockerImage,
        title: "Docker",
        description: "I build and deploy containerized applications using Docker. Whether it's for local development, staging, or production, I ensure your app runs consistently and securely.",
    },
    {
        image: FigmaImage,
        title: "Figma",
        description: "I collaborate with designers to create visually appealing and user-friendly interfaces using Figma.io.",
    },
    {
        image: GitImage,
        title: "Git",
        description: "I use Git for version control and collaboration. Whether it's for managing code, tracking changes, or collaborating with others, I ensure your team stays in sync and efficient.",
    },
    {
        image: PostgresImage,
        title: "PostgreSQL",
        description: "I design and optimize PostgreSQL databases to store and manage your data efficiently. From complex queries to database architecture, I ensure your data is secure, organized, and easily accessible.",
    },
    {
        image: MongoImage,
        title: "MongoDB",
        description: "I design and optimize MongoDB databases to store and manage your data efficiently. From complex queries to database architecture, I ensure your data is secure, organized, and easily accessible.",
    },
    {
        image: PostmanImage,
        title: "Postman",
        description: "I use Postman for API testing and documentation. Whether it's for testing your APIs, creating test cases, or documenting your API endpoints, I ensure your app's APIs are well-documented and easy to use.",
    },
    {
        image: PrismaImage,
        title: "Prisma",
        description: "I use Prisma for database management and GraphQL API generation. Whether it's for connecting to your database, defining your GraphQL schema, or generating GraphQL clients, I ensure your app's database is easily managed and GraphQL API is generated.",
    }
]

export const MyServices: ICardSkills[] = [
    {
        title: "Web Application Development",
        description:
            "Building scalable and high-performance web applications that solve real-world problems. Using modern frameworks like Next.js and NestJS, I deliver apps that are secure, maintainable, and ready to grow with your business.",
        image: WebAppImage
    },
    {
        title: "Automation Testing",
        description:
            "Ensuring your web applications are bug-free and reliable with comprehensive automation testing. By writing robust test scripts, I save you time and resources while maintaining the highest quality standards.",
        image: AutomationImage
    },
    {
        title: "User Experience (UX) Design",
        description:
            "Crafting intuitive and user-friendly interfaces that keep your audience engaged. From wireframes to prototypes, I focus on delivering a seamless and enjoyable experience for your users.",
        image: UXImage
    },
];

export const MyExperiences: ICardSkills[] = [
    {
        image: GeonetImage,
        title: "Geonet Properties",
        description: "Geonet",
        // href: "experiences/geonet",
        href: "#"
    },
    {
        image: JatisImage,
        title: "Jatis Mobile",
        description: "Jatis Mobile",
        // href: "experiences/jatis-mobile",
        href: "#"
    },
    {
        image: SimpliImage,
        title: "Simplidots",
        description: "Simplidots",
        // href: "experiences/simplidots",
        href: "#"
    },
    {
        image: BCAImage,
        title: "Bank Central Asia",
        description: "BCA",
        // href: "experiences/bca",
        href: "#"
    },
    {
        image: QNPImage,
        title: "Quorum Nusa Prestasi",
        description: "QNP",
        // href: "experiences/qnp",
        href: "#"
    },
    {
        image: BragaImage,
        title: "Braga Tech",
        description: "Braga Tech",
        // href: "experiences/braga-tech",
        href: "#"
    },
    {
        image: HoomixImage,
        title: "Hoomix",
        description: "Hoomix",
        // href: "experiences/hoomix",
        href: "#"
    }
]