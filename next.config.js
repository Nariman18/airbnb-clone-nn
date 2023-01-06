/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["links.papareact.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/commons**',
      },
      
    ],
  },
  env: {
    access_token: 'pk.eyJ1IjoibmFyaW1hbjE4IiwiYSI6ImNsY2tzdXJkNDBmc3EzbnJ5bTA3bG1ocWcifQ.3pfCqSB6S4JCopV83sSMfA'
  },
  reactStrictMode: true,
}
