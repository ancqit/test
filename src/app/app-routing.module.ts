import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogPageComponent} from '../app/blog-page/blog-page.component';
import { BodyComponent } from '../app/components/body/body.component';
import { AboutUsComponent } from '../app/components/about-us/about-us.component';
import { HowITWorksComponent} from '../app/components/how-itworks/how-itworks.component';
import { ContactComponent } from '../app/components/contact/contact.component';

const routes: Routes = [
  { path: 'blogs', component: BlogPageComponent },
  {path:'about-us', component:AboutUsComponent},
  {path:'how-it-works', component:HowITWorksComponent},
  {path:'contact',component:ContactComponent},
  { path: '', component: BodyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
