
import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { MainComponent } from '../components/main/main.component';
import { AdsUploadComponent } from '../components/ads-upload/ads-upload.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'profile', component: ProfileComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'main', component:MainComponent},
    {path:'adsUpload', component:AdsUploadComponent}
];
