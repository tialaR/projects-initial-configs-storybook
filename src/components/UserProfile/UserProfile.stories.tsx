import React from 'react';
import { UserProfile } from './UserProfile'; // Ajuste o caminho conforme necessário

export default {
    title: 'Components/UserProfile',
    component: UserProfile,
    argTypes: {
        name: { control: 'text' },
        email: { control: 'text' },
        imageUrl: { control: 'text' },
    },
};

const Template = (args) => <UserProfile {...args} />;

export const WithImage = Template.bind({});
WithImage.args = {
    name: 'Tiala Rocha',
    email: 'tiala.rocha@example.com',
    imageUrl: 'https://via.placeholder.com/150', // Adicione a URL da imagem
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
    name: 'Tiala Rocha',
    email: 'tiala.rocha@example.com',
    imageUrl: '', // Sem URL de imagem
};

export const WithLoading = Template.bind({});
WithLoading.args = {
    name: '',
    email: '',
    imageUrl: '', // Todos os dados são ausentes
};
