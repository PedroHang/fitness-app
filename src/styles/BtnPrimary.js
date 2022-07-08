import styled from "styled-components";

export const BtnPrimary = styled.a`
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  
  font-weight: 700;
  font-size: 16px;
  padding: 12px 40px;
  border-radius: 0; 
  :not(:disabled):not(.disabled).active:focus {
    -webkit-box-shadow: none;
            box-shadow: none;
    outline: none; }
  :not(:disabled):not(.disabled):active:focus {
    -webkit-box-shadow: none;
            box-shadow: none;
    outline: none;
    color: #ffffff; }
  :hover {
    -webkit-box-shadow: none;
            box-shadow: none;
    outline: none; }
  :focus {
    -webkit-box-shadow: none;
            box-shadow: none;
    outline: none;
    color: #ffffff; }
  :active {
    -webkit-box-shadow: none;
            box-shadow: none;
    outline: none;
    color: #ffffff; }

.show > .dropdown-toggle:focus {
  -webkit-box-shadow: none;
          box-shadow: none;
  outline: none;
  color: #ffffff; }

.show > .dropdown-toggle {
  background: #da1d25;
  border-color: #da1d25; }


  background: #da1d25;
  border-color: #da1d25;
  color: #ffffff;
  position: relative; 
  :hover {
    background: #bf1920;
    border-color: #bf1920;
    color: #ffffff; }
    :hover:not(:disabled):not(.disabled).active {
      background: #da1d25;
      border-color: #da1d25;
      color: #ffffff; }
    :hover:not(:disabled):not(.disabled):active {
      background: #da1d25;
      border-color: #da1d25;
      color: #ffffff; }
  :focus {
    background: #bf1920;
    border-color: #bf1920;
    color: #ffffff; }
  :focus {
    background: #bf1920;
    border-color: #bf1920;
    color: #ffffff; }

:not(:disabled):not(.disabled):active:focus {
  background: #da1d25;
  border-color: #da1d25; }
`