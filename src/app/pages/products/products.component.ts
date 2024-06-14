// Creamos el componente ProductsComponent para mostrar la lista de productos
import {Component, inject, OnInit} from '@angular/core';
import { ApiService } from '../../service/api.service';
import {IProduct} from "../../models/product.models";
import {Router} from "@angular/router";

//creamos el componente ProductsComponent
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

//creamos la clase ProductsComponent
export class ProductsComponent implements OnInit {


  //creamos la variable array para ser rellenada con la lista de productos
  productList: IProduct[] = [];

  //creamos una variable privada _apiService para poder utilizar los metodos del servicio ApiService
  private _apiService = inject(ApiService);

  private _router = inject(Router);

  //para que se ejecute el metodo getProducts() al cargar la pagina utilizamos ngOnInit
  ngOnInit(): void {
    //llamamos al metodo getProducts() del servicio ApiService y nos suscribimos a el para obtener la lista de productos y rellenar la variable productList
    this._apiService.getProducts().subscribe((data: IProduct[]) => {
        this.productList = data;
      }
    );
  }

  navegate(id: number): void {
    this._router.navigate(['/products', id]);
  }
}
