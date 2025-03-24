import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Portfolio | Brilian Natanael Zega",
    description: "Explore my portfolio showcasing innovative web development projects, creative designs, and technical expertise. Specializing in React, Next.js, and modern web technologies.",
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