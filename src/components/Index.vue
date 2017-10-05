<template>
  <div>

    <navigation></navigation>
    <div class="text-center col-md-12 eventbody">
      <ConventionCard :isEvent="true"></ConventionCard>
      <ConventionCard :isEvent="false"></ConventionCard>
      <ConventionCard :isEvent="true"></ConventionCard>

    </div>
    <foot></foot>

  </div>
</template>

<script>
  import Navigation from '@/components/Navigation';
  import ConventionCard from '@/components/ConventionCard';
  import Foot from '@/components/Footer';

  export default {
    name: 'index',
    components: {
      Navigation,
      ConventionCard,
      Foot,
    }
  }
</script>
