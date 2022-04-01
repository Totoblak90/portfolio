import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { StoreService } from '../../services/store.service';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-my-stack',
  templateUrl: './my-stack.component.html',
  styleUrls: ['./my-stack.component.scss'],
})
export class MyStackComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('frontendContainer') frontendContainer: ElementRef<HTMLDivElement>;
  @ViewChild('backendContainer') backendContainer: ElementRef<HTMLDivElement>;
  @ViewChild('cursorAnimation') cursorAnimation: ElementRef<HTMLImageElement>;

  public showStack: boolean = true;
  public showCursor: boolean = true;
  private destroy$: Subject<boolean> = new Subject();

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.showStack = this.storeService.showStack;
    this.showCursor = this.storeService.cursorShowedOnMyStack < 2;
  }

  ngAfterViewChecked(): void {
    this.cursorAnimation?.nativeElement?.addEventListener(
      'animationend',
      () => {
        this.storeService.cursorShowedOnMyStack++;
      }
    );
  }

  public showInfo(): void {
    this.storeService.showStack = !this.storeService.showStack;

    const timer$ = interval(1000);
    let counter = 0;
    timer$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (time) => {
        counter = time;
        if (counter >= time) {
          const resolveAnimation = (): Promise<boolean> => {
            return new Promise((resolve) => {
              resolve(this.storeService.showStack);
            });
          };

          resolveAnimation().then((res) => {
            if (!res) {
              this.backendContainer?.nativeElement?.classList?.add('disappear');
              this.frontendContainer?.nativeElement?.classList?.add(
                'disappear'
              );
              this.frontendContainer?.nativeElement?.addEventListener(
                'animationend',
                () => {
                  this.showStack = res;
                }
              );
            } else {
              this.showStack = res;
              this.backendContainer?.nativeElement?.classList?.remove(
                'disappear'
              );
              this.frontendContainer?.nativeElement?.classList?.remove(
                'disappear'
              );
            }
          });
        }
      },
      error: (err) => console.log(err),
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
