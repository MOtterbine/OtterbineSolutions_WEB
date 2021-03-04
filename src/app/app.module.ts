import { AlertModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent.component';
import { SiblingComponent } from './components/sibling.component';
import { OsPage1Component } from './components/pages/os-page1.component';
import { OsPage2Component } from './components/pages/os-page2.component';
import { OsHeaderComponent } from './components/header/os-header.component';
import { OsFooterComponent } from './components/footer/os-footer.component';
import { OsMenuListComponent } from './components/header/os-menu-list.component';
import { OsMenuComponent } from './components/header/os-menu.component';
import { WindowsProcessingDirective } from './directives/winprocessing.directive';
import { CodeDisplayDirective } from './directives/code-display.directive';
import { MarqueeProcessingDirective } from './directives/marquee.processing.directive';
import { WindowFacadeDirective } from './directives/facade.directive';

import { FormsModule } from '@angular/forms';
import { DataService } from "./services/data.service";
import { AuthService } from "./services/auth/auth.service";
import { UIRouterModule } from '@uirouter/angular';

import { ErrorComponent } from './error.component';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { OSRSSService } from './services/rss.service';
import { AppRoutingModule, AppRoutingComponents } from './app.routing.module';
import { OsFaceSummaryComponent } from './components/pages/os-face-summary.component';
import { OsPopupComponent } from './components/pages/os-popup.component';
import { OsCarouselComponent } from './components/pages/os-carousel.component';
import { OsBusinessCardComponent } from './components/fragments/os-business-card.component';
import { ODB2AppDownloadComponent } from './components/pages/os-odb2app-download.component';
import { BasePageComponent} from './components/pages/os-basepage.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { EventsComponent } from './components/pages/events/events.component';
import { BottomSummaryComponent } from './components/fragments/bottom-summary.component';
import { EmailComponent } from './components/auth/email/email.component';
import { MembersComponent } from './components/auth/members/members.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { PresentationComponent } from './components/pages/presentation/presentation.component';
import { RegistrationConfirmationComponent } from './components/auth/registration-confirmation/registration-confirmation.component';
import { SpecialComponent } from './components/pages/special/special.component';
import { Authorizers } from './components/Auth/Authorizers';
import { CodeDisplayComponent } from './components/pages/code-display/code-display.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ResumeComponent } from './components/pages/resume/resume.component';
import { AWSAuthSignatureComponent } from './components/pages/awsauth-signature/awsauth-signature.component';
import { HashingExampleComponent } from './components/pages/hashing-example/hashing-example.component';



@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [UIRouterModule],
  providers: [
                DataService,
                OSRSSService,
                AuthService,
                AuthGuard,
                // {
                //   provide: HTTP_INTERCEPTORS,
                //   useClass: TokenInterceptorService,
                //   multi: true
                // }

             ],
  bootstrap: [AppComponent],
  entryComponents: [
    AWSAuthSignatureComponent,
    HashingExampleComponent
  ],
  declarations: [
    AppComponent,
    ParentComponent,
    SiblingComponent,
    AppRoutingComponents,
    OsPage1Component,
    OsPage2Component,
    OsHeaderComponent,
    OsFooterComponent,
    OsMenuComponent,
    OsMenuListComponent,
    WindowsProcessingDirective,
    CodeDisplayDirective,
    MarqueeProcessingDirective,
    WindowFacadeDirective,
    ErrorComponent,
    OsFaceSummaryComponent,
    OsPopupComponent,
    OsCarouselComponent,
    OsBusinessCardComponent,
    ODB2AppDownloadComponent,
    BasePageComponent,
    RegisterComponent,
    LoginComponent,

    EventsComponent,
    BottomSummaryComponent,
    EmailComponent,
    MembersComponent,
    PresentationComponent,
    RegistrationConfirmationComponent,
    SpecialComponent,
    CodeDisplayComponent,
    NotFoundComponent,
    ResumeComponent,
    AWSAuthSignatureComponent,
    HashingExampleComponent

  ]
})
export class AppModule { }
