import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/todos";

export const getDomain = (id: string) =>
  axios
    .get(`${baseUrl}/${id}`)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
