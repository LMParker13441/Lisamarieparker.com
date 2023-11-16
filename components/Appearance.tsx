import React from "react";
import { HeaderStyle } from "../Global";
import { RadioButtons } from "./RadioButtons";
import { Right } from "./Right";
import { Row } from "./Row";
import { TextField } from "./TextField";

export const Appearance = (props: { number: number, remove: () => void }) => {

    const appearanceInfo = <div>
        <div>LAW FIRM/ATTORNEY/EMAIL ADDRESS:</div>
        <div><TextField /></div>
        <div>NOTES:</div>
        <div><TextField /></div>
    </div>
//writingMode: 'vertical-lr', transform: 'rotate(-180deg)', whiteSpace: 'nowrap',
    return <>
        <tr >
            <td rowSpan={7} style={{  ...HeaderStyle }}>
                {props.number == 0 ? 'ORG + 1' : 'COPY ORDER'}
            </td>
            <td rowSpan={7}>{appearanceInfo}</td>
            <td><Right>TRANSCRIPT:</Right></td>
            <td style={{width:'100%'}}><RadioButtons items={['PAPER ONLY', 'ELECTRIC ONLY', 'BOTH']} /></td>
        </tr>
        <tr>
            <td><Right>EXHIBITS:</Right></td>
            <td><RadioButtons items={['PAPER ONLY', 'ELECTRIC ONLY', 'BOTH']} /></td>
        </tr>
        <tr>
            <td><Right>CONDENSED:</Right></td>
            <td><RadioButtons items={['PAPER ONLY', 'ELECTRIC ONLY', 'BOTH']} /></td>
        </tr>
        <tr>
            <td><Right>EXPEDITE:</Right></td>
            <td><RadioButtons items={['YES']} /> DATE NEEDED - <TextField /></td>
        </tr>
        <tr>
            <td><Right>ROUGH DRAFT:</Right></td>
            <td><RadioButtons items={['YES']} /> TOTAL PAGES - <TextField /></td>
        </tr>
        <tr>
            <td><Right>REALTIME:</Right></td>
            <td><RadioButtons items={['YES']} /></td>
        </tr>
        <tr>
            <td><Right>NO COPY:</Right></td>
            <td><RadioButtons items={['DOES NOT WANT A TRANSCRIPT']} /></td>
        </tr>
        <tr className='no-print'>
            <button onClick={props.remove}>Remove</button>
        </tr>

    </>
}
