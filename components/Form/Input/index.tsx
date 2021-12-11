import React from "react";

import * as S from "./style";

export interface IAppProps {
  errors: any;
  touched: any;
  name: any;
  label: any;
  placeholder: any;
}

export default function Input(props: IAppProps) {
  const { errors, touched, name, label, placeholder } = props;

  return (
    <S.InputWrapper>
      {label && (
        <div>
          <S.Label htmlFor={name}>{label}</S.Label>
        </div>
      )}
      <h1>hello</h1>
      <S.InputField name={name} placeholder={placeholder} />
      {errors && touched ? <S.Error>{errors}</S.Error> : null}
    </S.InputWrapper>
  );
}
