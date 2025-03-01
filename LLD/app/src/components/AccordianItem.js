import React, { useState } from "react";

const AccordianItem = ({ isOpen, setOpenIndex, title, body }) => {
  return (
    <div className="border border-black">
      <h1
        className="font-bold p-2 bg-slate-200 flex justify-between cursor-pointer"
        onClick={() => setOpenIndex()}
      >
        <span>{title}</span>
        <span>{isOpen ? "⬆️" : "⬇️"}</span>
      </h1>
      {isOpen && <p className="p-2">{body}</p>}
    </div>
  );
};

export default AccordianItem;
