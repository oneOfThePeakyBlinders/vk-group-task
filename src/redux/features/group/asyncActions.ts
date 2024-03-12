import {createAsyncThunk} from "@reduxjs/toolkit";
import {IGroup} from "./types.ts";
import axios from "axios";
import {URL} from "../../../constants/data.ts";

interface ApiResponse<Data> {
    result?: 1 | 0;
    data?: Data;
}

async function Fetcher<Data>(url: string) {
    const res = await axios.get<ApiResponse<Data>>(url);
    if (res.data.result === 0 || !Array.isArray(res.data)) {
        throw new Error('Ошибка со списком групп!')
    }
    return res.data as Data;
}

export const fetchGroups = createAsyncThunk<IGroup[]>('group/fetchGroups',
    async () => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const data = await Fetcher<IGroup[]>(URL);
            return data;
        } catch (e) {
            throw new Error('Ошибка при получении групп');
        }
    }
);