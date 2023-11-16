import React, { useState } from "react";
import { Item } from "./Item";
import { Money } from "./Money";

export const Items = () => {
    const [rows, setRows] = useState([...Array(10)].fill(0));

    return <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '5%' }} />
        <div style={{ width: '90%' }}>
            <table style={{ width: '100%'}}>
                <tbody>
                    <tr>
                        <td style={{fontWeight:'bold', padding:3, textAlign:'center'}}>QUANTITY</td>
                        <td style={{fontWeight:'bold', padding:3, textAlign:'center'}}>DESCRIPTION</td>
                        <td style={{fontWeight:'bold', padding:3, textAlign:'center'}}>UNIT PRICE</td>
                        <td style={{fontWeight:'bold', padding:3, textAlign:'center'}}>TOTAL</td>
                    </tr>
                    {
                        rows.map((v, i) => <Item
                            key={i}
                            onChange={r => {
                                const newRows = [...rows]
                                newRows[i] = r;
                                setRows(newRows);
                            }} />)
                    }
                    <tr>
                        <td colSpan={3} style={{ textAlign: 'right', padding:3 }}>TOTAL DUE</td>
                        <td style={{ textAlign: 'right', padding:3 }}><Money>{rows.reduce((s, a) => s + (a || 0), 0)}</Money></td>
                    </tr>
                </tbody>
            </table>

        </div>
        <div style={{ width: '5%' }} />
    </div>
}