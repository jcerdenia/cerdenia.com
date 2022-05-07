module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/work/:path*",
        destination: "/works/:path*",
        permanent: false,
      },
    ];
  },
};
