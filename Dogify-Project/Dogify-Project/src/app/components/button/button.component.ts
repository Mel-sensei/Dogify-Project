import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'form-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
@Input() label: String;
  constructor() { }

  ngOnInit() {}

}
