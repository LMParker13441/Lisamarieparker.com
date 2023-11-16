import React, { useEffect, useState } from "react";
import { TextField } from "./TextField";
import { Money } from "./Money";

export const Item = (props: { onChange: (i: any) => void }) => {
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(quantity * price);
    },
        [quantity, price]);

    useEffect(() => {
        if (props.onChange)
            props.onChange(total);
    }, [total])

    return <tr>
        <td style={{  padding:3 }}><TextField onInput={setQuantity} /></td>
        <td style={{  padding:3 }}><TextField /></td>
        <td style={{ textAlign: 'right', padding:3 }}>
            {
                price != 0 ? '$' : ''
            }
            <TextField onInput={setPrice} /></td>
        <td style={{ textAlign: 'right', padding:3 }}>
            { total > 0 ? <Money>{total}</Money> : <></>}
        </td>
    </tr>

}