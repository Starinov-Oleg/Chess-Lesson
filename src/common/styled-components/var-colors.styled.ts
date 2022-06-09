import { createGlobalStyle } from 'styled-components'

const COLORS = createGlobalStyle`
:root{
  --global-var-color-orange: #ff6b08;
  --global-var-color-black: black;
  --global-var-color-blue: #2aa3d3;
  --global-var-color-grey: #51504b;
  --global-var-color-note: #cecfcf;
  --global-var-color-white: white;
  --global-var-align-left: left;
  --global-var-font-size-1rem: 1rem;
  --global-var-font-mocha: 'Mochiy';}
`
export { COLORS }
