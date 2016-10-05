import { Component } from '@angular/core';
// Need to import skyscanner service

@Component({
    moduleId:module.id, // lets us use relative pathing for templateUrl
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent {

  searchQuery:string;

  searchCities() {
    console.log(this.searchQuery)
  }
}
