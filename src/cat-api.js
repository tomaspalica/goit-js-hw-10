import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_G9FX9sbB8zLBZkWaWRv5bUzcXbwrSosEEWTL4iIasUttjgo8dqJz6pjhjQKhuVqA";
function fetchBreeds() {
    return fetch("https://api.thecatapi.com/v1/breeds").then(
      (response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
      
        return response.json();
       
      }
    );
  }
  

function fetchCatByBreed(breedId) {
    const url = `https://api.thecatapi.com/v1/images/${breedId}`;
    
  

    return fetch(url)
      .then(response => {
        
        if (!response.ok) {
          throw new Error('Request failed');
        }
       
        return response.json();
      })
      .then(data => {
        if (data.length === 0) {
          throw new Error('No cat data available');
        }
        
        return data;
      });
  }


  export {fetchBreeds, fetchCatByBreed}