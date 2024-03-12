import {createSlice} from '@reduxjs/toolkit'
import {GetGroupsResponse, Status} from "./types.ts";
import {fetchGroups} from "./asyncActions.ts";

const initialState: GetGroupsResponse = {
    data: [],
    status: Status.LOADING,
    privacyFilter: 'все',
    colorFilter: 'все',
    friendsFilter: 'все'
}

export const groupSlice = createSlice({
    name: 'group',
    initialState,
    reducers: {
        setPrivacyFilter: (state, action) => {
            state.privacyFilter = action.payload;
        },
        setColorFilter: (state, action) => {
            state.colorFilter = action.payload;
        },
        setFriendsFilter: (state, action) => {
            state.friendsFilter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGroups.pending, (state) => {
            state.status = Status.LOADING;
            state.data = [];
        });

        builder.addCase(fetchGroups.fulfilled, (state, action) => {
            if (action.payload) {
                state.data = action.payload;
                state.status = Status.SUCCESS;
            } else {
                state.status = Status.ERROR;
                state.data = [];
            }
        });

        builder.addCase(fetchGroups.rejected, (state) => {
            state.status = Status.ERROR;
            state.data = [];
        })
    }
});

export const { setPrivacyFilter, setColorFilter, setFriendsFilter } = groupSlice.actions;

export default groupSlice.reducer