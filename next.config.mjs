/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // This is crucial for static export
    basePath: '/CampusAmbassador', // Replace with your GitHub repo name
    trailingSlash: true, // Ensures paths are correctly resolved
};


export default nextConfig;
