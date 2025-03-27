import React from 'react';
import { MainTitle } from './MainTitle';

export default {
    title: 'Components/MainTitle',
    component: MainTitle,
    argTypes: {
        children: { control: 'text' },
    },
};

const Template = (args) => <MainTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Título Principal',
};

export const CustomText = Template.bind({});
CustomText.args = {
    children: 'Texto Personalizado para o Título',
};
