import {useAppSelector} from "../redux/hooks/hooks.ts";

export function FilterGroups() {
    const groups = useAppSelector((state) => {

        return state.groupReducer.data?.filter((group) => {
            if (
                (state.groupReducer.privacyFilter === 'закрытые' && !group.closed) || (state.groupReducer.privacyFilter === 'открытые' && group.closed)
            ) {
                return false;
            }

            if (state.groupReducer.colorFilter !== 'все' && group.avatar_color !== state.groupReducer.colorFilter) {
                return false;
            }

            if (state.groupReducer.friendsFilter === 'есть' && (!group.friends || group.friends.length === 0)) {
                return false;
            }

            return !(state.groupReducer.friendsFilter === 'нет' && group.friends && group.friends.length > 0);

        });
    });
    return groups;
}