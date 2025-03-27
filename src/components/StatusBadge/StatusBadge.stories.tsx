import React from 'react';
import { StatusBadge } from './StatusBadge';

export default {
    title: 'Components/StatusBadge',
    component: StatusBadge,
    argTypes: {
        label: { control: 'text' },
    },
};

const Template = (args) => <StatusBadge {...args} />;

export const Excelente = Template.bind({});
Excelente.args = {
    label: 'Excelente',
};

export const Bom = Template.bind({});
Bom.args = {
    label: 'Bom',
};

export const Regular = Template.bind({});
Regular.args = {
    label: 'Regular',
};

export const Ruim = Template.bind({});
Ruim.args = {
    label: 'Ruim',
};

export const PendenteAtivacao = Template.bind({});
PendenteAtivacao.args = {
    label: 'Pendente ativação',
};

export const EnvioProgramado = Template.bind({});
EnvioProgramado.args = {
    label: 'Envio programado',
};

export const Cancelada = Template.bind({});
Cancelada.args = {
    label: 'Cancelada',
};

export const Cancelado = Template.bind({});
Cancelado.args = {
    label: 'Cancelado',
};

export const Concluida = Template.bind({});
Concluida.args = {
    label: 'Concluída',
};

export const Ativa = Template.bind({});
Ativa.args = {
    label: 'Ativa',
};

export const Aprovado = Template.bind({});
Aprovado.args = {
    label: 'Aprovado',
};

export const Reprovado = Template.bind({});
Reprovado.args = {
    label: 'Reprovado',
};

export const EmAnalise = Template.bind({});
EmAnalise.args = {
    label: 'Em análise',
};

export const Indefinido = Template.bind({});
Indefinido.args = {
    label: 'Indefinido',
};

export const TBD = Template.bind({});
TBD.args = {
    label: 'TBD',
};
