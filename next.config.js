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
 
  reactStrictMode: true,
}
