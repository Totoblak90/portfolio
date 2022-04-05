import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { fromEvent, Subject } from 'rxjs';
import { map, take, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy, OnInit {
  public menuIsOpen: boolean = false;
  public activeWelcome: boolean = false;
  private destroy$: Subject<boolean> = new Subject();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        tap((res: RouterEvent) => {
          if (res.url) {
            this.activeWelcome = res.url === '/';
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
