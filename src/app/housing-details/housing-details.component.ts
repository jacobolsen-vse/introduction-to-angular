import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HousingListService } from '../housing-list.service';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-details',
  templateUrl: './housing-details.component.html',
  styleUrls: ['./housing-details.component.css']
})
export class HousingDetailsComponent implements OnInit {
  location: HousingLocation | undefined;

  constructor(
    private route: ActivatedRoute,
    private locationService: Location,
    private housingListService: HousingListService,
  ) { }

  ngOnInit(): void {
    // Retrieve the id parameter from the route
    const id = this.route.snapshot.paramMap.get('id');

    // Fetch the housing location data based on the id
    if (id) {
      this.location = this.housingListService.getHousingLocationById(id);
    }
  }

  goBack() {
    this.locationService.back();
  }
}
