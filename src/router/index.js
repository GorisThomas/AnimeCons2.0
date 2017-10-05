import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/Index';
import Map from '@/components/Map';

import OrganisationsLocation from '@/components/OrganisationsLocation';
import OrganisationsAlphabet from '@/components/OrganisationsAlphabet';

import ConventionsLocation from '@/components/ConventionsLocation';
import ConventionsAlphabet from '@/components/ConventionsAlphabet';
import ConventionsDate from '@/components/ConventionsDate';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/map',
      name: 'Map',
      component: Map,
    },
    {
      path: '/organisations-location',
      name: 'OrganisationsLocation',
      component: OrganisationsLocation,
    },
    {
      path: '/organisations-alphabet',
      name: 'OrganisationsAlphabet',
      component: OrganisationsAlphabet,
    },
    {
      path: '/conventions-location',
      name: 'ConventionsLocation',
      component: ConventionsLocation,
    },
    {
      path: '/conventions-alphabet',
      name: 'ConventionsAlphabet',
      component: ConventionsAlphabet,
    },
    {
      path: '/conventions-date',
      name: 'ConventionsDate',
      component: ConventionsDate
    }
  ],
});
