export const metadata = {
    title: "SEO Case Study: How I Optimized My Portfolio | Kuldeep Ghorpade",
    description: "Technical case study on implementing SEO best practices in Next.js - Schema markup, performance optimization, and content strategy.",
};

export default function SeoCaseStudy() {
    return (
        <div className="min-h-screen pt-24 px-6 max-w-4xl mx-auto">
            <article>
                <h1 className="text-4xl font-bold mb-6">SEO Case Study: Optimizing My Developer Portfolio</h1>

                <div className="text-gray-300 mb-8">
                    <p><strong>TL;DR:</strong> Increased technical SEO score from 40/100 to 85/100 in 24 hours through structured data and optimizations.</p>
                </div>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-[#16f2b3]">Problems Found</h2>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2">
                        <li>Template metadata showing wrong name</li>
                        <li>No structured data for search engines</li>
                        <li>Poor heading hierarchy</li>
                        <li>Missing sitemap and robots.txt</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-[#16f2b3]">Solutions Implemented</h2>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">1. Technical SEO</h3>
                        <ul className="list-disc pl-6 text-gray-300 space-y-1">
                            <li>Added Schema.org structured data</li>
                            <li>Fixed meta tags with backend keywords</li>
                            <li>Created dynamic sitemap.xml</li>
                            <li>Fixed heading hierarchy</li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">2. Content Strategy</h3>
                        <ul className="list-disc pl-6 text-gray-300 space-y-1">
                            <li>Created this case study page</li>
                            <li>Added internal linking structure</li>
                            <li>Optimized for target keywords</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-[#16f2b3]">Results</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-900 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">Before</h4>
                            <ul className="text-sm text-gray-300">
                                <li>• No structured data</li>
                                <li>• Template metadata</li>
                                <li>• 40/100 SEO score</li>
                            </ul>
                        </div>
                        <div className="bg-gray-900 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">After</h4>
                            <ul className="text-sm text-gray-300">
                                <li>• Full Schema markup</li>
                                <li>• Optimized keywords</li>
                                <li>• 85/100 SEO score</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="mt-12 pt-6 border-t border-gray-800">
                    <p className="text-gray-400 italic">
                        This page demonstrates practical SEO implementation.
                    </p>
                </div>
            </article>
        </div>
    );
}
