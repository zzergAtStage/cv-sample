import { Title } from '@angular/platform-browser';
import {Routes} from '@angular/router';
import { CvStaticComponent } from './pages/cv-static/cv-static.component';
import { CvQueriedComponent } from './pages/cv-queried/cv-queried.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CvPageComponent } from './pages/cv-page/cv-page.component';

export const routes = [
    //{path: '', redirectTo: '.pages/cv-static', pathMatch: 'full'},
    {path: 'cv-static', component: CvStaticComponent},
    {path: 'cv-queried', component: CvQueriedComponent},
    {path: 'cv-blank', component: CvPageComponent},
    {path: '**', component: PageNotFoundComponent}

];