import { Meta, StoryObj } from "@storybook/nextjs";
import Loading from "./loading";
const meta: Meta<typeof Loading> = {
  title: "Loading",
  component: Loading,
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof Loading>;
export const Active: Story = {
  args: {},
};
