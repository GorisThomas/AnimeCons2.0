<template>
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
    }

  }
}
</script>
