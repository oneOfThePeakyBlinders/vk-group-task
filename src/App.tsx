import {
    AppRoot,
    SplitLayout,
    SplitCol,
    View,
    Panel,
    PanelHeader,
    Header,
    Group,
    usePlatform,
    Title
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {Icon32LogoVk} from "@vkontakte/icons";
import {useEffect} from "react";
import GroupItem from "./components/Group/GroupItem.tsx";
import {fetchGroups} from "./redux/features/group/asyncActions.ts";
import {useAppDispatch, useAppSelector} from "./redux/hooks/hooks.ts";
import GroupFilter from "./components/GroupFilter/GroupFilter.tsx";
import {FilterGroups} from "./utils/filterGroups.ts";


const App = () => {
    const platform = usePlatform();
    const dispatch = useAppDispatch();
    const status = useAppSelector((state) => state.groupReducer.status);

    useEffect( () => {
        dispatch(fetchGroups());
    }, [])  // сработает при монтировании компонента, т.е при октрытии web-приложения;

    const groups = FilterGroups();

    return (
        <AppRoot>
            <SplitLayout header={platform !== "vkcom" && <PanelHeader delimiter="none"/>}>
                <SplitCol autoSpaced>
                    <View activePanel="main">
                        <Panel id="main">
                            <PanelHeader before={<Icon32LogoVk/>}>
                                VK-GROUPS
                            </PanelHeader>
                            <Group header={<Header mode='primary'> Filters</Header>}>
                                <GroupFilter/>
                            </Group>
                            {status === 'loading' ? (
                                <Title level='1' weight='3' style={{margin: 'auto'}}>Loading...</Title>
                            ) : status === 'error' ? (
                                <Title level='1' weight='3' style={{margin: 'auto'}}>Error loading groups ):</Title>
                            ) : (
                                <Group header={<Header mode="primary">Groups</Header>}>
                                    {groups?.map((val) => (
                                        <GroupItem key={val.id} group={val}/>
                                    ))}
                                </Group>
                            )}
                        </Panel>
                    </View>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    );
};
export default App;
