import React from 'react';
import { SkeletonBox } from './SkeletonBox';

export default {
    title: 'Components/SkeletonBox',
    component: SkeletonBox,
    argTypes: {
        width: { control: 'text' },
    },
};

const Template = (args) => <SkeletonBox {...args} />;

export const Default = Template.bind({});
Default.args = {
    width: '100px', // Largura padrão
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
    width: '500px', // Largura personalizada
};

export const LargeSkeleton = Template.bind({});
LargeSkeleton.args = {
    width: '100%', // Largura grande
};
