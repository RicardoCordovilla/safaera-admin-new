import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import React, { useEffect, useState } from 'react'
import { Panel } from 'primereact/panel'
import HoursConfig from './components/HoursConfig'
import './configs.style.css'
import axios from 'axios'
import { API } from '../../utils/config'
import CalendarConfig from './components/CalendarConfig'
import ImagesConfig from './components/imagesconfig/ImagesConfig'
import Whats from './components/Whats'

const Configs = () => {

    const [configs, setConfigs] = useState([])
    const [wts, setWts] = useState('')
    const [enabledHours, setEnabledHours] = useState([])
    const [enabledDays, setEnabledDays] = useState([])
    const [enabledWeekdays, setEnabledWeekdays] = useState([])
    const [disabledDates, setDisabledDates] = useState([])
    const [enabledDates, setEnabledDates] = useState([])
    const [images, setImages] = useState([])
    const [confiId, setConfigId] = useState('')


    const getConfigs = () => {
        axios.get(API.configs.getConfigs.url)
            .then(res => {
                console.log(res.data[0])
                setConfigId(res.data[0]?.id)
                // console.log(res.data[0].data)
                setConfigs(res.data[0].data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const saveConfig = () => {
        // const noDisabledDays = [0, 1, 2, 3, 4, 5, 6].filter(day => !disabledDays.includes(day)) // get the days that are not disabled
        let data = {
            ...configs,
            horas: enabledHours,
            weekdays: enabledWeekdays,
            images: {
                form: images
            },
            wts: wts
        }
        console.log(data)
        axios.patch(API.configs.updateConfigs.url + confiId,
            {
                name: 'configs',
                data: data
            }
        )
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

    }

    useEffect(() => {
        getConfigs()
    }, [])

    useEffect(() => {
        if (configs) {
            console.log(configs)
            setWts(configs?.wts)
            setEnabledHours(configs?.horas)
            setEnabledDays(configs?.weekdays)
            // setDisabledDates(configs?.calendar.disable)
            // setEnabledDates(configs?.calendar.enable)
            setImages(configs?.images?.form)
            // console.log(configs?.images?.form)
        }
    }, [configs])


    return (
        <Card className='configCardBx'>
            <Button icon='pi pi-home'
                className='p-button-raised p-button-text homeBtn'
                onClick={() => window.location.href = '/'}
            />
            <span>Configuraciones</span>

            <div className="configsContainer">
                <Whats
                    wts={wts}
                    setWts={setWts}
                    saveConfig={saveConfig}
                />

                <HoursConfig
                    enabledHours={enabledHours}
                    setEnabledHours={setEnabledHours}
                    saveConfig={saveConfig}
                />
                <CalendarConfig
                    enabledDays={enabledDays}
                    setEnabledWeekdays={setEnabledWeekdays}
                    saveConfig={saveConfig}
                />
                {
                    images?.length > 0 &&
                    <ImagesConfig
                        images={images}
                        setImages={setImages}
                        saveConfig={saveConfig}
                    />
                }

            </div>
        </Card>
    )
}

export default Configs