import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  input, select {
    font-size: inherit;
  }

  h1 {
    padding-top: 32px;
  }

  h2 {
    padding-top: 28px;
  }

  h3 {
    padding-top: 24px;
  }

  h4 {
    padding-top: 20px;
  }

  h5 {
    padding-top: 16px;
  }

  h6 {
    padding-top: 12px;
  }
  
  div.btn-toolbar {
    margin-top: 32px;
    margin-bottom: 32px;
  }

  div.btn-toolbar > * {
    margin-left: 8px;
    margin-right: 8px;
    min-width: 100px;
  }

  div.btn-toolbar button.btn:first-child {
    margin-left: 0;
  }

  div.btn-toolbar button.btn:last-child {
    margin-right: 0;
  }

  input.form-control, select.form-control {
    max-width: 500px;
  }

  button {
    cursor: pointer;

    &:focus {
      outline: none !important;
    }
  }
  
  small.form-text {
    max-width: 387px;
  }
  
  div.sketch-picker {
    box-shadow: none !important;
    border: 1px solid #ced4da !important;
  }
  
  table td {
    border: none !important;
    vertical-align: middle !important;
  }
  
  .rtl {
    direction: rtl;
    text-align: start !important;
  }
`;
