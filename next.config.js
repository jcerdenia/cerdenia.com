module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/work/:path*",
        destination: "/works/:path*",
        permanent: false,
      },
      {
        source: "/music/:path*",
        destination: "/works/:path*",
        permanent: false,
      },
      // Temporary redirect until writings section is ready:
      {
        source: "/writings/:path*",
        destination: "/",
        permanent: false,
      },
    ];
  },
};
