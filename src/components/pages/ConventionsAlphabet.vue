<template>
<<<<<<< HEAD
<div>
  <navigation></navigation>
  <ConventionCard v-for="item in sortedArray" :key="item.name" :img="item.img" :name="item.name" :date="item.date" :address="item.address" :city="item.city" :region="item.region" :link="item.link" :description="item.description" :isEvent="true"></ConventionCard>

</div>
</template>

<script>
import Navigation from '@/components/Navigation';
import ConventionCard from '@/components/ConventionCard';
import JsonData from '@/assets/search_content.json';

export default {
  name: 'ConventionsAlphabet',
  components: {
    Navigation
  },
  computed: {
    sortedArray: function() {
      function compare(a, b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      }
      return JsonData.conventions.sort(compare);
=======
  <div>
    <navigation></navigation>
    <div class="text-center col-md-12 eventbody">
      <ConventionCard v-for="item in JsonData" :name="item.name"
      :date="item.date" :location="item.location" :link="item.link"
      :description="item.description" :isEvent="true"></ConventionCard>
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
>>>>>>> 552fad63c19287f42a64233ef215d6a41c134510
    }

  }
}
</script>
