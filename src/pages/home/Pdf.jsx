import React, { useEffect, useState } from 'react'
import MyDocument from '../../components/MyDocument'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PdfDoc from '../../components/PdfDoc'
import axios from 'axios'
import { API, safaera } from '../../utils/config'
const Pdf = () => {

    const [reservas, setReservas] = useState([])
    const [date, setDate] = useState()
    useEffect(() => {
        axios.request({
            ...API.reservas.getReservas,
            params: {
                fecha: '2024-04-05'
            },
            headers: {
                'Authorization': safaera
            }
        })
            .then(res => {
                console.log(res.data)
                setReservas(res.data)
                setDate(res.data[0]?.fecha)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div>
            <h1>PDF</h1>
            <PDFDownloadLink document={<PdfDoc reservas={reservas} date={date} />} fileName={`reservas-${date}.pdf`} >
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
            {/* <MyDocument /> */}
        </div>
    )
}

export default Pdf