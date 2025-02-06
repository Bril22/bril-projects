import { IconNames } from "@/component/icons/interface";

export interface IMainMenu {
    label: string;
    icon?: IconNames;
    href?: string;
    children?: IMainMenu[];
    active?: boolean;
}

export const MainMenu: IMainMenu[] = [
    {
        label: "Home",
        href: "/",
        active: true,
    },
    {
        label: "Services",
        href: "/services",
        active: true,
    },
    {
        label: "Portfolio",
        href: "/portfolio",
        active: true,
    },
    {
        label: "Contact",
        href: "/contact",
        active: true,
    }
]

export const SocialMedia: IMainMenu[] = [
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/briliannatan",
    icon: IconNames.linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/briliantnz",
    icon: IconNames.instagram,
  },
  {
    label: "Github",
    href: "https://www.github.com/Bril22",
    icon: IconNames.github,
  },
  {
    label: "Email",
    href: "mailto:fttmbril22@gmail.com",
    icon: IconNames.email,
  },
]