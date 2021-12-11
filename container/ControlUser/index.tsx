import React, { useState } from "react";
import * as S from "./style";
import AddUserModal from "../../components/AddUserModal";
import UpdateUserModal from "../../components/UpdateUserModal/index";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../store/slices/userSlice";
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { FastField, Form, Formik } from 'formik';

export interface IAppProps {}

export default function App(props: IAppProps) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Date Of Birth",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Action",
      render: (record: any) => (
        <span>
          <EditOutlined
            onClick={(e) => {
              onEdit(record, e);
            }}
            style={{ cursor: "pointer" }}
          />{" "}
          &emsp; |&emsp;{" "}
          <DeleteOutlined
            onClick={(e) => {
              onDelete(record, e);
            }}
            style={{ cursor: "pointer" }}
          />
        </span>
      ),
    },
  ];

  interface IUser {
    name: any;
    phone: any;
    id: any;
    gender: any;
    dateOfBirth: any;
  }

  const { users } = useSelector((state: any) => state.users);
  const [isVisibleAdd, setIsVisibleAdd] = useState(false);
  const [isVisibleUpdate, setIsVisibleUpdate] = useState(false);
  const [itemUpdate, setItemUpdate] = useState();
  const dispatch = useDispatch();

  const handleCancel = () => {
    setIsVisibleAdd(false);
    setIsVisibleUpdate(false);
  };
  const onDelete = (key: any, e: any) => {
    dispatch(deleteUser(key));
  };
  const onEdit = async (key: any, e: any) => {
    await setItemUpdate(key);
    await setIsVisibleUpdate(true);
  };

  return (
    <S.Wrapper>
      <S.AddUseButton
        onClick={() => {
          setIsVisibleAdd(true);
        }}
      >
        <PlusCircleOutlined style={{ paddingTop: "2px" }} />
        <S.Text style={{ marginLeft: "8px" }} $color="#276597">
          ADD USER
        </S.Text>
      </S.AddUseButton>
      <S.ATable columns={columns} dataSource={[...users]} />

      {isVisibleAdd && (
        <AddUserModal
          isModalVisible={isVisibleAdd}
          handleCancel={handleCancel}
        />
      )}
      {isVisibleUpdate && itemUpdate && (
        <UpdateUserModal
          item={itemUpdate}
          isModalVisible={isVisibleUpdate}
          handleCancel={handleCancel}
        />
      )}
    </S.Wrapper>
  );
}
