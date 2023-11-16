import React from "react"
import { HeaderStyle } from "../Global"
import { CaseInformation } from "./CaseInformation"
import { DepositionInformation } from "./DepositionInformation"

export const SectionInformation = () => <>
    <tr>
        <td colSpan={2} style={HeaderStyle}>DEPOSITION INFORMATION</td>
        <td colSpan={2} style={HeaderStyle}>CASE INFORMATION</td>
    </tr>
    <tr>
        <td colSpan={2}><DepositionInformation /></td>
        <td colSpan={2} ><CaseInformation /></td>
    </tr>
</>