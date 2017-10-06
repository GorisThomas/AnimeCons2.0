<template>
<div>
  <navigation isIndex="true"></navigation>
  <div class="text-center col-md-12 eventbody">
    <h1>Welcome to Anime cons</h1>
    <h2>Your quick overview of the danish anime conventions</h2>
    <h3>Upcoming events</h3>
    <ConventionCard v-for="item in JsonData.conventions" :key="item.name" :img="item.img"
     :name="item.name" :date="item.date" :address="item.address" :city="item.city"
     :region="item.region" :link="item.link" :description="item.description"
     :isEvent="true">
     </ConventionCard>
  </div>
  <foot></foot>
</div>
</template>
<script>
  import Navigation from '@/components/Navigation';
  import ConventionCard from '@/components/ConventionCard';
  import Foot from '@/components/Footer';
  import JsonData from '@/assets/search_content.json';

  export default {
    name: 'index',
    data: function() {
      return {
        JsonData
      };
    },
    components: {
      Navigation,
      ConventionCard,
      Foot,
    }
  };
</script>
