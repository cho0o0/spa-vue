<template>
  <div id="app" class="reveal">
      <div class="slides">
        <cover></cover>
        <section1></section1>
        <section2></section2>
        <section3></section3>
        <section4></section4>
        <end></end>
      </div>
  </div>
</template>

<script>
import Cover from './components/Cover';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/Section4';
import End from './components/End';

const Reveal = require('reveal.js');

export default {
  name: 'app',
  components: {
    Cover,
    Section1,
    Section2,
    Section3,
    Section4,
    End,
  },
  mounted() {
    Reveal.initialize({
      history: true,
    });
  },
};
</script>

<style>
#app section {
  max-height: 100vh !important;
}

.footer {
  font-size: 18px !important;
  margin-top: 3rem !important;
}
</style>
