import styled from "@emotion/styled";

export const ItemList = styled.li`
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: space-between;
  margin-bottom: 2px;
`;

export const Contact = styled.span`
  font-weight: 700;
`;

export const ContactBox = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  margin-right: 5px;
  padding: 5px 5px;
  border: 1px solid #000000;
  box-shadow: 0px 1px 1px rgba(172, 183, 192, 0.12),
    0px 4px 4px rgba(172, 183, 192, 0.06), 1px 4px 6px rgba(172, 183, 192, 0.16);
  border-radius: 20px;
`;

export const DelBtn = styled.button`
  display: inline-flex;
  margin: 10px;
  text-decoration: none;
  position: relative;
  font-size: 12px;
  padding: 4px 12px;
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
    color: #ff0000;
    background: #bfe2ff;
  }
  &:before,
  &:after {
    content: "";
    border: 4px solid transparent;
    position: absolute;
    width: 0;
    height: 0;
    box-sizing: content-box;
  }
  &:before {
    top: -6px;
    left: -6px;
  }
  &:after {
    bottom: -6px;
    right: -6px;
  }
  &:hover:before,
  &:active:before,
  &:focus:before {
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border-top-color: #ff0000;
    border-right-color: #ff0000;
    transition: width 0.2s ease-out, height 0.2s ease-out 0.2s;
  }
  &:hover:after,
  &:active:after,
  &:focus:after {
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border-bottom-color: #ff0000;
    border-left-color: #ff0000;
    transition: border-color 0s ease-out 0.4s, width 0.2s ease-out 0.4s,
      height 0.2s ease-out 0.6s;
  }
`;
