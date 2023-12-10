import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent{
@Output() clientRegistered = new EventEmitter<any>();
 formulario: FormGroup;

constructor(private formBuilder: FormBuilder) {
  this.formulario = this.formBuilder.group({
    nombre: '',
    cif: '',
    direccion: '',
    grupo: '',
  });
}
 onSubmit(){
  if (this.formulario.valid) {
    const formData = this.formulario.value;
    this.clientRegistered.emit(formData);
    this.formulario.reset();
  }
}
}