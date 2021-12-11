import React, { useRef, useState } from "react";
import { Modal } from "antd";
import { Schema } from "./constants";
import CheckBoxField from "../Form/CheckBox";
import * as S from "./style";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/slices/userSlice";
import { FastField, Form, Formik } from 'formik';
import  InputField from "../../components/Form/Input";


export interface IAppProps {
  isModalVisible: any;
  handleCancel: any;
}
const handleSubmit = (e: any) => {
  console.log(e);
};
export default function App(props: IAppProps) {
  const { isModalVisible, handleCancel } = props;
  const dispatch = useDispatch();
  const formE: any = useRef();

  const handleSubmit = (value: any) => {
    dispatch(addUser(value));
    // setIsVisibleAdd(false);
    handleCancel();
    formE.current.reset();
  };
  return (
    <Modal
      footer={null}
      title="ADD USER"
      visible={isModalVisible}
      onCancel={handleCancel}
    >
      <Formik
        initialValues={{
          id:  "",
          name:  "",
          phone:"" ,
          gender: "",
          dateOfBirth: "",
        }}
        validationSchema={Schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <FastField
              name="id"
              errors={errors.id}
              touched={touched.id}
              component={InputField}
              label="ID"
              placeholder=""
              />
            <FastField
              name="name"
              component={InputField}
              errors={errors.name}
              touched={touched.name}
              label="User Name"
              placeholder=""
              />
            <FastField
              name="phone"
              component={InputField}
              errors={errors.phone}
              touched={touched.phone}
              label="Phone Number"
              placeholder=""
              />
            <FastField
              name="dateOfBirth"
              component={InputField}
              errors={errors.dateOfBirth}
              touched={touched.dateOfBirth}
              label="Day of birth"
              placeholder="Ex: 23/02/2001"
            />
            <CheckBoxField
              type="checkbox"
              name="gender"
              errors={errors.gender}
              touched={touched.gender}
              label="Gender: "
              value1="male"
              value2="female"
            />

            <div style={{ marginTop: "15px" }}>
              <S.AButton type="reset" onClick={handleCancel}>
                Cancel
              </S.AButton>
              <S.AButton type="submit">ADD</S.AButton>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
