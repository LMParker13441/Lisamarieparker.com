import React from "react";
import { HeaderStyle } from "../Global";
import { RadioButtons } from "./RadioButtons";
import { Right } from "./Right";
import { TextField } from "./TextField";

export const SectionExhibit = () => <>
    <tr>
        <td colSpan={4} style={HeaderStyle}>INSTRUCTIONS</td>
    </tr>
    <tr>
        <td colSpan={4}>
            <div><TextField /></div>
        </td>
    </tr>
</>