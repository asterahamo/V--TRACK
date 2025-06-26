import axios from "axios";

export const request = axios.create({
    baseURL: "http://stolenvehicles.boulevard.solutions/api/v1",
    /* Put the domain of backend */
});
  