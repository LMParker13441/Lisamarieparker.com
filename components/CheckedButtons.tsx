import React, { useState } from "react";

export const CheckedButtons = (props: { items: Array<React.ReactNode> }) => {
    return <span>
        {
            props.items.map((val, i) => {
                return <label key={i} style={{whiteSpace:'nowrap'}}>
                    <input type='checkbox' />
                    {val}
                    <br/>
                </label>
            })
        }
    </span>
}