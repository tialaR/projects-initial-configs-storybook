import React from 'react';
import { Button } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Clique aqui',
    },
};

export const Primary = {
    args: {
        variant: 'primary',
    },
};

export const PrimaryDisabled = {
    args: {
        variant: 'primary',
        disabled: true,
    },
};

export const PrimaryOutline = {
    args: {
        variant: 'primary-outline',
    },
};

export const PrimaryOutlineDisabled = {
    args: {
        variant: 'primary-outline',
        disabled: true,
    },
};

export const Outline = {
    args: {
        variant: 'outline',
    },
};

export const OutlineWithIconLeft = {
    args: {
        variant: 'outline',
        icon: <span role="img" aria-label="add">➕</span>,
        iconPosition: 'left',
    },
};

export const OutlineWithIconRight = {
    args: {
        variant: 'outline',
        icon: <span role="img" aria-label="add">➕</span>,
        iconPosition: 'right',
    },
};

export const OutlineDisabled = {
    args: {
        variant: 'outline',
        disabled: true,
    },
};
