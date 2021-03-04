import { Component, NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { OsMainComponent } from './components/pages/os-main.component';
import { OsIntroComponent } from './components/pages/os-intro.component';
import { EventsComponent } from './components/pages/events/events.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthGuard } from './auth.guard';
import { ODB2AppDownloadComponent } from './components/pages/os-odb2app-download.component';
import { PresentationComponent } from './components/pages/presentation/presentation.component';
import { CodeDisplayComponent } from './components/pages/code-display/code-display.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ResumeComponent } from './components/pages/resume/resume.component';

const routes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch:'full'   },
    { path: 'Home', component: OsMainComponent   },
    { path: 'login', component: LoginComponent   },
    { path: 'register', component: RegisterComponent, pathMatch:'full'   },
    { path: 'Intro', component: OsIntroComponent },
    //{ path: 'CodeDisplay', component: CodeDisplayComponent },//, canActivate:[AuthGuard] },
    { path: 'CodeDisplay/:id', component: CodeDisplayComponent },//, canActivate:[AuthGuard] },
    { path: 'ODB2AppDownload', component: ODB2AppDownloadComponent },//, canActivate:[AuthGuard] },
    { path: 'Presentation', component: PresentationComponent },//, canActivate:[AuthGuard] },
    { path: 'MikeOtterbineResume', component: ResumeComponent },//, canActivate:[AuthGuard] },
    { path: 'events', component: EventsComponent   },
    { path: '**', component: NotFoundComponent }

];




@NgModule({

    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule{


}

export const AppRoutingComponents = [ OsMainComponent, OsIntroComponent, LoginComponent, RegisterComponent,
                                        CodeDisplayComponent, ODB2AppDownloadComponent, PresentationComponent, NotFoundComponent ]