import axios from "axios";

export default class PhotosStorageService {
  constructor() { }
  
  
  BASE_URL = "https://senaigram.herokuapp.com";
  
  

  getList(link) {
    return axios
      .get(`${this.BASE_URL}${link}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}