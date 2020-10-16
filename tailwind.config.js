module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: {
    enabled: true,
    content: [
      '**/*.html',
      '**/*.scss'
    ]
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
}
