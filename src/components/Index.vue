<template>
  <div>

    <navigation></navigation>
    <div class="text-center col-md-12 eventbody">
      <EventCard></EventCard>
      <EventCard></EventCard>
      <EventCard></EventCard>

    </div>
    <foot></foot>

  </div>
</template>

<script>
  import Navigation from '@/components/Navigation';
  import EventCard from '@/components/EventCard';
  import Foot from '@/components/Footer';

  export default {
    name: 'index',
    components: {
      Navigation,
      EventCard,
      Foot,
    }
  }
</script>
