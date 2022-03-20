import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'



  export const fetchApi = async (url) => {
      const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '0c4901aa99msh829c803e24daa91p106d45jsnb18e5c5a071e'
          }
      });
      return data;
  }