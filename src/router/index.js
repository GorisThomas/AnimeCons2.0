import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/Index';
import Map from '@/components/pages/Map';

import OrganisationsLocation from '@/components/pages/OrganisationsLocation';
import OrganisationsAlphabet from '@/components/pages/OrganisationsAlphabet';

import ConventionsLocation from '@/components/pages/ConventionsLocation';
import ConventionsAlphabet from '@/components/pages/ConventionsAlphabet';
import ConventionsDate from '@/components/pages/ConventionsDate';

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
