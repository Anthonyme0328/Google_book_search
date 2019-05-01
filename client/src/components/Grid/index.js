import React from "react";


// creates the container and exports it
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// creates rows and then exports them
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// creates the columns then exports them
export function Col({ size, children }) {
  return (
    <div
    // sets the column that splits the data a point then maps it then joins it at a certain point
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
