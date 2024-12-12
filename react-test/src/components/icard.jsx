import React from "react";

const cardStyle = {
  width: "300px",
  border: "3px solid red",
  padding: "10px",
  margin: "20px auto",
  fontFamily: "Arial, sans-serif",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  backgroundColor: "#f5f5f5",
};

const headerStyle = {
  backgroundColor: "#0000FF",
  color: "white",
  padding: "8px",
  textAlign: "center",
  margin: "10px 0",
  fontSize: "24px",
  fontWeight: "bold",
};

const imageStyle = {
  width: "150px",
  height: "150px",
  display: "block",
  margin: "10px auto",
  borderRadius: "5px",
};

const infoStyle = {
  display: "grid",
  gridTemplateColumns: "auto auto",
  gap: "10px",
  padding: "10px",
  fontSize: "18px",
};

const labelStyle = {
  fontWeight: "bold",
  textAlign: "right",
};

const valueStyle = {
  textAlign: "left",
};

const Student = ({ name, branch, section, image }) => {
  return (
    <div style={cardStyle}>
      <img src={image} alt="Student" style={imageStyle} />
      <div style={headerStyle}>ABES</div>
      <div style={infoStyle}>
        <div style={labelStyle}>Name:</div>
        <div style={valueStyle}>{name}</div>
        <div style={labelStyle}>Branch:</div>
        <div style={valueStyle}>{branch}</div>
        <div style={labelStyle}>Section:</div>
        <div style={valueStyle}>{section}</div>
      </div>
    </div>
  );
};

const ICard = () => {
  return (
    <Student
      name="Ram"
      branch="IT"
      section="A"
      image="/path/to/student/image.jpg"
    />
  );
};

export default ICard;
