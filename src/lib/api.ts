import { Configuration, DefaultApi } from "../generated";
import { API_BASE } from "../api/config.ts";

const config = new Configuration({
    basePath: API_BASE,
});

export const api = new DefaultApi(config);