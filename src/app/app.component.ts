import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-Anshul';
  showBottomArrow = true;

  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event: any) {

    // console.log($event);
    if (window.pageYOffset > 0 && window.pageYOffset < (document.body.scrollHeight - window.innerHeight)) {
      this.showBottomArrow = true;
    } else {
      this.showBottomArrow = false;
    }

  }

  openFile() {
    window.open("./Anshul-Mahajan-Resume.pdf");
  }
}
