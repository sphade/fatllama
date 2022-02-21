import React from "react";

function RotatingText({ rotatingtxt }) {
  return (
    <span className=" p-2">
      <span className="slidingVertical">
        {rotatingtxt.map((text, id) => (
          <span key={id}>{text}</span>
        ))}
      </span>
      <span className="lastText">anything</span>
    </span>
  );
}

export default RotatingText;
