import {createAsyncThunk} from "@reduxjs/toolkit";
import {IGroup} from "./types.ts";
import axios from "axios";
import {URL} from "../../../constants/data.ts";

export const fetchGroups = createAsyncThunk<IGroup[]>('group/fetchGroups',
     async ()=> {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const {data} = await axios.get(URL);
            if (!data || data.length === 0) {
                return Promise.reject(new Error('Список групп пуст'));
            }
            return data;
        } catch (e) {
            throw new Error('Ошибка при получении групп');
        }
    }
);
