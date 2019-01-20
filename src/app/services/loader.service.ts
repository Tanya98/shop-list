import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {

    loading$: BehaviorSubject<boolean>;

    constructor() {
        this.loading$ = new BehaviorSubject(false);
    }

    public show(){
        this.loading$.next(true);
    }

    public hide(){
        this.loading$.next(false);
    }

}