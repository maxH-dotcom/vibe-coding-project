/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/demos/todo-html",
        destination: "/demos/todo-html/index.html"
      }
    ];
  }
};

export default nextConfig;
