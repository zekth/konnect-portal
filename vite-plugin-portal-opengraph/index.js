function transform (opts) {
  return Object.entries(opts).map((entry) => ({
    attrs: {
      property: `og:${entry[0]}`,
      content: entry[1]
    },
    tag: 'meta',
    injectTo: 'head'
  }))
}

export default (options) => {
  return {
    name: 'vite-plugin-portal-opengraph',
    transformIndexHtml (html) {
      return { html, tags: transform(options ?? {}) }
    }
  }
}
