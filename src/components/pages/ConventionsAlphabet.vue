<template>
<div>
  <navigation isConvention="true"></navigation>
  <div class="text-center col-md-12 eventbody">
    <h1>Conventions ordered alphabetically</h1>
    <ConventionCard v-for="item in JsonData" :key="item.name" :img="item.img"
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
    name: 'ConventionsAlphabet',
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
    created: function() {
      this.sortedArray();
    },
    methods: {
      sortedArray: function() {
        function compare(a, b) {
          if (a.name < b.name)
            return -1;
          if (a.name > b.name)
            return 1;
          return 0;
        }
        this.JsonData = JsonData.conventions.sort(compare);
      }
    }
  }
</script>
