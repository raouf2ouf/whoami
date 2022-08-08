import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent implements OnInit {
  infos = [
    {
      title: 'Senior Data Engineer and Fullstack Web/Solidity Developer',
      profile: {
        title: 'Profile',
        content:
          'Experienced (+7 years) Full Stack Data Engineer with a Ph.D. in Artificial Intelligence. Specialized in building solutions at the intersection of three domains: ',
        web: 'Web Developement',
        data: 'Data Engineering',
        link: 'and',
        blockchain: 'Smart Contracts (Blockchain)',
      },
      skills: 'Key Skills',
      languages: {
        title: 'Languages',
        langs: [
          'English (C2): Bilingual',
          'French (C2): Fluent',
          'Arab: Native',
        ],
      },
      philosophy: {
        title: 'Life Philosophy',
        beforeQuote: 'My philosophy in life is simple: ',
        quote: 'Find the pattern; Optimize it.',
        afterQuote:
          'I enjoy using my attention to detail to optimize and facilitate solutions to challenging problems.',
      },
      experience: {
        title: 'Experience',
        exps: [
          {
            position: 'Senior Data Engineer',
            place: 'Business & Decision',
            time: 'Sep 19 - Now [3 years]',
            location: 'Montpellier | France',
            description:
              'Facilitating decisions via Data visualisation and Predictive Models.',
            items: [
              'Led the the developement of a generic library for integrating Qlik suite with an existing Angular app for real-time custom visualization of financial data.',
              'Oversaw a team of 5 developers in building a French NLP model (with OCR) for automatic detection of changes in EU regulations for a cosmetics manufacturer.',
              'Implemented data integration piplines to process semi-structured data from multiple sources using Hadoop/Talend for various clients.',
              'Designed and Implemented Salesforce applications that rely on Talend REST APIs to display and interact with NoSQL HBase data.',
              'Developed Qlik Sense and Tableau dashboards along with the underlying ETL data integration processes vor various clients.',
            ],
          },
          {
            position: 'Research and Development Engineer',
            place: 'University of Montpellier',
            time: 'Aug 18 - Jul 19 [1 year]',
            location: 'Montpellier | France',
            description:
              'Formalized mathematical models and built a platform for real-time collective decision making based on potentially conflicting shared knowledge.',
            items: [
              'Implemented modular architecture across the entire stack while overseeing deployment, documentation, and deliverable reports.',
              'Implemented Spring REST API with real-time collaboration using websockets.',
              'Implemented Angular Front-end with graph visualization and interaction.',
              'Implemented a model for decision prediction based on agents knowledge.',
              'Tutoring and Lecturing duties (+300h) for graduate students (Databases, Human-Computer Interaction, Web Developement)',
            ],
          },
          {
            position: 'Freelance Full Stack Developer',
            place: 'Freelance',
            time: 'Sep 15 -  [~7 years]',
            location: 'Montpellier | France',
            description:
              'Developed various Web, Mobile and Blockchain applications:',
            items: [
              'Currently developing a Web3 task management app with the ability to display progress by minting on-chain and off-chain NFTs (mnemofy.app) [Solidity/Angular].',
              'Developed a Web app for monitoring daily activities with automatic rating and prediction of daily performance (seshtat.com) [Angular/Ionic/Nodejs].',
              'Implemented a Web and Mobile app for bodyguard booking (1EyeOnU: Uber of bodygards) [Angular/Firebase/Nodejs/Ionic/Maps API].',
              'Landing pages and Web sites developement for various clients via Odesk.',
            ],
          },
          // {
          //   position: 'Teaching Assistant',
          //   place: 'IUT Montpellier',
          //   time: 'Oct 15 - Jul 19',
          //   location: 'Montpellier | France',
          //   description:
          //     'Tutoring and lecturing duties (+300h) for undergraduate students.',
          //   items: [
          //     'Intoduction to Databases (92h), Human-Computer Interaction (173h), Web Development (24h).',
          //     "Tutoring: 5 Bachelor's student groups.",
          //   ],
          // },

          {
            position: 'Junior Full Stack Developer',
            place: 'Open Management System',
            time: 'Sep 14 - Aug 15 [1 year]',
            location: 'Constantine | Algeria',
            description: '',
            items: [
              'Implemented a user polling website using Laravel/PHP.',
              'Implemented a scheduling tool with replicated database using Java/MySQL for a language training school.',
            ],
          },
        ],
      },

      education: {
        title: 'Education',
        edus: [
          {
            position: 'Ph.D. in Artificial Intelligence',
            place: 'University of Montpellier',
            time: 'Sep 15 - Jul 18',
            location: 'Montpellier | France',
            description:
              'Reasoning with conflicting knowledge applied to various domains such as Databases, Data Quality, Semantic Web, Argumentation, and Human Reasoning.',
          },
          // {
          //   position: "Master's Degree in Computer Science",
          //   more: 'Rank: 1/76',
          //   place: 'University of Abdelhamid Mehri',
          //   time: 'Sep 13 - Jul 15',
          //   location: 'Constantine | Algeria',
          //   description:
          //     'Implemented a tool for the classification of individuals in fuzzy ontologies by calculating the membership degree and displaying the results in a colored directed graph.',
          // },
        ],
      },

      awards: {
        title: 'Notable Personal Achievements',
        aws: [
          // {
          //   title: 'Automatic Day Rating App (seshtat.com):',
          //   desc: 'build an app (Web/Android) with more than 110 active users (as of Aug 2021) for automatic day rating.',
          // },
          {
            title: 'Ph.D. Excellency Scholarship:',
            desc: 'for students with outstanding curriculum',
          },
          {
            title: 'Valedictorian:',
            desc: "Bachlor's and Master's degrees",
          },
          {
            title: 'Cirta-Science-III Astronomy Award:',
            desc: 'first place in the Cirta Astronomy contest',
          },
        ],
      },
    },

    // French
    {
      title: 'Expert Data et Developpeur Fullstack Web/Blockchain',
      profile: {
        title: 'Profil',
        content:
          "Docteur en Intelligence Artificielle et Ingénieur de données expérimenté (+7 ans). Spécialisé dans le developpement de solutions à l'intersection de trois domaines: ",
        web: 'Developpement Web',
        data: 'Ingénierie des Données',
        link: 'et',
        blockchain: 'Contrats Intelligents (Blockchain)',
      },
      skills: 'Compétences Clés',
      languages: {
        title: 'Langues',
        langs: [
          'Anglais (C2): Bilingue',
          'Francais (C2): Maîtrise',
          'Arabe: Langue Maternelle',
        ],
      },
      philosophy: {
        title: 'Philosophie de Vie',
        beforeQuote: 'Ma philosophie de vie est: ',
        quote: 'Find the pattern; Optimize it.',
        afterQuote:
          "J'aime utiliser mon attention aux détails pour optimiser et faciliter la résolution de problèmes complexes.",
      },
      experience: {
        title: 'Expérience',
        exps: [
          {
            position: 'Expert Data',
            place: 'Business & Decision',
            time: 'Sep 19 -  [3 ans]',
            location: 'Montpellier | France',
            description:
              "Mise en place de solutions BI d'aide à la decision pour divers clients:",
            items: [
              "Développement d'une solution générique permettant l'intégration de la suite Qlik à Angular pour la visualisation des données financières.",
              "Supervision d'une équipe (5) dans le developement NLP (avec OCR) pour la détection automatique des changements dans les réglementations EU pour les produits dermocosmétiques.",
              "Mise en œuvre de projets d'intégration de données semi-structurées de sources multiples à l'aide de Hadoop/Talend pour divers clients.",
              "Conception et mise en œuvre d'applications Salesforce qui s'appuient sur les API REST Talend pour interagir avec les données NoSQL HBase.",
              'Mise en place de dashboards de bout en bout (ETL -> Visualisation) utilisant Qlik Sense et Tableau pour divers clients.',
            ],
          },
          {
            position: 'Ingénieur Recherche et Développement',
            place: 'Université de Montpellier',
            time: 'Aoû 18 - Jul 19 [1 an]',
            location: 'Montpellier | France',
            description:
              "Formalisation et développement d'une plate-forme de prise de décision collective en temps réel basée sur des connaissances contradictoires.",
            items: [
              "Implémentation d'une architecture modulaire (100k+ lignes de code) tout en supervisant le déploiement, la documentation et les rapports des livrables.",
              "Implémentation d'une API REST Spring avec collaboration en temps réel.",
              // "Implémentation d'une interface Angular Material avec visualisation de graphes.",
              'Modèle de prédiction des décisions basé sur les connaissances des agents.',
              'Tutorat et cours magistraux (+300h): BD, IHM, Développement Web.',
            ],
          },
          {
            position: 'Developpeur Full Stack Freelance',
            place: 'Temps partiel',
            time: 'Sep 15 -  [~7 ans]',
            location: 'Montpellier | France',
            description:
              "Dévelopement en Freelance d'applications Web/Mobile/Blockchain:",
            items: [
              "Développement en cours d'une application Web3 de gestion des tâches avec géneration d'NFT (on-chain/off-chain) représentant leur état d'avancement (mnemofy.app) [Solidity/Angular].",
              "Développement d'une app. Web/Mobile pour le suivi des activités journalières avec évaluation automatique de la journée (seshtat.com) [Angular/Ionic/Nodejs].",
              "Implémentation d'une application Web/Mobile pour la réservation de garde du corps (1EyeOnU: Uber of bodygards) [Angular/Firebase/Nodejs/Ionic/Maps API].",
              'Developement de sites web vitrine ou personnels pour divers client via Odesk.',
            ],
          },
          {
            position: 'Développeur Full Stack',
            place: 'Open Management System',
            time: 'Sep 14 - Aoû 15',
            location: 'Constantine | Algérie',
            description:
              "Implémentations de Sites web en Lavavel/PHP et d'un outil de planification avec base de données répliquée (Java/MySQL) pour une école de langues.",
            items: [
              // "Implémentation d'un site Web de sondage en Laravel / PHP.",
              // "Implémentation d'un outil de planification avec base de données répliquée utilisant Java/MySQL pour une école de langues.",
            ],
          },
        ],
      },

      education: {
        title: 'Éducation',
        edus: [
          {
            position: 'Doctorat en Intelligence Artificielle',
            place: 'Université de Montpellier',
            time: 'Sep 15 - Jul 18 [1 year]',
            location: 'Montpellier | France',
            description:
              'Raisonnement avec des connaissances contradictoires appliqué aux domaines de la qualité des données, le Web sémantique et le raisonnement humain.',
          },
        ],
      },

      awards: {
        title: 'Accomplissements Personnels',
        aws: [
          // {
          //   title:
          //     "Application pour l'evaluation automatique de la journee de l'utilisateur (seshtat.com):",
          //   desc: 'App Web/Android avec plus de 110 utilisateurs actifs (Aoû 2021).',
          // },
          {
            title: "Bourse Doctorat d'Excellence:",
            desc: 'pour les étudiants avec un parcours exceptionnel.',
          },
          { title: 'Major de promotion:', desc: 'en Licence et Master.' },

          {
            title: 'Cirta-Science-III Astronomy Award:',
            desc: "première place au concours d'astronomie.",
          },
        ],
      },
    },

    // {
    //   title: 'Ingénieur Data Senior et Developpeur Fullstack Web/Solidity',
    //   profile: {
    //     title: 'Profil',
    //     content:
    //       "Docteur en Intelligence Artificielle et Ingénieur de données expérimenté (+7 ans). Spécialisé dans le developpement de solutions à l'intersection de trois domaines: ",
    //     web: 'Developpement Web',
    //     data: 'Ingénierie des Données',
    //     link: 'et',
    //     blockchain: 'Contrats Intelligents (Blockchain)',
    //   },
    //   skills: 'Compétences Clés',
    //   languages: {
    //     title: 'Langues',
    //     langs: [
    //       'Anglais (C2): Courant',
    //       'Francais (C2): Bilingue',
    //       'Arabe: Langue Maternelle',
    //     ],
    //   },
    //   philosophy: {
    //     title: 'Philosophie de Vie',
    //     beforeQuote: 'Ma philosophie de vie est: ',
    //     quote: 'Find the pattern; Optimize it.',
    //     afterQuote:
    //       "J'aime utiliser mon attention aux détails pour optimiser et faciliter la résolution de problèmes complexes.",
    //   },
    //   experience: {
    //     title: 'Expérience',
    //     exps: [
    //       {
    //         position: 'Ingénieur Data Senior',
    //         place: 'Business & Decision',
    //         time: 'Sep 19 - Now',
    //         location: 'Montpellier | France',
    //         description:
    //           'Facilitating decisions via Data visualisation and Predictive Models.',
    //         items: [
    //           "Développement d'une intégration de la suite Qlik à une application Angular existante pour la visualisation personnalisée des données financières.",
    //           "Supervision d'une équipe (5) dans le developement NLP (avec OCR) pour la détection automatique des changements dans les réglementations EU.",
    //           "Mise en œuvre de piplines d'intégration de données semi-structurées provenant de sources multiples à l'aide de Hadoop/Talend pour divers clients.",
    //           "Conception et mise en œuvre d'applications Salesforce qui s'appuient sur les API REST Talend pour afficher et interagir avec les données NoSQL HBase.",
    //           "Développement des tableaux de bord Qlik Sense et Tableau ainsi que des processus d'intégration de données ETL sous-jacents pour divers clients.",
    //         ],
    //       },
    //       {
    //         position: 'Ingénieur Recherche et Développement',
    //         place: 'Université de Montpellier - LIRMM',
    //         time: 'Aoû 18 - Jul 19',
    //         location: 'Montpellier | France',
    //         description:
    //           "Formalisation et développement d'une plate-forme de prise de décision collective en temps réel basée sur des connaissances contradictoires.",
    //         items: [
    //           "Implémentation d'une architecture modulaire (100k+ lignes de code) tout en supervisant le déploiement, la documentation et les rapports des livrables.",
    //           "Implémentation d'une API REST Spring avec collaboration en temps réel.",
    //           "Implémentation d'une interface Angular Material avec visualisation de graphes.",
    //           'Modèle de prédiction des décisions basé sur les connaissances des agents.',
    //           'Tutorat et cours magistraux (+300h): Bases de données, Interaction Homme-Machine, Développement Web.',
    //         ],
    //       },
    //       {
    //         position: 'Développeur Full Stack Junior',
    //         place: 'Open Management System',
    //         time: 'Sep 14 - Aoû 15',
    //         location: 'Constantine | Algérie',
    //         description: '',
    //         items: [
    //           "Implémentation d'un site Web de sondage en Laravel / PHP.",
    //           "Implémentation d'un outil de planification avec base de données répliquée utilisant Java/MySQL pour une école de langues.",
    //         ],
    //       },
    //     ],
    //   },

    //   education: {
    //     title: 'Éducation',
    //     edus: [
    //       {
    //         position: 'Doctorat en Intelligence Artificielle',
    //         place: 'Université de Montpellier',
    //         time: 'Sep 15 - Jul 18',
    //         location: 'Montpellier | France',
    //         description:
    //           'Raisonnement avec des connaissances contradictoires appliqué aux domaines de la qualité des données, le Web sémantique et le raisonnement humain.',
    //       },
    //     ],
    //   },

    //   awards: {
    //     title: 'Accomplissements Personnels',
    //     aws: [
    //       {
    //         title:
    //           "Application pour l'evaluation automatique de la journee de l'utilisateur (seshtat.com):",
    //         desc: 'App Web/Android avec plus de 110 utilisateurs actifs (Aoû 2021).',
    //       },
    //       {
    //         title: "Bourse Doctorat d'Excellence:",
    //         desc: 'pour les étudiants avec un parcours exceptionnel.',
    //       },
    //       // {title:"Major de promotion:",
    //       //  desc: "en Licence et Master."},

    //       {
    //         title: 'Cirta-Science-III Astronomy Award:',
    //         desc: "première place au concours d'astronomie.",
    //       },
    //     ],
    //   },
    // },
  ];

  constructor() {}

  ngOnInit() {}
}
