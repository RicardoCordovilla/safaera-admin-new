import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from 'react'
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

import './home.style.css'
import axios from 'axios';
import { API } from '../../utils/config';
import { format } from '@formkit/tempo';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfDoc from '../../components/PdfDoc';




const Home = () => {

  const [date, setDate] = useState(new Date())
  const [reservas, setReservas] = useState([])
  const [filteredReservas, setFilteredReservas] = useState([])

  const [totalPersonas, setTotalPersonas] = useState(0)
  const [totalCumple, setTotalCumple] = useState(0)

  const cumpleTemplate = (rowData) => {
    return (
      <span>
        {rowData.cumple ? '🎉' : ''}
      </span>
    )
  }

  const getReservas = (date) => {
    console.log(API.reservas.getReservas)
    axios.request({
      ...API.reservas.getReservas,
      params: {
        fecha: date
      },
      headers: API.reservas.getReservas.headers
    })
      .then(res => {
        console.log(res)
        const response = res.data.map(reserva => {
          return {
            ...reserva,
            cedula: reserva.cedula.length > 50 ? jwtDecode(reserva.cedula).cel : reserva.cedula,
            celular: reserva.celular.length > 50 ? jwtDecode(reserva.celular).cel : reserva.celular,
          }
        }
        )
        setReservas(response)
        setFilteredReservas(response)
      })
      .catch(err => {
        console.log(err)
      })
  }


  const filterReservas = (e) => {
    // I need to implement a search function here that filters the reservations by nombre or cedula
    let filtered = []
    let query = e.target.value
    console.log(query)
    console.log(reservas)
    if (query) {
      filtered = reservas.filter(reserva => {
        return reserva.nombre.toLowerCase().includes(query.toLowerCase()) || reserva.cedula.includes(query) || reserva.celular.includes(query)
      })
    } else {
      filtered = reservas
    }
    setFilteredReservas(filtered)

  }


  useEffect(() => {
    getReservas(format(date, "YYYY-MM-DD", 'es'))
  }, [])

  useEffect(() => {
    let total = 0
    reservas.forEach(reserva => {
      total += reserva.personas
    })
    let totalCumple = 0
    reservas.forEach(reserva => {
      if (reserva.cumple) {
        totalCumple++
      }
    })
    setTotalPersonas(total)
    setTotalCumple(totalCumple)
  }, [reservas])

  return (
    <div className=''>
      <Card>
        <Card className='homeHeader'>
          {/* add a config buton here */}
          <Button icon="pi pi-cog"
            className="p-button-raised p-button-text configButton"
            onClick={() => window.location.href = '#/config'}
          />
          <div className='toolBar'>
            <Calendar id="basic"
              // locale='es'
              dateFormat='D, d MM'
              value={date}
              showButtonBar={true}
              showIcon={true}
              className='headerField'
              onChange={(e) => {
                setDate(e.value)
                getReservas(format(e.value, "YYYY-MM-DD", 'es'))
              }
              }
            />
            <InputText placeholder="Nombre, CI o 📳" className='headerField'
              onChange={filterReservas}
            />
            {/* create an icobutton that allows to download a pdf with this data */}

            <div className='headerField'>
              <PDFDownloadLink document={<PdfDoc reservas={reservas} date={date} />} fileName={`reservas_${format(date, 'DD-MM-YYYY')}.pdf`} >
                {({ blob, url, loading, error }) => (loading ?
                  'Loading document...' : <Button label='Descargar PDF' className='p-button-raised p-button-text'
                    icon="pi pi-download"
                  />
                )}
              </PDFDownloadLink>
            </div>
          </div>

        </Card>
        <Card className='homeBody'>
          <DataTable value={filteredReservas} className='homeTable'
            stripedRows size='small'
          >
            <Column field="cedula" header="CÉDULA" />
            <Column field="nombre" header="NOMBRE" />
            <Column field="personas" header={`TOTAL: ${totalPersonas} 🙋‍♂️`} />
            <Column field="cumple" header={`🎉: ${totalCumple} `} body={cumpleTemplate} sortable />
            <Column field="notes" header="OBSERVACIONES" />
            <Column field="hora" header="⏲" sortable />
            <Column field="celular" header="CELULAR" />
          </DataTable>

        </Card>

      </Card>


    </div>
  )
}

export default Home