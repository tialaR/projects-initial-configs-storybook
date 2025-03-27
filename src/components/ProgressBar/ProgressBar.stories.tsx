import React from 'react';
import { ProgressBar } from './ProgressBar';

export default {
    title: 'Components/ProgressBar',
    component: ProgressBar,
    argTypes: {
        color: { control: 'color' },
        percentage: { control: 'number' },
        width: { control: 'text' },
    },
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    color: '#4caf50', // Cor do progresso
    percentage: 50, // Progresso de 50%
    width: '100%', // Largura padrão
};

export const CustomColor = Template.bind({});
CustomColor.args = {
    color: '#ff6347', // Cor personalizada (tomato)
    percentage: 75, // Progresso de 75%
    width: '80%', // Largura de 80%
};

export const SmallProgress = Template.bind({});
SmallProgress.args = {
    color: '#2196f3', // Cor personalizada (azul)
    percentage: 20, // Progresso de 20%
    width: '50%', // Largura de 50%
};
