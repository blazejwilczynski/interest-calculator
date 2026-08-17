import React from "react";

export default function Layout(props) {
  const { children } = props;
  return (
    <div>
      <header>
        <h1>Compund Interest Calculator</h1>
      </header>
      {children}
      <footer></footer>
    </div>
  );
}
