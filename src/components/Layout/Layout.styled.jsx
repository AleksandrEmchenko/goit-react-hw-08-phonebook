import styled from "@emotion/styled";

export const NavHeader = styled.header`
  display: flex;
  justify-content: space-around;
  padding-bottom: 5px;
  padding-top: 5px;
`;

export const MenuButton = styled.button`
  display: inline-flex;
  margin: 10px;
  text-decoration: none;
  position: relative;
  font-size: 16px;
  line-height: 20px;
  padding: 8px 20px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Roboto Condensed", Тahoma, sans-serif;
  background: #337ab7;
  cursor: pointer;
  border: 2px solid #bfe2ff;

  &:hover,
  &:active,
  &:focus {
    color: #fff;
  }

  &:after,
  &:before {
    position: absolute;
    height: 4px;
    left: 50%;
    background: #337ab7;
    bottom: -6px;
    content: "";
    transition: all 280ms ease-in-out;
    width: 0;
  }
  &:before {
    top: -6px;
  }
  &:hover:after,
  &:hover:before,
  &:active:after,
  &:active:before,
  &:focus:after,
  &:focus:before {
    width: 100%;
    left: 0;
  }
`;
