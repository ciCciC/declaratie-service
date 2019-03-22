import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {textInputValidator} from '../validators/textInputValidator';
import {Location} from '@angular/common';

@Component({
  selector: 'app-declaration-view',
  templateUrl: './declaration-view.component.html',
  styleUrls: ['./declaration-view.component.css']
})
export class DeclarationViewComponent implements OnInit {
  createForm: FormGroup;

  constructor(private fb: FormBuilder, private location: Location) {
    this.createForm = this.fb.group({
      description: new FormControl('', [
        Validators.required,
        textInputValidator
      ])
    });
  }

  close() {
    alert('pressed close');
    this.location.back();
  }

  toDelete() {
    alert('pressed delete');
  }

  toEdit() {
    alert('pressed edit');
  }

  ngOnInit() {
  }

}
