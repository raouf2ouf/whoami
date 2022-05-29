import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { SIZE_TO_MEDIA } from '@ionic/core/dist/collection/utils/media';
import { Subscription } from 'rxjs';

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
      title: 'About',
      url: '/about',
      icon: 'information-circle',
      active: true,
    },
    {
      title: 'Experience',
      url: '/experience',
      icon: 'briefcase',
      active: false,
    },
    {
      title: 'skills',
      url: '/skills',
      icon: 'code-slash',
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
    {
      title: 'education',
      url: '/skills',
      icon: 'school',
      active: false,
    },
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

  public timeline = [
    {
      start: 2019,
      end: 2022,
      title: 'Data Engineer',
      company: 'Business & Decision',
      location: 'Montpellier, France',
      description: '',
      items: ['potato', 'boy'],
    },
    {
      start: 2018,
      end: 2019,
      title: 'Research Engineer',
      company: 'University of Montpellier - LIRMM',
      location: 'Montpellier, France',
      description:
        'Formalized mathematical models and built a platform for real-time collective decision making based on potentially conflicting shared knowledge.',
      items: [
        'Implemented modular architecture across the entire stack while overseeing deployment, documentation, and deliverable reports.',
        'Implemented Spring REST API along with real-time collaboration using websockets.',
        'Implemented Angular Front-end with graph visualization and interaction featurs.',
      ],
      skills: [
        {
          src: 'logo-ionic',
          title: 'Ionic',
        },
        {
          src: 'logo-tux',
          title: 'Linux',
        },
      ],
    },
  ];

  public skills = {
    front: [
      {
        src: './assets/img/ionic.png',
        title: 'Ionic',
      },
      {
        src: './assets/img/angular.png',
        title: 'Angular (Typescript)',
      },
      {
        src: './assets/img/react.png',
        title: 'React (Javascript)',
      },
      {
        src: './assets/img/capacitor.png',
        title: 'Capacitor (Android)',
      },
    ],
    back: [
      {
        src: './assets/img/nodejs.png',
        title: 'Nodejs',
      },
      {
        src: './assets/img/flask.png',
        title: 'Flask (Python)',
      },
      {
        src: './assets/img/spring.png',
        title: 'Spring (Java)',
      },
    ],
    smart: [
      {
        src: './assets/img/solidity.png',
        title: 'Solidity',
      },
      {
        src: './assets/img/ethersjs.png',
        title: 'Ethers.js',
      },
    ],
    data: [
      {
        src: './assets/img/mogodb.png',
        title: 'Mongodb',
      },
      {
        src: './assets/img/postgres.png',
        title: 'Postgres',
      },
      {
        src: './assets/img/oracle.png',
        title: 'Oracle',
      },
      {
        src: './assets/img/tensorflow.png',
        title: 'TensorFlow',
      },
      {
        src: './assets/img/spark.png',
        title: 'Apache Spark',
      },
      {
        src: './assets/img/tableau.png',
        title: 'Tableau',
      },
      {
        src: './assets/img/talend.png',
        title: 'Talend',
      },
      {
        src: './assets/img/qlik.png',
        title: 'Qlik Sense',
      },
      {
        src: './assets/img/salesforce.png',
        title: 'Salesforce',
      },
    ],
    ops: [
      {
        src: './assets/img/aws.png',
        title: 'AWS',
      },
      {
        src: './assets/img/azure.png',
        title: 'Azure',
      },
      {
        src: './assets/img/git.png',
        title: 'Git',
      },
      {
        src: './assets/img/npm.png',
        title: 'npm',
      },
      {
        src: './assets/img/docker.png',
        title: 'Docker',
      },
      {
        src: './assets/img/maven.png',
        title: 'Maven',
      },
      {
        src: './assets/img/gradle.png',
        title: 'Gradle',
      },
    ],
  };

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
