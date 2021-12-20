import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-change-phone-number',
  templateUrl: './change-phone-number.page.html',
  styleUrls: ['./change-phone-number.page.scss'],
})
export class ChangePhoneNumberPage implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
