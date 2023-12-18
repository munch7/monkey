import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

import { Category } from './shared/Category.model';
import { CategoriesService } from './shared/Categories.services';
import { TaskersServices } from './shared/Taskers.services';
import { Tasker } from './shared/Tasker.model';
import { request } from './shared/request.model';
import { RequestsServices } from './shared/requests.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  @ViewChild('f', { static: false })
  slForm!: NgForm;
  subscription!: Subscription;
  Categories!: Category[];
  Taskers!: Tasker[];
  editMode = false;
  editedItemIndex!: number;
  editedItem!: request;
  showElement = false;

  toggleElement(): void {
    this.showElement = !this.showElement;
  }
  
  constructor(
    private modalService: NgbModal, 
    private catserv: CategoriesService, 
    private task: TaskersServices,
    private req: RequestsServices
    ) {
  }

  ngOnInit(){
    this.Categories = this.catserv.getCategories();
    this.Taskers = this.task.getTaskers();
    this.subscription = this.req.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.req.getRequest(index);
          this.slForm.setValue({
            categoryName: this.editedItem.categoryName,
            description: this.editedItem.description,
            location: this.editedItem.location,
            date: this.editedItem.date,
            name: this.editedItem.name,
            contact: this.editedItem.contact
          })
        }
      );
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  onSubmit(f: NgForm) {
    const value = f.value;
    const newRequest = new request(value.categoryName, value.description, value.location, value.date, value.name, value.contact);
    if (this.editMode) {
      this.req.updateRequest(this.editedItemIndex, newRequest);
    } else {
      this.req.addRequest(newRequest);
    }
    this.editMode = false;
    f.reset();
    console.log("posted");
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

}
