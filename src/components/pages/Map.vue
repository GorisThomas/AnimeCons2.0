<template>
  <div>
    <navigation></navigation>
    <div id="map"></div>
    <foot></foot>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation'
  import Foot from '@/components/Footer'

  export default {
    name: 'Map',
    components: {
      Navigation,
      Foot
    }
  }
</script>
