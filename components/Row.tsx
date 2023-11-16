import React from "react";
import { HeaderStyle } from "../Global";

export function Row(props: { columns: Array<React.ReactNode>, header?: boolean, targetColspan?: number }) {
    const rowStyle = props.header ? {
        ...HeaderStyle
    }
        : {};
    
    const cellStyle = {};

    return <tr style={rowStyle}>{
        props.columns.map((val, i) => <td key={i} style={cellStyle} colSpan={(props.targetColspan ?? props.columns.length) / props.columns.length}>{val}</td>)
    }</tr>
}