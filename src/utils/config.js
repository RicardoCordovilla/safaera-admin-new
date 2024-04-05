// export const API_URL = "http://localhost:9000/api/v1/"
export const API_URL = "https://safaera-api-production.up.railway.app/api/v1/"

export const safaera = 'jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJiYWVlZWQ0LWI4YmQtNDJhZS05OWJmLWI4MDFhOWQ5Yzk1MCIsImVtYWlsIjoicmljYXJkbzFAc2FmYWVyYS5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzM5MTg1NTl9.01CTjN5YezqlWdWTIUejYrnubmpmaIk1s3zQjSBQfAw'

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
            url: API_URL + "reservas?fecha="
        },
    }
}