import React from "react";

export const Main = () => {
  console.log("trigger a release");
  return (
    <>
      <h1>Hello World</h1>
      <h2>This is a fix example</h2>
      <h3>This is a breaking change on "next" branch</h3>
      <h4>This is a bug fix on @next channel</h4>
      <p>A small feture</p>
    </>
  );
};
