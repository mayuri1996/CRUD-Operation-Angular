import { Component, HostBinding } from '@angular/core';
import { StudentServiceService } from './shared/student-service.service';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @HostBinding('class') componentCssClass;
  constructor(private obj:StudentServiceService,private _overlaycontainer:OverlayContainer){}

  setval(){
    this.obj.studentDetails.reset();
  }

  changeTheme(theme){
    this._overlaycontainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }
}
