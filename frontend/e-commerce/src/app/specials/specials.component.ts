import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service'

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css']
})
export class SpecialsComponent implements OnInit {
 
  specialEvents = []
  constructor(private _specialService:EventService) { }

  ngOnInit() {
    this._specialService.getSpecial()
      .subscribe(
        res => this.specialEvents = res,
        err => console.log(err)
      )
  }
}
