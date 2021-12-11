import styled from "styled-components";
// import { Field } from "formik";
interface Props {
  $height?: any;
  $borderRadius?: any;
}

export const InputField = styled.input<Props>`
  border: 1px solid #c1c1c1;
  height: ${({ $height }) => $height || "40px"};
  padding: 12px 16px;
  width: 100%;
  border-radius: ${({ $borderRadius }) => $borderRadius || "5px"};
  &:focus {
    outline: none;
  }
`;
export const Error = styled.p`
  color: #bc0000;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-align: start;
  padding-top: 8px;
  font-style: normal;
  line-height: 18px;
`;
export const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: #333333;
  font-size: 14px;
  padding-bottom: 10px;
  font-weight: 500;
`;
