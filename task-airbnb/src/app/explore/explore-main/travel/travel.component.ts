import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit, AfterViewInit {

  @ViewChild('buttonBlock') buttonBlock: ElementRef;
  @ViewChild('button') button: MatButton;

  private buttonTopOffset: number;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.resetScrollOffset();
  }

  ngAfterViewInit(): void {
    this.buttonTopOffset = this.buttonBlock.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event): void {
    if (window.pageYOffset > this.buttonTopOffset) {
      this.button._elementRef.nativeElement.classList.add('fixed-button');
      this.buttonBlock.nativeElement.classList.add('fixed');
      this.buttonBlock.nativeElement.classList.remove('mt-1');
    }
    else {
      this.button._elementRef.nativeElement.classList.remove('fixed-button');
      this.buttonBlock.nativeElement.classList.remove('fixed');
      this.buttonBlock.nativeElement.classList.add('mt-1');
    }
  }

  private resetScrollOffset(): void {
    if (window.pageYOffset > 0) {
      window.scrollTo(0, 0);
    }
  }

}
