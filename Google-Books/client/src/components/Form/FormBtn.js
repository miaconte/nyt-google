import React from "react";

export function FormBtn(props) {
    return (
        <button {...props} className = "btn btn-success float-right">
        {props.children}
        </button>
    )
}