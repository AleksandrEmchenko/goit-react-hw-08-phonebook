import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 232px;
`;

export const ContactFild = styled.input`
  padding: 5px;
  width: 232px;
  border: 1px solid rgba(172, 183, 192, 0.3);
  box-shadow: 0px 1px 1px rgba(172, 183, 192, 0.12),
    0px 4px 4px rgba(172, 183, 192, 0.06), 1px 4px 6px rgba(172, 183, 192, 0.16);
  border-radius: 20px;
  color: grey;
`;

export const ContactLabel = styled.label`
  font-weight: 500;
  margin-bottom: 5px;
`;

export const AddBtn = styled.button`
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
  outline: 1px solid;
  outline-color: #fff;
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover,
  &:active,
  &:focus {
    box-shadow: inset 0 0 20px #bfe2ff;
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    color: #fff;
  }
`;
