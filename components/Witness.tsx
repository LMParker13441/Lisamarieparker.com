import { RadioButtons } from "./RadioButtons";
import { TextField } from "./TextField";

export const Witness = (props: { number: number, remove: () => void }) =>
    <tr>
        <td>
            <div style={{ display: 'flex', flexFlow: 'row' }}>
                <div>{`WITNESS #${props.number} NAME & ADDRESS:`}</div>
                <div style={{ flexGrow: 1 }} />
                <div style={{ justifyContent: 'right' }}><RadioButtons items={['SIGNATURE WAIVED']} /></div>
            </div>

            <div><TextField /></div>
            <div style={{ display: 'flex', flexFlow: 'row' }}>
                <div>REPRESENTED BY:</div>
                <div><TextField /></div>
            </div>
            <div className='no-print'>
                <button onClick={props.remove}>Remove Witness #{props.number}</button>
            </div>
        </td>
    </tr>