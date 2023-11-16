import React, { Children } from "react";

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const Money = (props: {children : any}) => {
    return <>{formatter.format(props.children)}</>
}