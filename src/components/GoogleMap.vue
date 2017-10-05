<template>
  <div class="google-map"></div>
</template>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFGo6SefyZj7q3hVujTNYqlOIKId4xs-k"></script>
<script>
  export default {
    name: 'google-map',
    mounted: function(){
      const element = document.getElementById('map');
      const options = {
        zoom: 14,
        center: new google.maps.LatLng(51.501527,-0.1921837)
      }
      const map = new google.maps.Map(element, options);
    }
  };
</script>
