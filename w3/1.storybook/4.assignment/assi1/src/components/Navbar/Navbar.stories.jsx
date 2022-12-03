import React from "react";
import Navbar from "./Navbar";

export default {
  title: "components/Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

const Template = (args) => <Navbar {...args} />;

export const Gray = Template.blind({});

Gray.args = {
  links: ["Logo", "Dashboard", "Projects", "Content"],
  color: "white",
  bgColor: "#edf2f7",
};
