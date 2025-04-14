import { Configuration, DefaultApi } from "../generated";
import { API_BASE } from "../api/config.ts";
import {v4 as uuidv4} from "uuid";

const getClientId = () => {
    let clientId = localStorage.getItem('clientId');
    if (!clientId) {
        clientId = uuidv4();
        localStorage.setItem('clientId', clientId);
    }
    return clientId;
};

const config = new Configuration({
    basePath: API_BASE,
    apiKey: async (name: string) => {
        if (name === 'X-Client-ID') {
            return getClientId();
        }
        return '';
    },
});

export const api = new DefaultApi(config);