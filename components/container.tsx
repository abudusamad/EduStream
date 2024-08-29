import clsx from "clsx";
import React, { forwardRef } from "react";

// Define the styles object
const styles = {
  size: {
    lg: "max-w-[1760px] 3xl:max-w-[1472px] 2xl:px-10",
    md: "max-w-[1760px] 3xl:max-w-[1472px] 2xl:max-w-[1216px] xl:max-w-[936px]",
    medium: "max-w-[1472px] 2xl:px-10",
    sm: "max-w-[1460px] 2xl:max-w-[1216px] xl:max-w-[936px]",
    xs: "max-w-[860px]",
    1344: "max-w-[1408px] px-8",
    1220: "max-w-[1220px] xl:px-8",
    1216: "max-w-[1216px] xl:px-8",
    1152: "max-w-[1152px]",
    1100: "max-w-[1100px]",
    960: "max-w-[960px]",
  },
};

// Define the props interface
interface ContainerProps {
  className?: string;
  size?: keyof typeof styles.size; // Setting size as an optional prop
  children: React.ReactNode;
  as?: React.ElementType;
}

// Define the Container component
const Container = React.memo(
  forwardRef<HTMLElement, ContainerProps>(
    (
      { className = "", size = "md", children, as: Tag = "div", ...otherProps },
      ref
    ) => {
      return (
        <Tag
          className={clsx(
            "relative mx-auto lg:max-w-none lg:px-8 md:px-4",
            styles.size[size],
            className
          )}
          {...otherProps}
          ref={ref}
        >
          {children}
        </Tag>
      );
    }
  )
);

Container.displayName = "Container";

export default Container;
