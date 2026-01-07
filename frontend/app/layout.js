import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import ParticlesBackground from "./components/helper/particles-background";
import TerminalLoading from "./components/homepage/terminal-loading";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Kuldeep Ghorpade | Backend & Cloud Engineer Portfolio",
    description: "Backend Developer specializing in Python, Java, Cloud Engineering, DevOps, and Network Infrastructure. Building scalable systems with AWS, Docker, Kubernetes, and microservices architecture.",
    keywords: ["backend developer", "python developer", "java developer", "cloud engineer", "devops engineer", "network engineer", "AWS", "Docker", "Kubernetes", "microservices"],
    authors: [{ name: "Kuldeep Ghorpade" }],
    openGraph: {
        title: "Kuldeep Ghorpade - Backend & Cloud Engineering Portfolio",
        description: "Backend and Cloud Engineer with expertise in Python, Java, AWS, and DevOps practices.",
        type: "website",
        url: "https://kuldeep-ghorpade-port1-fend.vercel.app",
    },
    twitter: {
        card: "summary_large_image",
        title: "Kuldeep Ghorpade - Backend Engineer Portfolio",
        description: "Backend Developer specializing in Python, Cloud, and DevOps engineering.",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Schema.org markup for search engines */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org",
                                "@type": "Person",
                                "name": "Kuldeep Ghorpade",
                                "jobTitle": "Backend & Cloud Engineer",
                                "url": "https://kuldeep-ghorpade-port1-fend.vercel.app",
                                "sameAs": [
                                    "https://linkedin.com/in/yourprofile",
                                    "https://github.com/yourgithub"
                                ],
                                "knowsAbout": [
                                    "Python Development",
                                    "Java Programming",
                                    "Cloud Engineering",
                                    "DevOps Practices",
                                    "Backend Systems"
                                ],
                                "description": "Backend and Cloud Engineer specializing in scalable infrastructure.",
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                "url": "https://kuldeep-ghorpade-port1-fend.vercel.app",
                                "name": "Kuldeep Ghorpade Portfolio",
                                "description": "Backend Engineer Portfolio showcasing projects and technical expertise.",
                                "potentialAction": {
                                    "@type": "SearchAction",
                                    "target": "https://kuldeep-ghorpade-port1-fend.vercel.app/seo-case-study",
                                    "query-input": "required name=search_term_string"
                                }
                            }
                        ])
                    }}
                />
            </head>
            <body className={inter.className}>
                <TerminalLoading />
                <ToastContainer />
                <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white pt-24">
                    <ParticlesBackground />
                    <Navbar />
                    {children}
                    <ScrollToTop />
                </main>
                <Footer />
            </body>
        </html>
    );
}