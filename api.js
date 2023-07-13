const axios = require("axios");

/*
axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
  console.log(response.data);
});
*/
const fetchApi = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/4"
    );
    console.log(data);
  } catch (error) {
    console.log({ error });
  }
};

fetchApi();
