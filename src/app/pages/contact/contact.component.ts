import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { CommonModule,NgClass } from '@angular/common';

//creamos el componente contact
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,NgClass],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // Corregido a styleUrls
})

export class ContactComponent implements OnInit {

  //creamos la variable contactForm para poder utilizar el formulario reactivo
  contactForm!: FormGroup;

  //hacemos la incorporación de ReactiveFormsModule para poder utilizar los formularios reactivos
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Inicializamos el formulario en ngOnInit
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], // Corrección en los validadores
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

hasErrors(field:string,typeError:string){
  return this
}

  //creamos el método enviar para poder enviar el formulario
  enviar(event: Event) {
    //evitamos que se recargue la página al enviar el formulario
    event.preventDefault();
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      console.log("Formulario no válido");
    }
  }


}
