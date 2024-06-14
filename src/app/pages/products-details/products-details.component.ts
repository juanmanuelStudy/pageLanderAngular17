import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../service/api.service";
import {IProduct} from "../../models/product.models";

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit{

  //creamos la variable product para ser rellenada con el producto seleccionado
  loading :boolean = true;

  //creamos una variable privada _route para poder obtener el id del producto seleccionado
  private _route=inject(ActivatedRoute);

  //creamos una variable privada _apiService para poder utilizar los metodos del servicio ApiService
  private _apiService = inject(ApiService);

  //creamos la variable product para ser rellenada con el producto seleccionado
  public product?: IProduct;

  //para que se ejecute el metodo getProduct() al cargar la pagina utilizamos ngOnInit
  ngOnInit(): void {
  //obtenemos el id del producto seleccionado y llamamos al metodo getProduct()
    // del servicio ApiService y nos suscribimos a el para obtener el producto seleccionado y rellenar la variable product
    this._route.params.subscribe(params => {
      this._apiService.getProduct(params['id']).subscribe((data) => {
        this.product = data;
        this.loading = false;
      });
    })
  }
}
