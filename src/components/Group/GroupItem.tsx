import {IGroup} from "../../redux/features/group/types.ts";
import {
    Avatar,
    Group,
    SimpleCell,
    View, Panel, Cell, PanelHeaderBack, Title
} from "@vkontakte/vkui";
import React, {useState} from "react";

type TGroupProps = {
    group: IGroup;
};

const GroupItem: React.FC<TGroupProps> = ({group}) => {

    const [activePanel, setActivePanel] = useState('panel1');

    return (
        <View activePanel={activePanel}>
            <Panel id="panel1">
                <Group style={{display: "flex"}}>
                    <SimpleCell
                        before={group.avatar_color ? (
                                <Avatar size={100} style={{ backgroundColor: group.avatar_color }} />
                            ) : <Avatar size={100}>{'нет аватарки'}</Avatar>}
                    >
                        <Title>{group.name}</Title>
                    </SimpleCell>
                    <SimpleCell indicator={group.closed ? 'Закрытая' : 'Открытая'}>
                        Приватность:
                    </SimpleCell>
                    <SimpleCell indicator={group.members_count}>
                        Кол-во участников:
                    </SimpleCell>
                    {group.friends ?
                        <SimpleCell indicator={group.friends?.length}
                                    onClick={() => setActivePanel('panel2')}
                        >
                            Друзья:
                        </SimpleCell>
                        :
                        <SimpleCell>
                            Нет друзей
                        </SimpleCell>
                    }
                </Group>
            </Panel>
            <Panel id="panel2">
                <Group>
                    <PanelHeaderBack onClick={() => setActivePanel('panel1')}></PanelHeaderBack>
                    <SimpleCell
                        onClick={() => setActivePanel('panel3')}
                    >
                        { group.friends?.map((friend) => (
                                <Cell key={friend.last_name}>
                                    {friend.first_name} {friend.last_name}
                                </Cell>
                            ))}
                    </SimpleCell>
                </Group>
            </Panel>
        </View>
    );
}

export default GroupItem;
