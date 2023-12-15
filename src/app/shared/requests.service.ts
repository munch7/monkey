import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { request } from "./request.model";

@Injectable({
    providedIn: 'root',
  })
  
export class RequestsServices {
    RequestsChanged = new Subject<request[]>();
    private Requests: request[] = [];
}