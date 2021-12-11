import styled from "styled-components";
import { Field } from "formik";
interface Props {
  $height?: any;
  $borderRadius?: any;
}

export const InputField = styled(Field)<Props>`
  margin-left: 10px;
`;
export const Error = styled.p`
  color: #bc0000;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-align: start;
  padding-top: 8px;
  font-style: normal;
  line-height: 18px;
  width: 100%;
`;

export const Label = styled.label`
  color: #333333;
  font-size: 16px;
  font-weight: 500;
`;
export const Label2 = styled.label`
  font-size: 16px;
`;
