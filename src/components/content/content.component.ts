import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IContent } from '../../interfaces/content';
import { ContentService } from '../../service/content.service';

@Component({
  selector: 'app-content',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  ads: IContent[] = []
  errorMessage: string = '';


  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.getAllAds()
  }

  getAllAds() {
    this.contentService.getAds().subscribe(
      (ads: any[]) =>{
        this.ads = ads.map(ad => ({
          ...ad,
          image: `http://localhost:3000${ad.image}`
        }))
      },
      (error) => {
        this.errorMessage = 'Hiba történt a hirdetések betöltése közben!';
        console.error(error);  
      }
    )
  }
}
