<template>
  <div class="google-map"></div>
</template>

<script>
  export default {
    name: 'google-map',
    mounted: function(){
      const element = document.getElementById('map');
      const options = {
        zoom: 7,
        center: new google.maps.LatLng(55.80433203464817,11.422361607812501)
      }
      const map = new google.maps.Map(element, options);
    }
  };
</script>
