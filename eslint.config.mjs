import nextConfig from 'eslint-config-next/core-web-vitals'

const config = [
  ...nextConfig,
  {
    ignores: ['node_modules/**', '.next/**', 'out/**'],
  },
  {
    rules: {
      // React 19 / eslint-plugin-react-hooks@7 — very strict; this codebase uses
      // intentional randomness and patterns that trip these rules. Re-enable selectively later.
      'react-hooks/purity': 'off',
      'react-hooks/immutability': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
  },
]

export default config
