import React from 'react';
import { Icon } from './Icon';  // Ajuste o caminho conforme necessário

export default {
    title: 'Components/Icon',
    component: Icon,
    argTypes: {
        name: {
            control: 'text',
            description: 'Nome do ícone para exibir',
        },
        size: {
            control: 'number',
            description: 'Tamanho do ícone'
        },
        color: {
            control: 'color',
            description: 'Cor do ícone'
        },
    },
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'whatsapp', // Nome do ícone (deve ser uma chave válida do iconMap)
    size: 32,         // Tamanho do ícone
    color: '#4CAF50', // Cor do ícone (pode ser uma cor personalizada)
};

export const Large = Template.bind({});
Large.args = {
    name: 'generalCampaign', // Nome do ícone
    size: 64,                // Tamanho maior
    color: '#FF6347',        // Cor do ícone
};

export const Small = Template.bind({});
Small.args = {
    name: 'search',          // Nome do ícone
    size: 16,                // Tamanho menor
    color: '#0000FF',        // Cor do ícone
};
