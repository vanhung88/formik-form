import React, { useRef, useState } from "react";
import { Modal } from "antd";
import { Formik, Form } from "formik";
import { Schema } from "../AddUserModal/constants";
import InputField from "../Form/Input";
import CheckBoxField from "../Form/CheckBox";
import * as S from "../AddUserModal/style";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../../store/slices/userSlice";
export interface IAppProps {
  isModalVisible: any;
  handleCancel: any;
  item: any;
}
export default function App(props: IAppProps) {
  const { isModalVisible, handleCancel, item } = props;
  const dispatch = useDispatch();
  const formE: any = useRef();

  const handleUpdate = (value: any) => {
    dispatch(updateUser(value));

    handleCancel();
    formE.current.reset();
  };
  return (
    <Modal
      footer={null}
      title="UPDATE USER"
      visible={isModalVisible}
      onCancel={handleCancel}
    >
      <Formik
        initialValues={{
          id: item?.id,
          name: item?.name,
          phone: item?.phone,
          gender: item?.gender,
          dateOfBirth: item?.dateOfBirth,
        }}
        validationSchema={Schema}
        onSubmit={handleUpdate}
      >
        {({ errors, touched }) => (
          <Form>
            <InputField
              name="id"
              errors={errors.id}
              touched={touched.id}
              label="ID"
              placeholder=""
            />
            <InputField
              name="name"
              errors={errors.name}
              touched={touched.name}
              label="User Name"
              placeholder=""
            />
            <InputField
              name="phone"
              errors={errors.phone}
              touched={touched.phone}
              label="Phone Number"
              placeholder=""
            />
            <InputField
              name="dateOfBirth"
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
              <S.AButton type="submit">Done</S.AButton>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
