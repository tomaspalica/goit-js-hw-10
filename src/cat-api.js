import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_G9FX9sbB8zLBZkWaWRv5bUzcXbwrSosEEWTL4iIasUttjgo8dqJz6pjhjQKhuVqA";
const BASE_URL = "https://api.thecatapi.com/v1"


function fetchBreeds() {
    return axios.get(`${BASE_URL}/breeds`).then(
      (response) => {
       
       return response.data
      }
    );
  }
  

function fetchCatByBreed(breedId) {
    const url = `${BASE_URL}/images/${breedId}`;
    
  

    return axios.get(url)
      .then(response => {
        
       return response.data
      })
   
  }


  export {fetchBreeds, fetchCatByBreed}