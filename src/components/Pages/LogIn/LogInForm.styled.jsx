import styled from "@emotion/styled";

export const LogBtn = styled.button`
  display: inline-flex;
  margin: 10px;
  justify-content: center;
  text-decoration: none;
  border: 2px solid #bfe2ff;
  position: relative;
  overflow: hidden;
  font-size: 20px;
  line-height: 20px;
  padding: 12px 30px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Roboto Condensed", Тahoma, sans-serif;
  background: #337ab7;
  transition: box-shadow 0.3s, transform 0.3s;
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
    color: #fff;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      -45deg,
      transparent,
      rgba(191, 226, 255, 0.3),
      transparent
    );
    transition: left 0.7s;
  }
  &:hover:before,
  &:active:before,
  &:focus:before {
    left: 100%;
  }
`;
