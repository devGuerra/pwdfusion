module.exports = {
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack', 'babel-plugin-styled-components'],
    })

    return config
  }
}
