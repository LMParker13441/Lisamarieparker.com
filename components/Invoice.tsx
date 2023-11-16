import React from "react";
import { TextField } from "./TextField";
import { Items } from "./Items";
import { InvoiceQuickFill } from "./InvoiceQuickFill";

export const Invoice = () => {
    return <>
        <img src="/logo.png" style={{ width: 225 }} />
        <br />
        <br />
        <div style={{ display: 'flex' }}>
            <div style={{ width: '100%' }}>
                <div style={{ fontSize: 20, fontWeight: 'bold' }}>LMP Reporting, LLC</div>
                <div>Lisa Marie Parker, RPR, CLR, California CSR No. 13441</div>
                <div>EIN: 83-3224285</div>
            </div>
            <div style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'right' }}>INVOICE</div>
        </div>
        <br />
        <br />
        <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
            <div>
                <div>4413 Mentone Ave</div>
                <div>Culver City, CA 90232</div>
            </div>
            <div style={{ textAlign: "right", width: '100%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                    <div>Invoice #:</div>
                    <div>Invoice Date:</div>
                    <div>Due Date:</div>
                </div>
                <div style={{ textAlign: 'left' }}>
                    <div><TextField /></div>
                    <div><TextField /></div>
                    <div><TextField /></div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <div style={{ fontWeight: 'bold' }}>TO:</div>
        <InvoiceQuickFill />
        <br />
        <br />
        <Items />
        <br />
        <br />
        <div>Make all checks payable to LMP Reporting, LLC</div>
        <div>If you have any qestions concerning this invoice, contact Lisa Marie Parker at LMP@LisaMarieParker.com</div>
        <br />
        <br />
        <div style={{ fontWeight: 'bold', textAlign: 'center' }}>THANK YOU FOR YOUR BUSINESS!</div>
    </>
}