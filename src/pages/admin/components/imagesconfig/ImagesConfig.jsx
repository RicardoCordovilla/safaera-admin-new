import { Panel } from 'primereact/panel'
import React, { useEffect, useState } from 'react'
import ImageField from './components/ImageField'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'

const ImagesConfig = ({ images, setImages, saveConfig }) => {
    // console.log(images)

    const addImage = () => {
        setImages([...images, ''])
    }



    return (

        <Panel header='Configuración de Imágenes'>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem'
                }}
            >
                {images &&
                    images?.map((image, index) => {
                        return <ImageField key={index} image={image} setImages={setImages} />
                    })
                }
                <Button className=''
                    icon='pi pi-plus'
                    onClick={addImage}
                />
            </div>

            <br />
            <Button label='Guardar' className=''
                icon='pi pi-save'
                onClick={saveConfig}
            />
        </Panel>
    )
}

export default ImagesConfig