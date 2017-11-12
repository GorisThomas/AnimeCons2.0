<template>
  <gmap-map
    :center="center"
    :zoom="6"
    style="width: 500px; height: 300px"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
  /////////////////////////////////////////
  // New in 0.4.0
  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyD-T1aHDZQQHsmcRr41jylKFIP2IhB65SU',
      v: '3.29',
      // libraries: 'places', //// If you need to use place input
    }
  });

  export default {
    data () {
      return {
        center: {lat: 56.1460465, lng: 10.202726100000064},
        markers: [{
          position: {lat: 55.813039, lng: 12.370791000000054}
        }, {
          position: {lat: 55.6695273, lng: 12.564626399999952}
        },{
          position: {lat: 55.68111589999999, lng: 12.552841199999989}
        },{
          position: {lat: 56.404908, lng: 10.886688999999933}
        },{
          position: {lat: 56.157452, lng: 8.964520499999935}
        },{
          position: {lat: 55.40375599999999, lng: 10.402370000000019}
        },]
      }
    }
  }
</script>
