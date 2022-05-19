import { Component, OnInit } from '@angular/core';
import { SIZE_TO_MEDIA } from '@ionic/core/dist/collection/utils/media';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public appPages: {
    title: string;
    url: string;
    icon: string;
    active: boolean;
  }[] = [
    {
      title: 'About',
      url: '/about',
      icon: '',
      active: true,
    },
    {
      title: 'Portfolio',
      url: '/portfolio',
      icon: '',
      active: false,
    },
    {
      title: 'CV',
      url: '/CV',
      icon: '',
      active: false,
    },
    {
      title: 'Personal Blog',
      url: '/blog',
      icon: '',
      active: false,
    },
  ];

  constructor() {}

  ngOnInit() {}

  public toggleMenu(): void {
    const splitPane = document.querySelector('ion-split-pane');
    if (
      splitPane &&
      window.matchMedia(SIZE_TO_MEDIA[splitPane.when] || splitPane.when)
    ) {
      splitPane.classList.toggle('split-pane-visible');
    }

    window.dispatchEvent(new CustomEvent('resize'));
  }
}
