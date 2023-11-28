/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ],
  },
  env: {
    API_PORT: process.env.API_PORT,
    APP_ENV: process.env.APP_ENV,
    API_HOST: process.env.API_HOST,
    API_TOKEN: process.env.API_TOKEN,
    NEXT_TELEMETRY_DISABLED: process.env.NEXT_TELEMETRY_DISABLED,
    PUSHER_PUBLIC_CLUSTER: process.env.PUSHER_PUBLIC_CLUSTER,
    PUSHER_EVENT_NAME: process.env.PUSHER_EVENT_NAME,
    PUSHER_CHANNEL_NAME: process.env.PUSHER_CHANNEL_NAME,
    PUSHER_PUBLIC_KEY: process.env.PUSHER_PUBLIC_KEY,
    GITHUB_API_KEY: process.env.GITHUB_API_KEY,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader"
    });

    return config;
  }
}

module.exports = nextConfig
