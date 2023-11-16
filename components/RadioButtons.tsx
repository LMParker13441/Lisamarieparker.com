import React, { useState } from "react";

export const RadioButtons = (props: { items: Array<React.ReactNode> }) => {
    const name = Math.random().toLocaleString();

    return <span style={{ whiteSpace: 'nowrap' }}>
        {
            props.items.map((val, i) => {
                return <label key={i}>
                    <input type='radio' name={name} />
                    {val}
                </label>
            })
        }
    </span>
}