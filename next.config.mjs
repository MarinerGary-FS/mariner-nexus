/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        ],
      },
    ];
  },
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
