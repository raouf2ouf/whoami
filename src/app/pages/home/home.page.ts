import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { SIZE_TO_MEDIA } from '@ionic/core/dist/collection/utils/media';
import { Subscription } from 'rxjs';
import { timeline } from 'src/app/data/experience';
import { skills } from 'src/app/data/skills';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit, OnDestroy {
  public appPages: {
    title: string;
    url: string;
    icon: string;
    active: boolean;
  }[] = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
      active: true,
    },
    {
      title: 'About',
      url: '/about',
      icon: 'information-circle',
      active: false,
    },
    {
      title: 'skills',
      url: '/skills',
      icon: 'code-slash',
      active: false,
    },
    {
      title: 'Experience',
      url: '/experience',
      icon: 'briefcase',
      active: false,
    },
    {
      title: 'projects',
      url: '/skills',
      icon: 'hammer',
      active: false,
    },
    {
      title: 'awards',
      url: '/skills',
      icon: 'ribbon',
      active: false,
    },
    // {
    //   title: 'education',
    //   url: '/skills',
    //   icon: 'school',
    //   active: false,
    // },
    {
      title: 'research',
      url: '/skills',
      icon: 'flask',
      active: false,
    },
    {
      title: 'CV',
      url: '/CV',
      icon: 'print',
      active: false,
    },
    {
      title: 'Personal Blog',
      url: '/blog',
      icon: 'enter',
      active: false,
    },
  ];

  public timeline = timeline;

  public skills = skills;
  smallSideMenu: boolean = false;
  menuWidth: string = '370px';

  subs: Subscription[] = [];

  constructor(private plateform: Platform) {}

  ngOnInit() {
    this.subs.push(
      this.plateform.resize.subscribe(async () => {
        const width = this.plateform.width();
        this.checkSize(width);
      })
    );
  }

  async ngAfterViewInit() {
    const width = this.plateform.width();
    this.checkSize(width);
  }

  public toggleMenu(): void {
    this.smallSideMenu = !this.smallSideMenu;
  }

  public checkSize(width: number) {
    if (width < 768) {
      this.smallSideMenu = true;
      return;
    }
    this.smallSideMenu = false;
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
