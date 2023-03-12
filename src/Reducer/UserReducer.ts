import { createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../Model/User.Model";
import { RootState } from "../Store/Store";

const initialState = {
    userDetails: [],
    currentUser: {},
    chatUser: {}
}

export const userSlice = createSlice({

    name: 'user',
    initialState,
    reducers: {
        usersList: (state, action) => {
            state.userDetails = action.payload
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        setChatUser: (state, action) => {
            state.chatUser = action.payload
        }
    }
});
export const getCurrentUser = (state: RootState): UserModel => state.user.currentUser;
export const getAllUser = (state: RootState): UserModel[] => state.user.userDetails;
export const getChatUser = (state: RootState): UserModel => state.user.chatUser;
export const { usersList, setCurrentUser, setChatUser } = userSlice.actions;
export default userSlice.reducer;
