import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule } from '@angular/material/button';
import {MatDialogModule,MatDialogRef } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { MissionStatementComponent } from './components/mission-statement/mission-statement.component';
import { HoeITWorksComponent } from './components/hoe-itworks/hoe-itworks.component';
import { ApplyDetailsComponent } from './components/apply-details/apply-details.component';
import { HowITWorksComponent } from './components/how-itworks/how-itworks.component';
import { ApplyComponent } from './components/apply/apply.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import {MatStepperModule} from '@angular/material/stepper';
import { NgOtpInputModule } from  'ng-otp-input';

import {MAT_DIALOG_DEFAULT_OPTIONS,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UserFormComponent } from './components/user-form/user-form.component';
//import { list} from '@angular/fire/database'
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MissionStatementComponent,
    HoeITWorksComponent,
    ApplyDetailsComponent,
    HowITWorksComponent,
    ApplyComponent,
    ContactComponent, 
    BlogComponent,
    AboutUsComponent,
    BlogPageComponent,
    UserFormComponent
  ],

  entryComponents: [
     ApplyComponent
  ],
  imports: [
    NgOtpInputModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatSelectModule,
    MatStepperModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {
      provide: MatDialogRef,
      useValue: {}
    },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: ApplyComponent,useValue:{}},
    {provide: HttpClient,useValue:{}}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
