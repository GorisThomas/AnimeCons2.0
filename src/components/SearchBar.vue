<template>
<!-- This is made with https://github.com/indrimuska/jquery-editable-select -->
  <select id="searchselect">
    <option v-for="item in JsonData.conventions">{{item.name}}</option>
  </select>
</template>


<script>
import JsonData from '@/assets/search_content.json';
import '@/assets/javascript/jquery-3.2.1.slim.min.js';
import editableSelect from 'jquery-editable-select';

export default {
  name: 'searchbar',
  data: function(){
    return {
      JsonData
    };
  },
  mounted: function(){
    jQuery('#searchselect').editableSelect();
  },
  updated: function(){
    jQuery('#searchselect').editableSelect();
  }
}
</script>
