import React from "react";
import * as S from "./style";

export interface IAppProps {
  errors: any;
  touched: any;
  name: any;
  label: any;
  type: any;
  value1: any;
  value2: any;
}

export default function Input(props: IAppProps) {
  const { value1, value2, errors, touched, name, label, type } = props;

  return (
    <div role="group" aria-labelledby="my-radio-group">
      <S.Label>{label} : </S.Label>
      <S.Label2>
        <S.InputField
          type="radio"
          name={name}
          value={value1}
          style={{ marginRight: "3px" }}
        />
        {value1}
      </S.Label2>
      <S.Label2>
        <S.InputField
          type="radio"
          name={name}
          value={value2}
          style={{ marginRight: "3px" }}
        />
        {value2}
      </S.Label2>
      {touched && errors && <S.Error>{errors}</S.Error>}
    </div>
  );
}
