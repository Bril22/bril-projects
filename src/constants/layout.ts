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
        href: "/",
        active: true,
    },
    {
        label: "Portfolio",
        href: "/",
        active: true,
    },
    {
        label: "Contact",
        href: "/",
        active: true,
    }
]

export const SocialMedia: IMainMenu[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: IconNames.linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: IconNames.instagram,
  },
  {
    label: "Twitter",
    href: "https://www.twitter.com",
    icon: IconNames.github,
  },
  {
    label: "Email",
    href: "mailto:your@email.com",
    icon: IconNames.email,
  },
]