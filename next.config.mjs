/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/Mohamad-jaber/test-blogposts/master/images/**',
            },
        ],
    },
}

export default nextConfig;
