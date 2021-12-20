import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {

  constructor(private fb: FormBuilder) { }

  get email() {
    return this.profileForm.get('email');
  }

  profileForm = this.fb.group({
    email: [
      '', 
    [ 
      Validators.required, 
      Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]
    ],
  });

  public errorMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
  };

  ngOnInit() {
  }


  onSubmit(){
    console.log(this.profileForm.value)
  }
}
