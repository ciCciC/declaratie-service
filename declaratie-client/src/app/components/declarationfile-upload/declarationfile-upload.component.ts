import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-declarationfile-upload',
  templateUrl: './declarationfile-upload.component.html',
  styleUrls: ['./declarationfile-upload.component.css']
})
export class DeclarationfileUploadComponent implements OnInit {

  declarationFiles: File[];
  private allPhotoExtentions = 'image/*';
  acceptTypes = 'image/jpeg,image/jpg,image/png,application/pdf';
  private allowedTypes = ['jpg', 'jpeg', 'png', 'pdf'];

  constructor() { }

  ngOnInit() {

  }
}
