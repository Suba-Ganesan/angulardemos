import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit {
  intervalsubcscription: Subscription;
  customsubcription: Subscription;
  constructor() {}

  ngOnInit(): void {   //initialization
    // this.intervalsubcscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customObservable = Observable.create((obj)=>{  //customobservable
      
      let num=1;
      setInterval(()=>{
        obj.next(num*10);
        num++;
        if (num > 9) {
          obj.error(new Error('count is greater than 9'));
        }
        if (num === 9) {
          obj.complete();
        }
      },1000);
    });

    this.customsubcription = customObservable
    .pipe(
      filter((data: number) => {
        return data % 2 === 0;
      }),
      map((data: number) => {
        return data * 10;
      })
    )
    .subscribe(
      (num)=>  //observer side for customobservable
    {console.log(num);
    },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        console.log('completed');
      }
      );
  }

  ngOnDestroy(): void {    
    // this.intervalsubcscription.unsubscribe();
    this.customsubcription.unsubscribe();
  }
}
