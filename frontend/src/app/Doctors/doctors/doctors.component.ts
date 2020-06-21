import { DoctoresService } from './../../service/doctores.service';
import { Doctor } from './../../Models/doctor';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  list : Doctor[];

  constructor(private DoctoresService : DoctoresService) { }

  ngOnInit(): void {
    this.DoctoresService.getAllDoctor()

    .subscribe(Doctor => this.list = Doctor);
  }

}
