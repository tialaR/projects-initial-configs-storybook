import React from 'react';
import { RadioButtonEventList } from './RadioButtonEventList'; // Ajuste o caminho conforme necessário

export default {
    title: 'Components/RadioButtonEventList',
    component: RadioButtonEventList,
    argTypes: {
        onSelectEvent: { action: 'onSelectEvent' }, // Ação para capturar o evento selecionado
    },
};

const Template = (args) => <RadioButtonEventList {...args} />;

export const Default = Template.bind({});
Default.args = {
    onSelectEvent: (event) => console.log(event), // Ação mockada
};

export const Loading = Template.bind({});
Loading.args = {
    onSelectEvent: (event) => console.log(event), // Ação mockada
};
