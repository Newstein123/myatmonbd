import React from "react";

const Page = React.forwardRef((props, ref) => {
  return (
    <div
      className="demoPage"
      ref={ref}
      style={{
        backgroundColor: "red",
      }}
    >
      <p>{props.children}</p>
      <p
        style={{
          fontSize: 10,
        }}
      >
        Pg No: {props.number}
      </p>
    </div>
  );
});

export default Page;
