import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/common/interface/customer.model';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  customer: Customer = {
    fullName: null,
    email: null,
    message: null
  };

  constructor() { }

  ngOnInit(): void {
  }

}
