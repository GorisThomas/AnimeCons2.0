<template>
<article class="col-md-8 col-md-offset-2 eventcard">
  <div class="row">
    <div class="col-md-12 eventheader">
      <div class="col-md-6">
        <h4>{{name}}</h4>
      </div>
      <div class="col-md-6">
        <h4 v-if="isEvent">{{date}}</h4>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-8">
      <h4>general info</h4>
      <p>Location: {{location}}</p>
      <p>Link: <a href="#">{{link}}</a></p>
      <p>Description: {{description}}</p>
      <input type="button" value="Read more" v-if="isEvent">
    </div>
    <div class="col-md-4">
      <img class="img-responsive" src="../assets/images/placeholder.svg" alt="Some picture here">
    </div>
  </div>
</article>
</template>

<script>
export default {
  name: 'conventioncard',
  props: [
    'isEvent',
    'name',
    'date',
    'location',
    'link',
    'description'
  ]
}
</script>
