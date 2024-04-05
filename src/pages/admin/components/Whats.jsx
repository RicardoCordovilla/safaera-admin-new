import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { Panel } from 'primereact/panel'
import React from 'react'

const Whats = ({ wts, setWts, saveConfig }) => {

    return (
        <Panel header='Whatsapp'>
            <div className="hoursContainer">

                <InputText placeholder=" # WhatsApp"
                    className='p-inputtext-lg p-d-block p-mb-2'
                    value={wts}
                    onChange={(e) => setWts(e.target.value)}
                />
                <Button label='Guardar' className=''
                    icon='pi pi-save'
                    onClick={saveConfig}
                />
            </div>
        </Panel>
    )
}

export default Whats