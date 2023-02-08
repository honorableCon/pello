import React from "react";

interface IndexProps {
  children: any;
}
const Index = (props: IndexProps) => {
  return <div>{props.children}</div>;
};

export default Index;
