import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';
import { HousingListService } from './housing-list.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fairhouse';
  selectedLocation: HousingLocation | undefined;

  constructor(private housingListService: HousingListService) { 
    this.housingListService.setHousingLocations();
   }

  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }
}
