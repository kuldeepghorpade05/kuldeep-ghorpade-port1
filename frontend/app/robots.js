export default function robots() {
    const baseUrl = 'https://kuldeep-ghorpade-port1-fend.vercel.app';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
