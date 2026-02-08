
import React from 'react';
import { Project, Experience, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'STORY', href: '#about', font: 'marker' },
  { label: 'LOGS', href: '#experience', font: 'marker' },
  { label: 'MISSIONS', href: '#projects', font: 'marker' },
  { label: 'CALL', href: '#contact', font: 'marker' },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    missionNumber: 'MISSION #01',
    title: 'SETCARD FLEXLIFE',
    description: 'A fintech superpower application. QR payments, balance tracking, and ultra-secure tech.',
    tags: ['REACT NATIVE', 'REDUX'],
    color: '#30e8c9',
    iconType: 'mobile',
  },
  {
    id: 'p2',
    missionNumber: 'MISSION #02',
    title: 'MUNI DELIVERY',
    description: 'High-volume, real-time logistics interface. Speed-optimized user experience for heroes.',
    tags: ['REACT', 'MAPS API'],
    color: '#ffdb58',
    iconType: 'delivery',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'SETCARD',
    period: '2022 - PRESENT // MOBILE DEV',
    role: 'Mobile Developer',
    description: 'Developing the "Setcard Flexlife" app. Fighting bugs and deploying features!',
    color: '#ffdb58',
  },
  {
    company: 'MUNI',
    period: '2021 - 2022 // FRONTEND DEV',
    role: 'Frontend Developer',
    description: 'Building dashboards for ultra-fast delivery. Speed was the superpower.',
    color: '#30e8c9',
  },
];
