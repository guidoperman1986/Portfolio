import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {
  productos:any[]=[];


  constructor(private http:Http) {
    this.cargar_productos();
  }

  public cargar_productos(){

        this.http.get('https://portafolio-19d72.firebaseio.com/productos_idx.json')
            .subscribe( res=>{
              console.log(res.json());
            });


  }

}
