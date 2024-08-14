import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CvQueriedComponent } from "./pages/cv-queried/cv-queried.component";
import { CvStaticComponent } from "./pages/cv-static/cv-static.component";
import { MatrixCodeComponent } from "./pages/matrix-code/matrix-code.component";
import { LanguageSelectorComponent } from "./pages/navigation/language-selector/language-selector.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CvQueriedComponent, CvStaticComponent, RouterModule, MatrixCodeComponent, LanguageSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv-sample';
}
