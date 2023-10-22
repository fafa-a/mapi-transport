import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,ts,svelte}'],

  // Files to exclude
  exclude: [],
  conditions: {
    extend: {
      userInvalid: ':user-invalid',
      userValid: ':user-valid'
    }
  },
  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          montserrat: { value: 'var(--font-montserrat), sans-serif' },
          nunito: { value: 'var(--font-nunito), sans-serif' }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: 'styled-system'
})
