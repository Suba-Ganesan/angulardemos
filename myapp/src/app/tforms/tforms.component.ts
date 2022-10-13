import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tforms',
  templateUrl: './tforms.component.html',
  styleUrls: ['./tforms.component.css'],
})
export class TformsComponent implements OnInit {
  genders = ['male', 'female'];
  defaultQuestion = 'default';
  name ='';
  formsubmitted = false;
  user = {
    username: '',
    email: '',
    secret: '',
    gender: '',
  };
  constructor() {}

  ngOnInit(): void {}

  onSubmit(formObj: NgForm) {
    // this.user.username = formObj.value.username;
    this.user.username=this.name;
    this.user.email = formObj.value.email;
    this.user.secret = formObj.value.secret;
    this.user.gender = formObj.value.gender;
    this.formsubmitted = true;
    formObj.reset();
  }
}