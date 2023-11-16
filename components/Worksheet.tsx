import React from "react";
import { SectionAppearance } from "./SectionAppearance";
import { SectionExhibit } from "./SectionExhibit";
import { SectionHeader } from "./SectionHeader"
import { SectionInformation } from "./SectionInformation";

export const Worksheet = () => {
    return <table style={{ width: '100%' }}>
        <tbody>
            <SectionHeader />
            <SectionInformation />
            <SectionExhibit />
            <SectionAppearance />
        </tbody>
    </table>
}