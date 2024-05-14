import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx,html}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,html}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,html}',
  ],
  theme: {
    extend: {
      objectPosition: {
        'scale-down': 'scale-down',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}
export default config
