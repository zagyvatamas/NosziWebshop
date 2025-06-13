import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentService } from '../../service/content.service';
import { IContent } from '../../interfaces/content';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ads-upload',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ads-upload.component.html',
  styleUrl: './ads-upload.component.css'
})
export class AdsUploadComponent {
  image!: File | null;
  ad!: IContent;
  

  constructor(private contentService: ContentService, private authService: AuthService, private router:Router) {}

  

  onFileSelected(event: any) {
    this.image = event.target.files[0];
  }

  

  ngOnInit() {
    this.ad = {
      id:0,
      title:'',
      description:'',
      image_path:'',
      user_id:this.authService.getUserId(),
      price:0
    };
  }

  Send() {
    if (!this.ad.title || !this.ad.description || !this.image) {
      alert('Minden mező kötelező!');
      return;
    }

    const formData = new FormData();
    formData.append('title', this.ad.title);
    formData.append('description', this.ad.description);
    formData.append('image_path', this.image);
    formData.append('price', this.ad.price.toString());
    formData.append('user_id', this.ad.user_id?.toString() || '');

    this.contentService.addAd(formData).subscribe({
      next: () => {
        alert('Hirdetés sikeresen feladva!');
        this.resetForm();
        // this.router.navigate(['profile']); 
      },
      error: (error) => {
        console.error('Hiba a hirdetés feladása közben!', error);
        alert('Hiba történt a feltöltés közben.');
      }
    });
  }

  resetForm() {
    this.ad = {
      id: 0,
      title: '',
      description: '',
      image_path: '',
      user_id: this.authService.getUserId(),
      price: 0
    };
    this.image = null;
  }

}
