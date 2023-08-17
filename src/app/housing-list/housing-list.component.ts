import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HousingLocation } from '../housing-location';
import { HousingListService } from '../housing-list.service';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {
  results:HousingLocation[] = [];
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();
  searchText: string = "";

  constructor(
    private housingListService: HousingListService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.results = this.housingListService.getHousingLocations();
  }

  searchHousingLocations(searchText: string) {
    this.results = this.housingListService.searchHousesByCity(searchText);
  }

  selectHousingLocation(location: HousingLocation) {
    this.selectedLocationEvent.emit(location);
  }

  viewHousingDetails(location: HousingLocation) {
    this.router.navigate(['/housing', location.id]);
  }
}
