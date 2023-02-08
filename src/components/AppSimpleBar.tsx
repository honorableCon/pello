import React from "react";

// simplebar
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

interface AppSimpleBarProps {
  children: any;
  style?: object;
  className?: string;
  scrollRef?: any;
}
const AppSimpleBar = ({
  children,
  style,
  className,
  scrollRef,
}: AppSimpleBarProps) => {
  return (
    <SimpleBar style={style} className={className} ref={scrollRef}>
      {children}
    </SimpleBar>
  );
};

export default AppSimpleBar;
