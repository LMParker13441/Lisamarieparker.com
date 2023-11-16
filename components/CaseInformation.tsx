import React from "react"
import { TextField } from "./TextField"
import { WitnessBlock } from "./WitnessBlock"

export const CaseInformation = () =>
    <table>
        <tr>
            <td>
                <div>Abbreviated Caption:</div>
                <div><TextField /></div>
            </td>
        </tr>
        <WitnessBlock />
    </table>