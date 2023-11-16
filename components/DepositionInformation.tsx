import React from "react"
import { CheckedButtons } from "./CheckedButtons"
import { Right } from "./Right"
import { TextField } from "./TextField"

export const DepositionInformation = () =>
    <table>
        <tr>
            <td>
                <table>
                    <tbody>
                        <tr>
                            <td><Right>JOB DATE:</Right></td>
                            <td style={{ width: '100%' }}><TextField /></td>
                        </tr>
                        <tr>
                            <td><Right>EXPEDITE:</Right></td>
                            <td><TextField /></td>
                        </tr>
                        <tr>
                            <td><Right>TOTAL PAGES:</Right></td>
                            <td style={{ whiteSpace: 'nowrap' }}><TextField /> - Start #<TextField /> / End#<TextField /></td>
                        </tr>
                        <tr>
                            <td><Right>ORIGINAL + ?:</Right></td>
                            <td style={{ whiteSpace: 'nowrap' }}><TextField /> COPIES</td>
                        </tr>
                        <tr>
                            <td><Right>SCHEDULED TIME:</Right></td>
                            <td><TextField /></td>
                        </tr>
                        <tr>
                            <td><Right>START TIME:</Right></td>
                            <td><TextField /></td>
                        </tr>
                        <tr>
                            <td><Right>END TIME:</Right></td>
                            <td><TextField /></td>
                        </tr>
                        <tr>
                            <td><Right>LUNCH TIME:</Right></td>
                            <td><TextField /></td>
                        </tr>
                        <tr>
                            <td><Right>VOLUME #:</Right></td>
                            <td><TextField /></td>
                        </tr>
                        <tr>
                            <td><Right>TRIAL DATE:</Right></td>
                            <td><TextField /></td>
                        </tr>
                        <tr>
                            <td><Right>PARKING:</Right></td>
                            <td><TextField /></td>
                        </tr>
                        <tr>
                            <td><Right>OTHER:</Right></td>
                            <td><TextField /></td>
                        </tr>
                        <tr />
                    </tbody>
                </table>
            </td><td>

                <CheckedButtons items={['TELEPHONIC', 'VIDEOTAPED', 'INTERPRETED', 'EXPERT', 'MEDICAL', 'TECHNICAL', 'BUSINESS', 'PI', 'WORK COMP', 'ARB/HEARING', 'COURT', 'DAILY COPY']} />
            </td></tr></table>