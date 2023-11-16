import React, { useState } from "react";

export const Block = (props: { itemGenerator: (value: any, i: number, remove: () => void) => JSX.Element }) => {
    const [blocks, updateBlocks] = useState([Math.random()]);

    const add = () => updateBlocks([...blocks, Math.random()]);

    const remove = (i: number) => {
        const items = [...blocks];
        const index = items.indexOf(i);
        items.splice(index, 1)
        updateBlocks(items);
    }

    return <>
        {
            blocks.map((val, i) => <React.Fragment key={val}>{props.itemGenerator(val, i, () => remove(val))}</React.Fragment>)
        }
        <div className='no-print'>
            <button onClick={add}>Add</button>
        </div>
    </>
}