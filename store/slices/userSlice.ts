import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: "123",
      name: "Hung",
      phone: "0823474409",
      gender: "male",
      dateOfBirth: "12/02/2001",
    },
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state: any, action: any): any => {
      state.users = [...state.users, action.payload];
    },
    deleteUser: (state: any, action: any): any => {
      const data = state.users.filter(
        (item: any) => item.id !== action.payload.id
      );

      state.users = data;
    },
    updateUser: (state: any, action: any): any => {
      // state.users = [...state.users, action.payload];
      const newArray = [...state.users];
      // console.log(a);

      let a = newArray.find((item: any) => item.id === action.payload.id);
      a.id = action.payload.id;
      a.name = action.payload.name;
      a.phone = action.payload.phone;
      a.gender = action.payload.gender;
      a.dateOfBirth = action.payload.dateOfBirth;
      // console.log("itemUpdate" + itemUpdate);
      console.log(newArray);
      state.users = newArray;
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
