import { Component, ViewEncapsulation } from '@angular/core';
import { ElModule } from "element-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'element ui angular';
}
