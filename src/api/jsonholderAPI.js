import axios from "axios";

export const jsonAPI = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com"
});	