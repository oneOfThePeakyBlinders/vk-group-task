import { configureStore } from '@reduxjs/toolkit'
import groupReducer from "./features/group/groupSlice.ts";

export const store = configureStore({
    reducer: {
        groupReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch