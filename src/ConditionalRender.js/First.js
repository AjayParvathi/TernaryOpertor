import React from "react";

const First = () => {
  const Student = [
    {
      name: "ajay",
      no: 32,
    },
    { name: "rakesh", no:20 },
    { name: "manoj", no: 52 },
  ];
  return (
    <div>
      <h1 className="m-auto text-center">hello</h1>
      {Student && Student.length > 2 && (
        <center>
          {Student.map((student) => (
            <ul>
              <h5>{student.name}</h5>
              <h6>{student.no}</h6>
            </ul>
          ))}
        </center>
      )}
    </div>
  );
};

export default First;
