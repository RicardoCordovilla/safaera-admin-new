export const API_URL = 'https://safaera-api-production.up.railway.app/api/v1/'
export const safaera = 'jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU1ZTJiNTE5LWYxMmQtNDQ5NC1hMWYwLTNmMTdkYTVlMjM4ZCIsImVtYWlsIjoicmljYXJkbzJAc2FmYWVyYS5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzAzMTM2Njd9.eN0bP8euD5Y9XWvRAvCc72TDFts2HD1NbDK6bkOTM3M'

export const API = {
    configs: {
        getConfigs: {
            method: "GET",
            url: API_URL + "configs"
        },
        updateConfigs: {
            method: "PATCH",
            url: API_URL + "configs/"
        }
    },
    reservas: {
        createReserva: {
            method: "POST",
            url: API_URL + "reservas"
        },
        getReservas: {
            method: "GET",
            url: API_URL + "reservas?fecha=",
            headers: {
                Authorization: safaera
            }
        },
    }
}
