import { Card } from 'primereact/card'
import { Image } from 'primereact/image'
import { InputText } from 'primereact/inputtext'
import React, { useEffect, useState } from 'react'

const ImageField = ({ image, setImages }) => {
    console.log(image)
    const [imageUrl, setImageUrl] = useState('')
    const [newImage, setNewImage] = useState(image)

    const formatImageUrl = (url) => {
        // extract de id from the url
        const id = url.split("/")[5]
        const newUrl = `https://lh3.googleusercontent.com/d/${id}`
        return newUrl
    }

    useEffect(() => {
        setImageUrl(formatImageUrl(newImage))
        setImages((prevImages) => {
            return prevImages.map((prevImage) => {
                if (prevImage === image) {
                    return newImage
                }
                return prevImage
            })
        })
    }, [image, newImage])

    return (
        <Card
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '300px',
                height: '300px',
                border: '1px solid black'
            }}
        >
            {/* <Image src={imageUrl} alt="Image" height='200' /> */}
            <img src={imageUrl} alt=""
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <InputText placeholder='URL de la imagen'
                style={{ width: '100%', marginTop: '10px' }}
                value={newImage}
                onChange={(e) => setNewImage(e.target.value)}
            />
        </Card>
    )
}

export default ImageField