import React from "react";

const FileInput = ({ onchange }) => {
  return <input type="file" onChange={onchange} />; 
};

export default FileInput;
