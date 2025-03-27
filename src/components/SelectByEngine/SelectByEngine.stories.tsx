import { Meta, StoryObj } from '@storybook/react';
import { SelectByEngine } from './SelectByEngine';
import { EngineOption } from '../../utils/formatEngineValueToLabel';
import React, { useState } from 'react';

const meta: Meta<typeof SelectByEngine> = {
    title: 'Components/SelectByEngine',
    component: SelectByEngine,
};

export default meta;

type Story = StoryObj<typeof SelectByEngine>;

export const Default: Story = {
    render: () => {
        const [selected, setSelected] = useState<EngineOption | null>(null);

        return (
            <div style={{ padding: '2rem' }}>
                <SelectByEngine
                    selected={selected}
                    onSelect={(engine) => {
                        console.log('Selecionado:', engine);
                        setSelected(engine);
                    }}
                />
            </div>
        );
    },
};
