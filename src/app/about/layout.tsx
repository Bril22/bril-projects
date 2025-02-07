import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me | Brilian Natanael Zega",
    description: "Over the years, I have gained extensive experience in developing software solutions for various industries, including marketing, finance, and e-commerce.",
  };

export default function Layout({
    children
}: {
    children: React.ReactNode;
}) {
    return <div className="pb-16">{children}</div>   
}