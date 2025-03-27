import React, { useState } from 'react';
import { Select } from './Select';  // Ajuste o caminho conforme necessário
import { TemplateOption, PhoneCategory } from './Select';  // Ajuste o caminho conforme necessário

export default {
    title: 'Components/Select',
    component: Select,
};

const Template = (args) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (value) => {
        setSelectedOption(value);
    };

    return (
        <Select {...args} onChange={handleChange} />
    );
};

export const TemplateOptionStory = Template.bind({});
TemplateOptionStory.args = {
    selectOptionsList: [
        { id: '1', label: 'Option 1', value: 'Option 1' },
        { id: '2', label: 'Option 2', value: 'Option 2' },
        { id: '3', label: 'Option 3', value: 'Option 3' },
    ],
    label: 'Choose an option',
    placeholder: 'Select an option',
};

export const PhoneCategoryStory = Template.bind({});
PhoneCategoryStory.args = {
    selectOptionsList: [
        {
            category: 'Mobile Phones',
            id: '1',
            phones: [
                {
                    name: 'John Doe',
                    number: '1234567890',
                    health: {
                        label: 'Good',
                        color: 'green',
                    },
                },
                {
                    name: 'Jane Doe',
                    number: '0987654321',
                    health: {
                        label: 'Bad',
                        color: 'red',
                    },
                },
            ],
        },
        {
            category: 'Office Phones',
            id: '2',
            phones: [
                {
                    name: 'Office 1',
                    number: '1122334455',
                    health: {
                        label: 'Good',
                        color: 'green',
                    },
                },
            ],
        },
    ],
    label: 'Choose a phone category',
    placeholder: 'Select a phone category',
};
