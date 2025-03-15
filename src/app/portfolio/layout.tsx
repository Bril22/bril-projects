import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Me | Brilian Natanael Zega",
    description: "Together, we can turn visions into reality and create outstanding digital experiences. Let's talk about how we can work together!",
};

export default function Layout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="pb-16">
            {children}
        </div>
    )
}