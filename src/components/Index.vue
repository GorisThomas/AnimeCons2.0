<template>
  <div>
    <navigation></navigation>
    <foot></foot>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation';
  import Foot from '@/components/Footer';

  export default {
    name: 'index',
    components: {
      Navigation,
      Foot,
    }
  }
</script>
