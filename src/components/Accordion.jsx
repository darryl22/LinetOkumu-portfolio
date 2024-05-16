import React from "react";
import { useState } from "react";
import { useRef } from "react";

function Accordion({title, textContent}) {

    const [open, setOpen] = useState(false)

    function toggleAccordion(e) {
      setOpen(prev => {
        return !prev
      })
    }

    let accordionPanel = {
      maxHeight: open ? "500px" : "0px",
      padding: open ? "1em" : "0em",
      border: open ? "1px solid black" : "none",
      margin: open ? "5px 0px" : "0px",
    }

    return (
        <div>
            <button className="accordion" onClick={toggleAccordion}>
              <p style={{padding: "0px", margin: "0px"}}>{title}</p>
              {open ? <p style={{padding: "0px", margin: "0px"}}>-</p> : <p style={{padding: "0px", margin: "0px"}}>+</p>}
            </button>
            <div className="accordion-panel" style={accordionPanel}>{textContent}</div>
        </div>
    )
}

export default Accordion