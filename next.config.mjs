/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/i,
          use: ['@svgr/webpack'],
        })
    
        return config
      },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "cdn.sanity.io",
            port: '',
          },
        ],
      },
};

export default nextConfig;
