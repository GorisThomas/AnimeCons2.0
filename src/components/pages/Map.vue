<template>
  <div>
    <navigation isMap="true"></navigation>
    <GoogleMap></GoogleMap>
    <foot></foot>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation';
  import Foot from '@/components/Footer';
  import GoogleMap from '@/components/GoogleMap';

  export default {
    name: 'Map',
    components: {
      Navigation,
      Foot,
      GoogleMap
    }
  }
</script>
