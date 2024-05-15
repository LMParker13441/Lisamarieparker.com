import React from "react";
import { TextField } from "./TextField";

const flexStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row'
}

export const Cert = () => {
    return <div style={{
        ...flexStyle,
        fontFamily: '"Courier New", Courier, Consolas',
        fontSize: 15,
        lineHeight: 1
    }} >
        <div style={{ textAlign: 'right', padding: '1rem', lineHeight: 2 }}>
            {[...Array(28)].map((v, i) => <div key={i}>{i + 1}</div>)}
        </div>
        <div style={{ border: '2px black solid', padding: '1rem', marginBlock: '-2px' }}>
            <div style={{ lineHeight: 2 }}>
                <div style={{ textAlign: 'center' }}>
                    <div>SUPERIOR COURT OF THE STATE OF CALIFORNIA</div>
                    <div>FOR THE COUNTY OF LOS ANGELES</div>
                    <div style={{ lineHeight: 1 }}>&nbsp;</div>
                    <div style={flexStyle} >
                        <div style={{ flexGrow: 1 }}>DEPARTMENT <TextField forceUpper={true} /></div>
                        <div style={{ flexGrow: 1 }}>HON. <TextField forceUpper={true} /></div>
                    </div>
                    <div style={{ lineHeight: 1 }}>&nbsp;</div>
                </div>
            </div>
            <div style={{ lineHeight: .5 }} >&nbsp;</div>
            <div style={flexStyle} >
                <div style={{
                    flex: 1,
                    borderRight: '1px black solid',
                    borderBottom: '1px black solid',
                }}>
                    <div><TextField forceUpper={true} /></div>
                    <div style={{ lineHeight: 1 }} >&nbsp;</div>
                </div>
                <div style={{ flex: 1, paddingLeft: '1rem', display: 'flex', alignItems: 'center' }}>CASE NO. <TextField forceUpper={true} /></div>
            </div>
            <div style={{ lineHeight: 2.5 }} >&nbsp;</div>
            <div style={{ lineHeight: 2 }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                I, LISA MARIE PARKER, CSR 13441, RPR, CLR,
                OFFICIAL REPORTER PRO TEMPORE OF THE SUPERIOR COURT OF
                THE STATE OF CALIFORNIA, FOR THE COUNTY OF LOS ANGELES,
                DO HEREBY CERTIFY THAT I DID CORRECTLY REPORT THE
                PROCEEDINGS CONTAINED HEREIN AND THAT THE FOREGOING
                PAGES, PAGE <TextField /> THROUGH PAGE <TextField />, COMPRISE A TRUE AND
                CORRECT TRANSCRIPT OF THE PROCEEDINGS TAKEN IN THE
                MATTER OF THE ABOVE-ENTITLED CAUSE ON <TextField forceUpper={true} />
            </div>
            <div style={{ lineHeight: 2 }}>&nbsp;</div>
            <div style={flexStyle} >
                <div style={{ flexGrow: 1 }}></div>
                <div>
                    <div>DATED THIS <TextField forceUpper={true} /> DAY OF <TextField forceUpper={true} />, <TextField /></div>
                    <div><img src="/sig.png" style={{ width: 305 }} alt="LMP signature" /></div>
                    <div>LISA MARIE PARKER, CSR 13441</div>
                </div>
            </div>
        </div>
    </div >

}