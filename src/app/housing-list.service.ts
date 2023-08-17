import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingListService {
  private locationList: HousingLocation[] = [];

  constructor() { }

  getHousingLocations(): HousingLocation[] {
    return this.locationList;
  }

  getHousingLocationById(id: string): HousingLocation | undefined {
    return this.locationList.find(location => location.id === parseInt(id));
  }

  searchHousesByCity(searchText: string): HousingLocation[] {
    if (!searchText) {
      return this.locationList; // Return the entire list when no search text is provided
    }

    return this.locationList.filter(location =>
      location.city.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  setHousingLocations() {
    this.locationList = [
      {
        id: 0,
        name: "Acme Fresh Start Housing",
        city: "Chicago",
        state: "IL",
        photo: "../assets/housing-1.jpg",
        availableUnits: 4,
        wifi: true,
        laundry: true,
      },
      {
        id: 1,
        name: "A113 Transitional Housing",
        city: "Santa Monica",
        state: "CA",
        photo: "../assets/housing-2.jpg",
        availableUnits: 0,
        wifi: false,
        laundry: true,
      },
      {
        id: 2,
        name: "Warm Beds Housing Support",
        city: "Juneau",
        state: "AK",
        photo: "../assets/housing-3.jpg",
        availableUnits: 1,
        wifi: false,
        laundry: false,
      }
    ];
  }
}
