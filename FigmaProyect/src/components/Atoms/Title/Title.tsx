import React from "react";

interface TitleProps {
  text: string;
  fontSize?: string; 
  color?: string;
  align?: "left" | "center" | "right";
  fontWeight?: "normal" | "medium" | "bold" | "extrabold"; 
}

const Title: React.FC<TitleProps> = ({
  text,
  fontSize = "24px", 
  color = "#000000",
  align = "left",
  fontWeight = "bold",
}) => {
  return (
    <h1
      style={{
        fontSize, 
        color,
        textAlign: align,
        fontWeight,
      }}
    >
      {text}
    </h1>
  );
};

export default Title;