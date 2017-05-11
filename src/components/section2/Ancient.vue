<template>
  <section id="ancient">
    <div class="pics">
      <img :src="knockoutjs">
      <img :src="backbonejs">
    </div>
    <ul class="list">
      <li><h3>MV* frameworks</h3></li>
      <li>2010/7/5 KnockoutJS released by Steave Sanderson from Microsoft<sup>MVVM</sup></li>
      <li>2010/10/13 Backbone.js released by Jeremy Ashkenas (Author of CoffeeScript)<sup>MVP</sup></li>
    </ul>
  </section>
</template>

<script>
import knockoutjs from './knockoutjs.png';
import backbonejs from './backbonejs.png';

export default {
  name: 'ancient',
  data() {
    return {
      knockoutjs, backbonejs,
    };
  },
};
</script>

<style scoped>
#ancient {
  display: flex !important;
  align-items: center;
}

sup {
  color: grey;
  font-size: 0.8rem !important;
}

ul>li:nth-child(1) {
  list-style-type: none !important;
}
</style>
