import { createGlobalStyle } from "styled-components";

const GlobalStyle =  createGlobalStyle`

body {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  color: #666666;
  overflow-x: hidden;
  background-color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  outline: medium none !important;
  color: #da1d25;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  text-decoration: none !important; }
  a:focus {
    color: #da1d25;
    text-decoration: none !important; }
  a:hover {
    color: #da1d25;
    text-decoration: none !important; }

    input {
      outline: medium none !important;
      color: #da1d25; }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "Teko", sans-serif;
      font-weight: normal;
      color: #333333;
      margin-top: 0px;
      font-weight: 600;
      text-transform: uppercase; }
      h1 a,
      h2 a,
      h3 a,
      h4 a,
      h5 a,
      h6 a {
        color: inherit; }
    
    label {
      font-weight: normal; }
    
    h1 {
      font-size: 58px;
      font-style: normal; }
    
    h2 {
      font-size: 48px; }
    
    h3 {
      font-size: 30px; }
    
    h4 {
      font-size: 26px; }
    
    h5 {
      font-size: 22px; }
    
    h6 {
      font-size: 18px; }
    
    p {
      font-weight: normal;
      line-height: 24px; }
    
    *::-moz-selection {
      background: #da1d25;
      color: #ffffff;
      text-shadow: none; }
    
    ::-moz-selection {
      background: #da1d25;
      color: #ffffff;
      text-shadow: none; }
    
    ::selection {
      background: #da1d25;
      color: #ffffff;
      text-shadow: none; }
    
    .container-fluid.container-space {
      padding: 0 100px; }
    
    .form-control {
      border: 1px solid #ebebeb;
      border-radius: 0px;
      padding: 10px 20px;
      -webkit-box-shadow: none;
              box-shadow: none;
      font-size: 14px;
      font-weight: 500;
      color: #666666;
      background-clip: inherit !important; }
      .form-control:focus {
        -webkit-box-shadow: none;
                box-shadow: none;
        border-color: #da1d25; }
    
    .form-control::-moz-placeholder {
      color: #3a4957; }
    
    .form-control::-ms-input-placeholder {
      color: #3a4957; }
    
    .form-control::-webkit-input-placeholder {
      color: #3a4957; }
    
    input.form-control {
      height: 50px; }
`

export default GlobalStyle