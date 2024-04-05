import { Button } from 'primereact/button'
import { Panel } from 'primereact/panel'
import React, { useEffect, useState } from 'react'

const CalendarConfig = ({ enabledDays, setEnabledWeekdays, saveConfig }) => {

  // console.log(disabledDays)


  const [selectedDays, setSelectedDays] = useState(enabledDays)
  // console.log(selectedDays)

  const weekdays = [
    { label: 'Domingo', value: 0 },
    { label: 'Lunes', value: 1 },
    { label: 'Martes', value: 2 },
    { label: 'Miércoles', value: 3 },
    { label: 'Jueves', value: 4 },
    { label: 'Viernes', value: 5 },
    { label: 'Sábado', value: 6 }
  ]

  const onCkeckChange = (e) => {
    if (e.target.checked) {
      // console.log(e.target.value)
      setSelectedDays([...selectedDays, +e.target.value])
    } else {
      // console.log(e.target.value)
      setSelectedDays(selectedDays.filter(day => day !== +e.target.value))
    }
    // console.log(selectedDays)
  }

  useEffect(() => {
    setSelectedDays(enabledDays)
  }, [enabledDays])

  useEffect(() => {
    console.log(selectedDays)
    setEnabledWeekdays(selectedDays)
  }, [selectedDays])


  return (
    <Panel header='Configuración de Calendario'>
      <div className='hoursContainer'>
        {
          weekdays.map(day => {
            return (
              <span key={day.label} className='checkBx'
                style={selectedDays?.includes(day.value) ? { backgroundColor: 'rgba(200,200,200,0.4)' } : { backgroundColor: '' }}
              >
                <label>
                  <input type='checkbox'
                    value={day.value}
                    onChange={onCkeckChange}
                    checked={selectedDays?.includes(day.value) }
                  />
                  {day.label}
                </label>
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

export default CalendarConfig