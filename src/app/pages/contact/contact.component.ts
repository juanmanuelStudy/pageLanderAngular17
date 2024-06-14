import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { CommonModule,NgClass } from '@angular/common';

//creamos el componente contact
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,NgClass],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  //creamos la variable contactForm para poder utilizar el formulario reactivo
  contactForm!: FormGroup;

  //hacemos la incorporación de ReactiveFormsModule para poder utilizar los formularios reactivos
  constructor(private formBuilder: FormBuilder) {
    // Inicializamos el formulario en ngOnInit
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], // Corrección en los validadores
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {

  }

  //creamos el método enviar para poder enviar el formulario
  enviar(event: Event) {
    event.preventDefault();
    console.log(this.contactForm.value);
  }


hasErrors(field:string,typeError:string){
  return this.contactForm.get(field)?.hasError(typeError)&&this.contactForm.get(field)?.touched;
}


}
