import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { HttpClient } from "@angular/common/http";

import { Category } from './shared/Category.model';
import { CategoriesService } from './shared/Categories.services';
import { TaskersServices } from './shared/Taskers.services';
import { Tasker } from './shared/Tasker.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  Categories!: Category[];
  Taskers!: Tasker[];
  
  constructor(private modalService: NgbModal, private catserv: CategoriesService, private task: TaskersServices) {
  }

  ngOnInit(){
    this.Categories = this.catserv.getCategories();
    this.Taskers = this.task.getTaskers();
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  onSubmit(){}

  // onClick(formData: any): void {
  //   this.http.post('https://console.firebase.google.com/project/monkey-ec249/database/monkey-ec249-default-rtdb/data/~2F', formData)
  //     .subscribe(response => {
  //       console.log('Form submitted successfully:', response);
  //     }, error => {
  //       console.error('Error submitting form:', error);
  //     });
  //   }
}
