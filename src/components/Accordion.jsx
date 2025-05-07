import React from "react";
import { useState } from "react";
import { useRef } from "react";

function Accordion({title, textContent, image, image2, description}) {

    const [open, setOpen] = useState(false)
    console.log(image2)

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
              {open ? <p style={{padding: "0px", margin: "0px", fontWeight: "bold"}}>-</p> : <p style={{padding: "0px", margin: "0px", fontWeight: "bold"}}>+</p>}
            </button>
            <div className="accordion-panel" style={accordionPanel}>
              <img src={image} alt="accordion image" style={{height: "4em"}}/>
              {image2 !== undefined ? <img src={image2} alt="accordion image" style={{height: "4em"}}/> : null}
              <p style={{fontWeight: "bold"}}>{textContent}</p>
              <p>{description}</p>
            </div>
        </div>
    )
}

export default Accordion