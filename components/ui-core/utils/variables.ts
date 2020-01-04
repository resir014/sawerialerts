export const colors = {
  background: '#000',
  accents01: '#111',
  accents02: '#333',
  accents03: '#444',
  accents04: '#666',
  accents05: '#888',
  accents06: '#999',
  accents07: '#eaeaea',
  accents08: '#fafafa',
  foreground: '#fff',
  error01: '#ff1a1a',
  error02: '#e00',
  error03: '#c00',
  primary01: '#3291ff',
  primary02: '#0070f3',
  primary03: '#0366d6',
  success01: '#46cc4a',
  success02: '#02ba08',
  success03: '#00a005',
  warning01: '#f7b955',
  warning02: '#f5a623',
  warning03: '#f49b0b',
  highlight01: '#ff0080',
  highlight02: '#f81ce5',
  highlight03: '#7928ca',
  highlight04: '#79ffe1',
  black: '#000',
  white: '#fff'
}

export const systemFonts =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"

export const fonts = {
  sansSerif: `"Inter", ${systemFonts}`,
  serif: 'Georgia, "Times New Roman", Times, serif',
  monospace: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'
}

/** Space values (in px) mapped by size designators */
export const space = {
  /** Equivalent to 2px */
  xxxs: 2,
  /** Equivalent to 4px */
  xxs: 4,
  /** Equivalent to 8px */
  xs: 8,
  /** Equivalent to 12px */
  sm: 12,
  /** Equivalent to 16px */
  md: 16,
  /** Equivalent to 24px */
  lg: 24,
  /** Equivalent to 32px */
  xl: 32,
  /** Equivalent to 48px */
  xxl: 48
}

export const breakpoints = ['0', '576px', '768px', '992px', '1200px']

export const mediaQueries = {
  xs: `@media screen and (min-width: ${breakpoints[0]})`,
  sm: `@media screen and (min-width: ${breakpoints[1]})`,
  md: `@media screen and (min-width: ${breakpoints[2]})`,
  lg: `@media screen and (min-width: ${breakpoints[3]})`,
  xl: `@media screen and (min-width: ${breakpoints[4]})`
}

export const widths = {
  md: 750,
  lg: 970,
  xl: 1140
}

/**
 * Typography scaling following BBC's GEL:
 * https://www.bbc.co.uk/gel/guidelines/typography
 */
export const textScale = {
  900: {
    fontSize: '44px',
    lineHeight: '48px'
  },
  800: {
    fontSize: '32px',
    lineHeight: '36px'
  },
  700: {
    fontSize: '28px',
    lineHeight: '32px'
  },
  600: {
    fontSize: '24px',
    lineHeight: '28px'
  },
  500: {
    fontSize: '20px',
    lineHeight: '24px'
  },
  400: {
    fontSize: '16px',
    lineHeight: '20px'
  },
  300: {
    fontSize: '14px',
    lineHeight: '18px'
  },
  200: {
    fontSize: '13px',
    lineHeight: '16px'
  },
  100: {
    fontSize: '12px',
    lineHeight: '16px'
  }
}

/**
 * Typography scaling following BBC's GEL:
 * https://www.bbc.co.uk/gel/guidelines/typography
 */
export const paragraphScale = {
  500: {
    fontSize: '20px',
    lineHeight: '24px'
  },
  400: {
    fontSize: '16px',
    lineHeight: '24px'
  },
  300: {
    fontSize: '14px',
    lineHeight: '24px'
  }
}
