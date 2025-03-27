import { DrawerList } from './DrawerList';
import { DrawerHeader } from './DrawerHeader';
import { removeLocalSelectedEvent } from '../../utils/localStorageItems';
import { Icon } from '../Icon/Icon';
// import { signOut } from 'aws-amplify/auth';
import * as S from './styles';
import React from 'react';

type DrawerProps = {
    isExpanded: boolean;
    onToggle: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isExpanded, onToggle }) => {
    const handleLogout = () => {
        // removeLocalSelectedEvent();
        // signOut();
    };

    return (
        <S.DrawerContainer isExpanded={isExpanded}>
            <DrawerHeader isExpanded={isExpanded} onToggle={onToggle} />
            <S.SpaceY80 />
            <DrawerList isExpanded={isExpanded} />
            <S.DrawerFooter isExpanded={isExpanded} onClick={handleLogout}>
                <Icon name="logout" />
                {isExpanded && <span>Sair</span>}
            </S.DrawerFooter>
        </S.DrawerContainer>
    );
};

export { Drawer };