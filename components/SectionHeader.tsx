import React from "react"
import { Right } from "./Right"
import { TextField } from "./TextField"

export const SectionHeader = () =>
    <tr>
        <td colSpan={2}>
            <table>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <h3>REPORTER JOB WORKSHEET</h3>
                        </td>
                    </tr>
                    <tr>
                        <td><Right>Firm:</Right></td>
                        <td style={{ width: '100%' }}><TextField /></td>
                    </tr>
                    <tr>
                        <td><Right>Job #:</Right></td>
                        <td><TextField /></td>
                    </tr>
                </tbody>
            </table>
        </td>
        <td colSpan={2}>
            <table>
                <tbody>
                    <tr>
                        <td><Right>Reporter:</Right></td>
                        <td style={{ width: '100%' }}>LMP Reporting, LLC</td>
                    </tr>
                    <tr>
                        <td><Right>Email:</Right></td>
                        <td>lmp@lisamarieparker.com</td>
                    </tr>
                    <tr>
                        <td><Right>Phone:</Right></td>
                        <td>805-796-7139</td>
                    </tr>
                    <tr></tr>
                </tbody>
            </table>
        </td>
    </tr>
