import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-cv',
  templateUrl: './download-cv.component.html',
  styleUrls: ['./download-cv.component.scss'],
})
export class DownloadCvComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  handleDownload(lang: string = 'EN') {
    const link = document.createElement('a');
    link.setAttribute('_target', '_blank');
    link.setAttribute('href', './assets/raouf-hecham-' + lang + '.pdf');
    link.setAttribute('download', 'raouf-hecham-' + lang + '.pdf');
    link.click();
    link.remove();
  }
}
