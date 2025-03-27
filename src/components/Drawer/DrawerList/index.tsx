import { routesNames } from '../../../utils/routesNames';
import { routeItems } from '../../../utils/routeItems';
import { Icon } from '../../Icon/Icon';
import * as S from './styles';
import React from 'react';

type DrawerListProps = {
    isExpanded: boolean;
}

const { LOGIN_FIRST_EVENT } = routesNames;

const DrawerList: React.FC<DrawerListProps> = ({ isExpanded }) => {
    const selectedLocalEvent = 'Feira de Tecnologia';

    const hasEventSelected = selectedLocalEvent !== null;

    const filteredRouteItems = routeItems.filter((item) => item.path !== LOGIN_FIRST_EVENT);

    return (
        <S.Menu>
            {filteredRouteItems.map((item) => (
                <S.MenuItem
                    key={item.label}
                    disable={!hasEventSelected}
                    isActive={location.pathname.includes(item.path)}
                    isExpanded={isExpanded}
                    onClick={() => console.log(item.path)}
                >
                    <S.Icon isExpanded={isExpanded}>
                        <Icon name={item.iconName ?? ''} />
                    </S.Icon>
                    <S.Label isExpanded={isExpanded}>{item.label}</S.Label>
                </S.MenuItem>
            ))}
        </S.Menu>
    );
};

export { DrawerList };
