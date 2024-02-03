import { filterByTitle } from "../src/utils/index.js";
import { stackIcons } from "./index.js";

export const projects = [
  {
    name: "Liqui-Planner",
    date: "November 2021",
    url: "https://alex-bagin.github.io/liqui-planner/",
    images: {
      img1: "./img/projects/liqui-planner/liqui-planner.jpeg",
      img2: "./img/projects/liqui-planner/UC-a0eedeb6-c4a7-46cc-82ea-2061733bc362.jpg",
    },
    description: `Dieses Projekt zielt darauf ab eine praktische und benutzerfreundliche Lösung für die
                  Verwaltung von Einnahmen, Ausgaben und Bilanzen darzustellen. Es ist eine großartige
                  Möglichkeit für Benutzer, ihren finanziellen Status im Auge zu behalten und fundierte
                  finanzielle Entscheidungen zu treffen. Durch die Verwendung von JavaScript und CSS wird
                  eine dynamische Benutzeroberfläche geschaffen, die das Erstellen, Bearbeiten und
                  Überwachen von Finanzdaten erleichtert.`,
    stack: filterByTitle(stackIcons, [
      { title: "HTML" },
      { title: "CSS" },
      { title: "JavaScript" },
    ]),
  },
  {
    name: "WebDev-Kurse Shop",
    date: "Februar 2023",
    url: "https://github.com/alex-bagin/webdev-course-shop.git",
    images: {
      img1: "./img/projects/webdev-kurse-shop/webdev-kurse-shop.png",
      img2: "./img/projects/webdev-kurse-shop/UC-bc947081-abea-491c-b7f0-34a8c8cc8eb6.jpg",
    },
    description: `Der WebDev-Kurse Shop ist eine Webanwendung, die es Benutzern ermöglicht,
                  verschiedene Webentwicklungskurse zu durchsuchen, zu kaufen und zu verwalten.
                  Die App bietet Funktionen wie Benutzerregistrierung und -anmeldung, Administratoren
                  können Kurse hinzufügen, ändern und löschen, während Kunden Kurse kaufen und ihre
                  Bestellungen verwalten können. Mit einem einfachen Interface und robusten
                  Funktionen ist der WebDev-Kurse Shop die ideale Plattform für alle, die ihre
                  Webentwicklungsfähigkeiten verbessern möchten.`,
    stack: filterByTitle(stackIcons, [
      { title: "HTML", src: "./icons/html.svg", alt: "HTML" },
      { title: "CSS", src: "./icons/css.svg", alt: "CSS" },
      { title: "NodeJS", src: "./icons/nodejs.svg", alt: "NodeJS" },
      { title: "Express", src: "./icons/express.svg", alt: "Express" },
      { title: "MongoDB", src: "./icons/mongodb.svg", alt: "MongoDB" },
      { title: "Handlebars", src: "./icons/handlebars.svg", alt: "Handlebars" },
      { title: "MaterializeCSS", src: "./icons/materializecss.svg", alt: "MaterializeCSS" },
      { title: "Nodemon", src: "./icons/nodemon.svg", alt: "Nodemon" },
    ]),
  },
  {
    name: "To-Do-List",
    date: "März 2023",
    url: "https://github.com/alex-bagin/to-do-list.git",
    images: {
      img1: "./img/projects/to-do-list/to-do-list.png",
      img2: "./img/projects/to-do-list/UC-bc947081-abea-491c-b7f0-34a8c8cc8eb6.jpg",
    },
    description: `Die To-Do-List-Anwendung bietet eine benutzerfreundliche 
                  Plattform zur Organisation von Aufgaben und deren Listen.
                  Benutzer können Tasks hinzufügen, bearbeiten und abhaken. 
                  Die Anwendung ermöglicht eine einfache Verwaltung und eine 
                  effizentere Abarbeitung und Koordination.`,
    stack: filterByTitle(stackIcons, [
      { title: "HTML", src: "./icons/html.svg", alt: "HTML" },
      { title: "CSS", src: "./icons/css.svg", alt: "CSS" },
      {
        title: "JavaScript",
        src: "./icons/javascript.svg",
        alt: "JavaScript",
      },
      { title: "MySql", src: "./icons/mysql.svg", alt: "MySql" },
      { title: "Nodemon", src: "./icons/nodemon.svg", alt: "Nodemon" },
      { title: "Express", src: "./icons/express.svg", alt: "Express" },
      {
        title: "Sequelize",
        src: "./icons/sequelize.svg",
        alt: "Sequelize",
      },
    ]),
  },
  {
    name: "Posts",
    date: "Juni 2023",
    url: "https://github.com/alex-bagin/react-fund.git",
    // url: "https://alex-bagin.github.io/posts/",
    images: {
      img1: "./img/projects/posts/posts1.png",
      img2: "./img/projects/posts/posts2.png",
    },
    description: `Die App ermöglicht das Herunterladen von Posts mit Axios, 
                  die Anzeige und Sortierung dieser Posts sowie die 
                  Erstellung eigener Beiträge. Benutzer können Bilder und 
                  Videos ansehen. Dies schafft eine vielseitige Plattform 
                  für den Austausch von Inhalten.`,
    stack: filterByTitle(stackIcons, [
      { title: "HTML", src: "./icons/html.svg", alt: "HTML" },
      { title: "CSS", src: "./icons/css.svg", alt: "CSS" },
      { title: "NodeJS", src: "./icons/nodejs.svg", alt: "NodeJS" },
      { title: "React", src: "./icons/react.svg", alt: "React" },
      {
        title: "React-Router",
        src: "./icons/react-router.svg",
        alt: "React-Router",
      },
      { title: "Axios", src: "./icons/axios.png", alt: "Axios" },
      { title: "WebPack", src: "./icons/webpack.svg", alt: "WebPack" },
    ]),
  },
  {
    name: "JWT-Authorization",
    date: "Januar 2024",
    url: "https://github.com/alex-bagin/jwt-auth.git",
    images: {
      img1: "./img/projects/jwt-auth/jwt-auth1.1.png",
      img2: "./img/projects/jwt-auth/jwt-auth2.1.png",
    },
    description: `Die App ermöglilcht eine robuste und sichere Benutzerauthentifizierung. 
                  Node.js bildet das Backend und React das Frontend. JSON Web Token 
                  wird verwendet, um die Authentifizierungsinformationen der Benutzer
                  sicher zu übertragen und zu speichern. Insgesamt bietet das Projekt
                  eine zuverlässige und skalierbare Lösung für die Benutzerauthentifizierung,
                  die den modernen Standards für Webentwicklung entspricht und gleichzeitig 
                  die Sicherheit und Integrität der Benutzerdaten gewährleistet.`,
    stack: filterByTitle(stackIcons, [
      { title: "HTML", src: "./icons/html.svg", alt: "HTML" },
      { title: "CSS", src: "./icons/css.svg", alt: "CSS" },
      { title: "TypeScript", src: "./icons/typescript.svg", alt: "TypeScript" },
      { title: "React", src: "./icons/react.svg", alt: "React" },
      { title: "React-Router", src: "./icons/react-router.svg", alt: "React-Router" },
      { title: "TailwindCSS", src: "./icons/tailwindcss.svg", alt: "TailwindCSS" },
      { title: "Scss", src: "./icons/scss.svg", alt: "SCSS" },
      { title: "MobX", src: "./icons/mobx.svg", alt: "MobX" },
      { title: "NodeJS", src: "./icons/nodejs.svg", alt: "NodeJS" },
      { title: "Express", src: "./icons/express.svg", alt: "Express" },
      { title: "MongoDB", src: "./icons/mongodb.svg", alt: "MongoDB" },
      { title: "Nodemon", src: "./icons/nodemon.svg", alt: "Nodemon" },
      { title: "Postcss", src: "./icons/postcss.svg", alt: "Postcss" },
      { title: "Vite", src: "./icons/vite.svg", alt: "Vite" },
    ]),
  },
];
