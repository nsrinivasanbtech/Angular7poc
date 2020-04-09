import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  registerForm: FormGroup;

  constructor( private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
   this.registerForm = this.formbuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required,  Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  onSubmit() {
    console.log('value', this.registerForm.value);
  }
  get firstname() {return this.registerForm.get('firstname'); }
  get email() {return this.registerForm.get('email'); }
  get password() {return this.registerForm.get('password'); }
}
