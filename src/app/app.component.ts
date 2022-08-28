import { Component, OnInit } from '@angular/core';

import { Cadastro } from './models/models.module';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Projeto'
  formulario!: FormGroup ;

constructor (private formBuilder: FormBuilder) {

}

  ngOnInit() {
    this.createForm(new Cadastro());
  }

  createForm(cadastro: Cadastro) {
    this.formulario = this.formBuilder.group({
      model: [cadastro.model],
      dateNew: [cadastro.dateNew],
      dateEnd: [cadastro.dateEnd],
      hourPrice: [cadastro.hourPrice],
      dayPrice: [cadastro.dayPrice]
  })
  }
  get() {
    
  }

  onSubmit() {

    console.log(this.formulario.value);
    this.formulario.reset(new Cadastro());

  }
}
