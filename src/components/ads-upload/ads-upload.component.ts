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
      image:'',
      user_id:this.authService.getUserId(),
      price:0
    };
  }

  Send() {



    this.router.navigate(['profile'])
  }

}
