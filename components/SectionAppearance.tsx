import React from "react";
import { HeaderStyle } from "../Global";
import { AppearanceBlock } from "./AppearanceBlock";

export const SectionAppearance = () => <>
    <tr>
        <td colSpan={2} style={HeaderStyle}>APPEARANCES</td>
        <td colSpan={2} style={HeaderStyle}>TRANSCRIPT ORDER DETAILS</td>
    </tr>
    <AppearanceBlock />
</>