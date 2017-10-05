<template>
  <div>
    <navigation></navigation>
    <google-map id="map"></google-map>
    <foot></foot>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation'
  import GoogleMap from '@/components/GoogleMap'
  import Foot from '@/components/Footer'

  export default {
    name: 'Map',
    components: {
      Navigation,
      GoogleMap,
      Foot
    }
  }
</script>
