import React, { SyntheticEvent } from "react";

const adjustSize = (e: SyntheticEvent<HTMLElement>, props: defaultProps) => {
    const target = e.currentTarget as HTMLSpanElement;

    if (props.forceUpper)
        target.innerText = target.innerText.toUpperCase();
}

type defaultProps = { forceUpper?: boolean, onInput?: (value: any) => void }

export const TextField = (props: defaultProps = { forceUpper: false, onInput: undefined }) => {
    return <span contentEditable
        onBlur={e => adjustSize(e, props)}
        onInput={e => {
            if (props.onInput)
                props.onInput!(e.currentTarget.textContent!)
        }}
    />
}
