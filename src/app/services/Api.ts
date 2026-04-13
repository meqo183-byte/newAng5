import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http : HttpClient){
   
  }
    // http client  

    baseUrl = "https://restaurant.stepprojects.ge/api/"

    getAll(url : string){
     return this.http.get(this.baseUrl + url)   // https://restaurant.stepprojects.ge/api/Products/GetAll

    }


   baseUrl2 = "https://restaurantapi.stepacademy.ge/api/"
    getAll2(url : string){
      return this.http.get(this.baseUrl2 + url,{
        headers : {
         "X-API-KEY" : "13445cac-89ab-4de7-b747-c42f42e2a9d1",
      }})
    }

  // https://restaurantapi.stepacademy.ge/api/products



    postObj(url : string, obj : any){
     return this.http.post(this.baseUrl + url, obj)   // https://restaurant.stepprojects.ge/api/Products/GetAll

    }
    updateObj(url : string, obj : any){
     return this.http.put(this.baseUrl + url, obj) 

    }

    deelteById(url : string){
      return  this.http.delete(this.baseUrl + url)
    }
}
