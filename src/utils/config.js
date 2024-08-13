export const API_URL = 'https://safaera-api-production.up.railway.app/api/v1/'
export const safaera = 'jwt '+  process.env.SAFAERA_TOKEN

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