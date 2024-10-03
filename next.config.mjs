/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // This is crucial for static export
    images: { unoptimized: true }

};


export default nextConfig;
