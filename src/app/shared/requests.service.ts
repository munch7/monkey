import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { request } from "./request.model";

@Injectable({
    providedIn: 'root',
  })
  
export class RequestsServices {
    RequestsChanged = new Subject<request[]>();
    startedEditing = new Subject<number>();
    private Requests: request[] = [];
    reques!: request;

  updateRequest(index: number, newRequest: request) {
    this.Requests[index] = newRequest;
    this.RequestsChanged.next(this.Requests.slice());
  }

  addRequest(reques: request) {
    this.Requests.push(this.reques);
    this.RequestsChanged.next(this.Requests.slice());
  }

  getRequests() {
    return this.Requests.slice();
  }

  getRequest(index: number) {
    return this.Requests[index];
  }
} 