import React, { useState } from 'react';
import { SearchBar } from './SearchBar'; // Ajuste o caminho conforme necessário

export default {
    title: 'Components/SearchBar',
    component: SearchBar,
    argTypes: {
        onSearch: { action: 'searched' },
        debounceEnabled: { control: 'boolean' },
        width: { control: 'text' },
    },
};

const Template = (args) => {
    const [searchResult, setSearchResult] = useState('');

    const handleSearch = (value) => {
        setSearchResult(value);
    };

    return (
        <div>
            <SearchBar {...args} onSearch={handleSearch} />
            <div>
                <p><strong>Search Result:</strong> {searchResult}</p>
            </div>
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    debounceEnabled: true,
    width: '300px',
};

export const NoDebounce = Template.bind({});
NoDebounce.args = {
    debounceEnabled: false,
    width: '300px',
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
    debounceEnabled: true,
    width: '500px',
};
