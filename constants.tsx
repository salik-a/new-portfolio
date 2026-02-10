
import { Project, Experience, NavItem, Education, Skill, Contact } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'STORY', href: '#', font: 'marker' },
  { label: 'HISTORY', href: '#history', font: 'marker' },
  { label: 'ACADEMY', href: '#academy', font: 'marker' },
  { label: 'SKILLS', href: '#skills', font: 'marker' },
  { label: 'MISSIONS', href: '#projects', font: 'marker' },
  { label: 'CALL', href: '#contact', font: 'marker' },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    missionNumber: 'MISSION #01',
    title: 'SETCARD FLEXLIFE',
    description: 'A fintech application for digital payments, coupons and balance tracking.',
    tags: ['REACT NATIVE', 'REDUX', 'FIREBASE', 'REACT-QUERY'],
    color: '#30e8c9',
    iconType: 'mobile',
    technologies: ['React-Native', 'Redux', 'React Navigation', 'Axios', 'Firebase', 'React-Query', 'TypeScript'],
    features: 'Users can buy coupons from different merchants like A101, Teknosa, Ikea. They can pay directly from a digital card in shops like Boyner, Mavi, Koton or they can use QR payment in markets and restaurants.',
    appStore: 'https://apps.apple.com/us/app/setcardflexlife/id1665163090',
    playStore: 'https://play.google.com/store/apps/details?id=com.setcard.flexlife',
    image: '/assets/projects/flexlife.png',
  },
  {
    id: 'p2',
    missionNumber: 'MISSION #02',
    title: 'SETCARD MOBILE',
    description: 'Mobile payments with QR code and transaction management platform.',
    tags: ['REACT NATIVE', 'REDUX', 'SWIFT'],
    color: '#ffdb58',
    iconType: 'mobile',
    technologies: ['React-Native', 'Redux', 'React Navigation', 'Axios', 'Swift', 'Detox'],
    features: 'Users can pay with QR code. They can see their Setcard budget and transaction history.',
    appStore: 'https://apps.apple.com/us/app/setcard-mobil/id882408961',
    playStore: 'https://play.google.com/store/apps/details?id=com.setcard.nerede',
    image: '/assets/projects/setcard.png',
  },
  {
    id: 'p3',
    missionNumber: 'MISSION #03',
    title: 'SETPOS',
    description: 'Point of Sale system for merchants using NFC and QR code payments.',
    tags: ['REACT NATIVE', 'NFC', 'REACT-QUERY'],
    color: '#ff6b9d',
    iconType: 'mobile',
    technologies: ['React-Native', 'Redux', 'React Navigation', 'Axios', 'React-Query', 'TypeScript', 'NFC'],
    features: 'Users can use their phones as pos device. They can get payment with QR code and Setcard payment card.',
    appStore: 'https://apps.apple.com/tr/app/setpos/id6468772962',
    playStore: 'https://play.google.com/store/apps/details?id=com.setcard.mobilpos',
    image: '/assets/projects/setpos.png',
  },
  {
    id: 'p4',
    missionNumber: 'MISSION #04',
    title: 'MUNI MOBILE APP',
    description: 'Expense management platform with bill scanning and expense analytics.',
    tags: ['REACT NATIVE', 'DETOX', 'SWIFT'],
    color: '#a8e6cf',
    iconType: 'mobile',
    technologies: ['React-Native', 'Redux', 'React Navigation', 'Axios', 'Swift', 'Detox'],
    features: 'Users can manage their expenses, they can scan bills and managers can see the expenses.',
    appStore: 'https://apps.apple.com/us/app/muni-spend-management/id1599044212',
    playStore: 'https://play.google.com/store/apps/details?id=com.muni.mobile',
    image: '/assets/projects/muni.png',
  },
  {
    id: 'p5',
    missionNumber: 'MISSION #05',
    title: 'TAKSIMMETRE APP',
    description: 'Taxi meter amount calculator with map-based address selection.',
    tags: ['REACT NATIVE', 'MAPS', 'ZUSTAND'],
    color: '#ffd3b6',
    iconType: 'mobile',
    technologies: ['React-Native', 'Adapty', 'Zustand', 'Firebase', 'Maps', 'Figma', 'Git'],
    features: 'Users can search and pick address from map and app calculates the amount of taxi prices.',
    appStore: 'https://apps.apple.com/tr/app/taksimmetre/id6739381918?l=tr',
    playStore: 'https://play.google.com/store/apps/details?id=com.taksimmetre',
    image: '/assets/projects/taksimmetre.png',
  },
  {
    id: 'p6',
    missionNumber: 'MISSION #06',
    title: 'RICK AND MORTY APP',
    description: 'Episode information viewer using Rick and Morty API.',
    tags: ['REACT NATIVE', 'AXIOS', 'ANIMATION'],
    color: '#ffaaa5',
    iconType: 'mobile',
    technologies: ['React-Native', 'Android Studio', 'Lottie Animation', 'Axios', 'JavaScript'],
    features: 'Shows the information of the episodes of the Rick and Morty series by calling the data with Axios from Api.',
    appStore: 'https://github.com/salik-a/Rick_Morty_App',
    playStore: 'https://github.com/salik-a/Rick_Morty_App',
    image: '/assets/projects/rickmorty.png',
  },
  {
    id: 'p7',
    missionNumber: 'MISSION #07',
    title: 'TODO APP',
    description: 'Task management application with persistent storage.',
    tags: ['REACT NATIVE', 'ASYNC STORAGE', 'ANIMATION'],
    color: '#ff8b94',
    iconType: 'mobile',
    technologies: ['React-Native', 'Android Studio', 'Lottie Animation', 'Async Storage'],
    features: 'A React-Native ToDoApp using Lottie animation and Async Storage shared on Google Play.',
    playStore: 'https://play.google.com/store/apps/details?id=com.salika.todoapp',
    image: '/assets/projects/todo.png',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'SETCARD',
    period: '2022 - PRESENT // MOBILE DEVELOPER',
    role: 'Mobile Developer',
    description: 'Developing mobile applications with focus on user experience and performance optimization.',
    color: '#30e8c9',
    achievements: [
      'Developed and maintained Setcard Flexlife from scratch with new features and store updates',
      'Planned the design and technical architecture of a new version of Setcard Mobile and contributed to its development',
      'Actively developing Setcard SETPOS with NFC and QR payment integration',
    ],
    tags: ['REACT-QUERY', 'TYPESCRIPT', 'REDUX', 'FIREBASE', 'REACT-NAVIGATION', 'JIRA', 'BITBUCKET'],
  },
  {
    company: 'MUNI',
    period: '2021 - 2022 // MOBILE DEVELOPER',
    role: 'Mobile Developer',
    description: 'Built and deployed mobile app for expense management platform.',
    color: '#ffdb58',
    achievements: [
      'Developed mobile app from scratch for Muni expense management platform',
      'Published app in App Store and Play Store',
    ],
    tags: ['REACT NATIVE', 'JAVASCRIPT', 'REDUX', 'FIREBASE', 'REACT-NAVIGATION'],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor's Degree in Electrical & Electronics Engineering",
    institution: 'MEF University',
    year: '2020',
  },
  {
    degree: 'iOS 101-201 Mobile App Development',
    institution: 'Appcent Academia',
    duration: 'October 2023',
  },
  {
    degree: 'Inavitas-Başarsoft React-Native Bootcamp',
    institution: 'Patika.dev',
    duration: 'September-December 2021',
  },
  {
    degree: 'Istanbul React-Native Bootcamp',
    institution: 'Kodluyoruz',
    duration: '60 Hours, July-August 2021',
  },
  {
    degree: 'Artificial Learning Winter School',
    institution: 'Koç University - İş Bank',
    duration: '2 Days, March 2020',
  },
];

export const SKILLS: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', category: 'language' },
  { name: 'TypeScript', category: 'language' },
  { name: 'Swift', category: 'language' },
  
  // Frameworks & Libraries
  { name: 'React', category: 'framework' },
  { name: 'React Native', category: 'framework' },
  { name: 'React Navigation', category: 'framework' },
  { name: 'Redux', category: 'framework' },
  { name: 'Zustand', category: 'framework' },
  { name: 'React-Query', category: 'framework' },
  
  // Mobile & Backend
  { name: 'Expo', category: 'framework' },
  { name: 'Firebase', category: 'tool' },
  { name: 'Detox', category: 'tool' },
  { name: 'Maestro', category: 'tool' },
  
  // Other Technologies
  { name: 'Axios', category: 'tool' },
  { name: 'HTML', category: 'language' },
  { name: 'CSS', category: 'language' },
  { name: 'Maps API', category: 'tool' },
  { name: 'NFC', category: 'tool' },
  
  // Tools
  { name: 'Android Studio', category: 'tool' },
  { name: 'XCode', category: 'tool' },
  { name: 'GitHub', category: 'tool' },
  { name: 'Git', category: 'tool' },
  { name: 'Bitbucket', category: 'tool' },
  { name: 'Jira', category: 'tool' },
  { name: 'Npm', category: 'tool' },
  { name: 'Claude Code', category: 'tool' },
  { name: 'Figma', category: 'tool' },
  { name: 'Reactotron', category: 'tool' },
];

export const CONTACTS: Contact[] = [
  {
    type: 'email',
    value: 'hello@alpersalik.com',
    url: 'mailto:hello@alpersalik.com',
  },
  {
    type: 'linkedin',
    value: 'linkedin.com/in/alpersalik',
    url: 'https://linkedin.com/in/alpersalik',
  },
  {
    type: 'github',
    value: 'github.com/alpersalik',
    url: 'https://github.com/alpersalik',
  },
];

export const BIO_TEXT = `I'm a passionate React Native Developer specializing in cross-platform mobile applications. I've developed user-friendly mobile applications for companies like Setcard and Muni. I work with React Native, TypeScript, Redux, React-Query, Expo, and Firebase to create seamless user experiences. When I'm not coding, I'm exploring new technologies and best practices to stay at the forefront of mobile development. Connect with me on LinkedIn or Email to learn more!`;
