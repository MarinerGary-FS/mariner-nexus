/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  async redirects() {
    return [
      { source: "/services", destination: "/capabilities", permanent: true },
      { source: "/about", destination: "/company", permanent: true },
      { source: "/contact", destination: "/start", permanent: true },
      { source: "/case-studies", destination: "/work", permanent: true },
      { source: "/case-studies/undugu", destination: "/work/undugu", permanent: true },
    ];
  },
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
