import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogPageComponent} from '../app/blog-page/blog-page.component';
import { BodyComponent } from '../app/components/body/body.component';

const routes: Routes = [
  { path: 'first-component', component: BlogPageComponent },
  { path: '', component: BodyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
