<template>
  <section id="architecture-comparison">
    <h3>Component & Storage</h3>
    <fragment-slides :slide="this.$options.name">
      <div slot="slides" class="fragment-slides">
        <div id="react-architecture">
          <p>React</p>
          <img :src="react">
        </div>
        <div id="angular-architecture">
          <p>Angular2</p>
          <img :src="angular">
        </div>
        <div id="vue-architecture">
          <p>Vue.js2</p>
          <img :src="vue">
        </div>
      </div>
    </fragment-slides>
  </section>
</template>

<script>
import react from './react-redux-flow.jpg';
import angular from './angular-architecture.png';
import vue from './vuex-flow.png';
import FragmentSlides from './FragmentSlides';

export default {
  name: 'architecture-comparison',
  components: {
    FragmentSlides,
  },
  data() {
    return {
      react,
      angular,
      vue,
    };
  },
};
</script>
