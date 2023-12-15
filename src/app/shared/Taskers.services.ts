import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Tasker } from "./Tasker.model";
import { Category } from "./Category.model";

@Injectable({
    providedIn: 'root',
  })
  
export class TaskersServices {
    TaskersChanged = new Subject<Tasker[]>();
    
    private Taskers: Tasker[] = [
        new Tasker(
            'John Doe',
            'Kikuyu',
            '0700999666',
            '100/Hr',
            'Electronics'            
        ),
        new Tasker(
            'Jane Doe',
            'Kiambu',
            '0700999666',
            '300/Hr',
            'House / Pet sitting'
        ),
        new Tasker(
            'Joe Dusk',
            'Kilimani',
            '0700999666',
            '200/Hr',
            'Plumbing'
        ),
    ];

    getTaskers(){
        return this.Taskers.slice();
    }

    addTasker(tasker: Tasker) {
        this.Taskers.push(tasker);
        this.TaskersChanged.next(this.Taskers.slice());
    }

    updateTaskers(index: number, newTasker: Tasker) {
        this.Taskers[index] = newTasker;
        this.TaskersChanged.next(this.Taskers.slice());
    }
}