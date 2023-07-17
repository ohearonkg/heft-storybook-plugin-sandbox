import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Button, BUTTON_KINDS } from "components";

export default {
  title: "Components/Button",
  argTypes: {
    kind: {
      options: BUTTON_KINDS,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

export const ForwardedRef: ComponentMeta<typeof Button> = {
  render: (args) => {
    return <Button kind={args.kind}>SAMPLE BUTTON</Button>;
  },
};

ForwardedRef.args = {
  kind: "PRIMARY",
};
