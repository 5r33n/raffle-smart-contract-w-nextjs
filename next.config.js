/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        loader: "imgix",
        unoptimized: true,
        path: "/",
    },
}

module.exports = nextConfig
