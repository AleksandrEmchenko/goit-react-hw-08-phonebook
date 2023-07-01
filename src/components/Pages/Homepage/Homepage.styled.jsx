import styled from "@emotion/styled";

export const HomePageBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #337ab7;

  font-size: 24px;
  font-weight: 600;
  color: #fdfdfe;
  text-shadow: 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,
    0px 0px 20px #b393d3;
`;

export const AuthBtn = styled.div`
  display: inline-flex;
  margin: 10px;
  text-decoration: none;
  position: relative;
  font-size: 20px;
  line-height: 20px;
  padding: 12px 30px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Roboto Condensed", Тahoma, sans-serif;
  background: #337ab7;
  cursor: pointer;
  border: 2px solid #bfe2ff;
  overflow: hidden;
  z-index: 1;

  &:hover,
  &:active,
  &:focus {
    color: #fff;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 20px;
    height: 100%;
    background-color: #1c4b73;
    z-index: -1;
  }
  &:before {
    left: -20px;
    transform: translate(-50%, -50%);
  }
  &:after {
    right: -20px;
    transform: translate(50%, -50%);
  }
  &:hover:before,
  &:active:before,
  &:focus:before {
    animation: from-left 0.5s both;
  }
  &:hover:after,
  &:active:after,
  &:focus:after {
    animation: from-right 0.5s both;
  }
  @keyframes from-right {
    0% {
      right: -20px;
    }
    50% {
      right: 50%;
      width: 20px;
    }
    100% {
      right: 50%;
      width: 100%;
    }
  }
  @keyframes from-left {
    0% {
      left: -20px;
    }
    50% {
      left: 50%;
      width: 20px;
    }
    100% {
      left: 50%;
      width: 100%;
    }
  }
`;
