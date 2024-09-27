import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  images: string[] = [
    '../../assets/images/banner1.JPG',
    '../../assets/images/banner2.JPG',
    '../../assets/images/banner3.JPG',
    '../../assets/images/banner4.JPG',
    '../../assets/images/banner5.JPG'
    
    
  ];
  currentIndex: number = 0;
  totalImages: number = this.images.length;

  ngOnInit(): void {
    // Auto-scroll every 3 seconds
    setInterval(() => this.scroll(1), 3000);
  }

  scroll(direction: number): void {
    this.currentIndex = (this.currentIndex + direction + this.totalImages) % this.totalImages;
  }

}
