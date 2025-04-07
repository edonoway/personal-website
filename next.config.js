module.exports = {
  reactStrictMode: true,
  // For GitHub Pages deployment
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
  images: {
    loader: 'akamai',
    path: '',
  },
}
