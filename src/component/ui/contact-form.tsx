import { useState } from "react";
import { Icons } from "../icons";
import { IconNames } from "../icons/interface";
import Ellipse from '@public/ellipse.png'
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

interface IFormData {
    firstName: string;
    phoneNumber: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<IFormData>({
        firstName: '',
        phoneNumber: '',
        email: '',
        subject: '',
        message: ''
    });
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");

        if (!captchaToken) {
            setErrorMessage("Please complete reCAPTCHA.");
            setLoading(false);
            return;
        }

        const response = await fetch("/api/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...formData, captchaToken }),
        });

        const result = await response.json();
        if (response.ok) {
            setSuccess("Message sent successfully!");
            setFormData({ firstName: "", phoneNumber: "", email: "", subject: "", message: "" });
        } else {
            setSuccess("Failed to send message.");
        }

        setLoading(false);
    };

    return (
        <div className="container mx-auto flex md:flex-row flex-col gap-6">
            <form onSubmit={handleSubmit} className="rounded-lg relative w-full p-8 md:p-16 border border-dashed border-sixth flex flex-col gap-6 bg-black/20">
                <p className="font-semibold text-xl md:text-2xl">Send me a message</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" name="firstName" placeholder="Your Name" value={formData.firstName} onChange={handleChange} required className="w-full p-2 border border-sixth bg-fourth rounded-lg" />
                    <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required className="w-full p-2 border border-sixth bg-fourth rounded-lg" />
                </div>
                <input type="email" name="email" value={formData.email} placeholder="Email Address" onChange={handleChange} required className="w-full p-2 border border-sixth bg-fourth rounded-lg" />
                <input type="text" name="subject" value={formData.subject} placeholder="Your Subject" onChange={handleChange} required className="w-full p-2 border border-sixth bg-fourth rounded-lg" />
                <textarea name="message" value={formData.message} placeholder="Your Message" onChange={handleChange} required className="w-full p-2 border border-sixth bg-fourth rounded-lg h-[200px]" />
                <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={setCaptchaToken}
                />
                {errorMessage && (
                    <p className="text-red-600">{errorMessage}</p>
                )}
                {!success ? (
                    <button type="submit" disabled={loading || !captchaToken} className={`px-5 py-4 rounded-full bg-fifth w-fit flex items-center gap-2 justify-center cursor-pointer ${!captchaToken ? "hover:border-none" : "hover:border hover:border-white"}`}>
                        <p>{loading ? "Sending..." : "Send Message"}</p>
                        <Icons name={IconNames["arrow-right"]} size={24} />
                    </button>
                ) : (
                    <p className="mt-2 text-green-600">{success}</p>
                )}

                <Icons name={IconNames["angle-border"]} size={24} className={`absolute -top-1 left-0 rotate-90 text-sixth`} />
                <Icons name={IconNames["angle-border"]} size={24} className={`absolute -bottom-1 left-0 -rotate-90 rotate-x-180 text-sixth`} />
                <Icons name={IconNames["angle-border"]} size={24} className={`absolute -top-1 right-0 rotate-90 rotate-x-180 text-sixth`} />
                <Icons name={IconNames["angle-border"]} size={24} className={`absolute -bottom-1 right-0 -rotate-90 text-sixth`} />
                <Image alt="ellise" src={Ellipse} width={500} height={500} className="absolute top-6 right-8 -rotate-90 w-96 rounded-full -z-10" />
            </form>
            <div className="rounded-lg relative w-full md:w-1/3 p-8 border border-dashed border-sixth flex flex-col gap-6 h-full">
                <div className="flex flex-col gap-4 items-start justify-center">
                    <div className="rounded-full p-3 bg-black/20">
                        <Icons name={IconNames.email} size={28} className="text-sixth" />
                    </div>
                    <p className="text-2xl font-semibold">{`Communication With Mail`}</p>
                    <p>{`If you want to reach out, please send an email to my address.`}</p>
                    <div>
                        <span className="font-semibold">Email Address: </span><a href={`mailto:fttmbril22@gmail.com?subject=Contact Form`} className="text-font-primary hover:text-sixth !font-normal">fttmbril22@gmail.com</a>
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-center">
                    <div className="rounded-full p-3 bg-black/20">
                        <Icons name={IconNames.phone} size={24} className="text-sixth" />
                    </div>
                    <p className="text-2xl font-semibold">{`Communication With Chat`}</p>
                    <p>{`Chat with me its more experts of find out more and more informative`}</p>
                    <div>
                        <span className="font-semibold">Phone Number: </span><a href={`https://wa.me/6282115258854`} target="_blank" className="text-font-primary hover:text-sixth !font-normal">+6282115258854</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
