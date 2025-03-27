import React from "react";
import { Icon } from "./Icon";
import { iconMap } from "../../utils/icons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
    title: "Components/Icon",
    component: Icon,
    argTypes: {
        name: {
            control: {
                type: "select",
                options: Object.keys(iconMap),
            },
        },
        size: {
            control: { type: "number" },
        },
        color: {
            control: { type: "color" },
        },
    },
    args: {
        name: "whatsapp",
        size: 32,
        color: "#4CAF50",
    },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const AllIcons: Story = {
    render: () => (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 100px)", gap: 20 }}>
            {Object.entries(iconMap).map(([name, IconComponent]) => (
                <div key={name} style={{ textAlign: "center" }}>
                    <IconComponent width={32} height={32} style={{ color: "#111" }} />
                    <div style={{ fontSize: 12, marginTop: 8 }}>{name}</div>
                </div>
            ))}
        </div>
    ),
};
