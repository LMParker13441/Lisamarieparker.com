import React, { useState } from "react";
import { TextField } from "./TextField";

const addresses = [
    `Veritext
14520 Sylvan St
Van Nuys, California 91411
800-826-0277`
]

export const InvoiceQuickFill = () => {
    const [preset, setPreset] = useState(1);

    return <>
        <select className="no-print" onChange={e => setPreset(e.currentTarget.selectedIndex)}>
            <option>BLANK</option>
            <option selected={true}>Veritext</option>
        </select>
        <div>
            {
                preset == 0 ? <TextField /> : <span className="new-line" >{addresses[preset - 1]}</span>
            }
        </div>
    </>
}