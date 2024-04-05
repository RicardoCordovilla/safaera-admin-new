import { Button } from 'primereact/button'
import { Panel } from 'primereact/panel'
import React, { useEffect, useState } from 'react'

const HoursConfig = ({ enabledHours, setEnabledHours, saveConfig }) => {
    // console.log(enabledHours)

    const hours = [
        '05:00',
        '05:30',
        '06:00',
        '06:30',
        '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',

    ]

    const [selectedHours, setSelectedHours] = useState(enabledHours)

    const onCkeckChange = (e) => {
        if (e.target.checked) {
            setSelectedHours([...selectedHours, e.target.value])
        } else {
            setSelectedHours(selectedHours.filter(hour => hour !== e.target.value))
        }
    }

    const sortHours = (a, b) => {
        let hourA = a.split(':')
        let hourB = b.split(':')
        if (hourA[0] === '00') {
            hourA[0] = '24'
        }
        if (hourB[0] === '00') {
            hourB[0] = '24'
        }
        return hourA[0] - hourB[0]
    }

    useEffect(() => {
        setEnabledHours(selectedHours?.sort(sortHours))
    }, [selectedHours])

    useEffect(() => {
        setSelectedHours(enabledHours)
    }, [enabledHours])


    return (
        <Panel header='Horas habilitadas'>
            <div className="hoursContainer">
                {
                    hours.map(hour => {
                        return (
                            <span key={hour} className='checkBx'
                                style={selectedHours?.includes(hour) ? { backgroundColor: 'rgba(200,200,200,0.4)' } : { backgroundColor: '' }}
                            >
                                <input type='checkbox' id={hour} name={hour}
                                    value={hour}
                                    onChange={onCkeckChange}
                                    checked={selectedHours?.includes(hour)}
                                />
                                <label htmlFor={hour}>{hour}</label>
                            </span>
                        )
                    })
                }
            </div>

            <Button label='Guardar' className=''
                icon='pi pi-save'
                onClick={saveConfig}
            />
        </Panel>

    )
}

export default HoursConfig