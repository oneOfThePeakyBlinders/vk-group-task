import {IGroup} from "../redux/features/group/types.ts";

export const getUniqueColors = (groups?: IGroup[]) => {
    const uniqueColors = new Set<string>();
    groups?.forEach((group) => {
        if (group.avatar_color) {
            uniqueColors.add(group.avatar_color);
        }
    });
    return Array.from(uniqueColors);
};

