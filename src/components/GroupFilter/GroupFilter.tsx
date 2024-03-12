import React from 'react';
import {FormItem, NativeSelect} from "@vkontakte/vkui";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks.ts";
import {setColorFilter, setFriendsFilter, setPrivacyFilter} from "../../redux/features/group/groupSlice.ts";
import {getUniqueColors} from "../../utils/getUniqueColoOptions.ts";

const GroupFilter: React.FC = () => {
    const dispatch = useAppDispatch();
    const groups = useAppSelector((state) => state.groupReducer.data);

    const handlePrivacyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setPrivacyFilter(e.target.value));
    }

    const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setColorFilter(e.target.value));
    }

    const handleFriendsStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setFriendsFilter(e.target.value));
    }


    const uniqueColors = getUniqueColors(groups);
    const colorOptions = uniqueColors.map((color) => (
        <option key={color} value={color}>
            {color}
        </option>
    ));

    return (
        <>
            <FormItem
                top="Приватность"
                htmlFor="select-id"
                onChange={handlePrivacyChange}
            >
                <NativeSelect id="select-id">
                    <option value="все">Все</option>
                    <option value="закрытые">Закрытые</option>
                    <option value="открытые">Открытые</option>
                </NativeSelect>
            </FormItem>
            <FormItem
                top="Цвет аватарки"
                htmlFor="select-id"
                onChange={handleColorChange}
            >
                <NativeSelect id="select-id">
                    <option value="все">Все</option>
                    {colorOptions}
                </NativeSelect>
            </FormItem>
            <FormItem
                top="Наличие друзей"
                htmlFor="select-id"
                onChange={handleFriendsStatusChange}
            >
                <NativeSelect id="select-id">
                    <option value="все">Все</option>
                    <option value="есть">Есть</option>
                    <option value="нет">Нет</option>
                </NativeSelect>
            </FormItem>
        </>
    );
};

export default GroupFilter;