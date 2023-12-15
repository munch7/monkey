import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

import { Category } from "./Category.model";

@Injectable({
  providedIn: 'root',
})

export class CategoriesService{
    categoriesChanged = new Subject<Category[]>();
  
    private Categories: Category[] = [ 
        new Category(
          'Electronics',
          'Indoor & Outdoor repairs, Portable devices repairs'
        ),
        new Category(
          'Plumbing',
          'Any and all plumbing services'
        ),
        new Category(
          'Deliveries / Errands',
          'Supermarket or Soko deliveries, Personal errands'
        ),
        new Category(
          'Decorating',
          'Paint work, Event set-up'
        ),
        new Category(
          'House / Pet sitting',
          'House sitting, Pet sitting'
        ),
        new Category(
          'Assembly / Mounting',
          'Installation of indoor or outdoor home appliances'
        ),
        new Category(
          'Moving',
          'Logistics of home appliances within or outside the premises'
        ),
        new Category(
          'Cleaning',
          'Laundry services, Household cleaning, compound cleaning'
        ),
        new Category(
          'Outdoor Help',
          'Landscaping, Gardening, Farmimg'
        ),
        new Category(
          'Home Repairs',
          'Roofing, Masonry repairs, Carpentry'
        ),
    ];

    getCategories() {
        return this.Categories.slice();
    }
    
    getCategory(index: number){
        return this.Categories[index];
  }
}