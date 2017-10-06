<template>
  <div>
    <navigation></navigation>
    <div class="text-center col-md-12 eventbody">
      <h1>Organisations ordered by location</h1>
      <h2>Zealand</h2>
      <ConventionCard v-for="item in sortRegion('Zealand')" :key="item.name" :img="item.img"
       :name="item.name" :date="item.date" :address="item.address" :city="item.city"
       :region="item.region" :link="item.link" :description="item.description"
       :isEvent="false">
       </ConventionCard>
     </div>
     <div class="text-center col-md-12 eventbody">
       <h2>Funen</h2>
       <ConventionCard v-for="item in sortRegion('Funen')" :key="item.name" :img="item.img"
        :name="item.name" :date="item.date" :address="item.address" :city="item.city"
        :region="item.region" :link="item.link" :description="item.description"
        :isEvent="false">
        </ConventionCard>
     </div>
       <div class="text-center col-md-12 eventbody">
       <h2>Jutland</h2>
       <ConventionCard v-for="item in sortRegion('Jutland')" :key="item.name" :img="item.img"
        :name="item.name" :date="item.date" :address="item.address" :city="item.city"
        :region="item.region" :link="item.link" :description="item.description"
        :isEvent="false">
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
    name: 'OrganisationsLocation',
    data: function() {
      return {
        JsonData
      }
    },
    components: {
      Navigation,
      ConventionCard,
      Foot
    },
    methods: {
      sortedArray: function() {
        function compare(a, b) {
          if (a.city < b.city)
            return -1;
          if (a.city > b.city)
            return 1;
          return 0;
        }
        this.JsonData = JsonData.organisations.sort(compare);
      },
      sortRegion: function(region) {
        var result = [];
        for (var item in JsonData.organisations) {
          var object = JsonData.organisations[item];
          if (object.region == region) {
            result.push(object);
          }
        }
        return result;
      }
    }
  }
</script>
