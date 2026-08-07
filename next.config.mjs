/** @type {import('next').NextConfig} */
const nextConfig = {
    // Reduce compile time by only transpiling what's needed
    transpilePackages: [],

    // Optimise images
    images: {
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 60,
        // Serve local /public images directly — avoids optimizer timeout on large PNGs
        unoptimized: true,
    },

    // Faster development rebuilds
    experimental: {
        optimizePackageImports: ['framer-motion', 'lucide-react'],
    },
};

export default nextConfig;
