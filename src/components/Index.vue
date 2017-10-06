<template>
  <div>

    <navigation></navigation>
    <div class="text-center col-md-12 eventbody">
      <ConventionCard v-for="item in JsonData.conventions" :name="item.name"
      :date="item.date" :location="item.location" :link="item.link"
      :description="item.description" :isEvent="true">
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
    data: function(){
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
