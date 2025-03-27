import React from 'react';
import { Breadcrumb } from '.';

export default {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
};

const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Product Details', href: '/product-details' },
];

export const Default = () => <Breadcrumb items={breadcrumbItems} />;

export const WithCustomItems = () => {
    const customItems = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Settings', href: '/settings' },
        { label: 'Profile', href: '/profile' },
    ];
    return <Breadcrumb items={customItems} />;
};

export const WithEmptyItems = () => <Breadcrumb items={[]} />;
