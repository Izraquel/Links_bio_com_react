import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  margin-top: 0px;
  border: 0;

}

body {
  -webkit-font-smoothing: antialiased;
  background-color: #040404;
  color: white;
}

body, input, button {
  font: 16px Roboto, sans-serif;
}

#root {
  max-width: 1160px;
  margin: 0 auto;
  //padding: 60px 60px;
}

button {
  cursor: pointer;
}

`;
