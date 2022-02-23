import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  videocamFlag = true;
  microFlag = true;

  constructor() {}

  changeVideocamState() {
    if (this.videocamFlag) {
      this.videocamFlag = false;
    } else {
      this.videocamFlag = true;
    }
  }

  changeMicroState() {
    if (this.microFlag) {
      this.microFlag = false;
    } else {
      this.microFlag = true;
    }
  }

}
