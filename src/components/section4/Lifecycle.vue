<template>
  <section id="lifecycle-comparison">
    <h3>Component Lifecycle</h3>
    <fragment-slides :slide="this.$options.name">
      <div slot="slides" class="fragment-slides">
        <div>
          <p>React</p>
          <img :src="react">
        </div>
        <div>
          <p>Angular2</p>
          <img :src="angular">
        </div>
        <div>
          <p>Vue.js2</p>
          <img :src="vue">
        </div>
      </div>
    </fragment-slides>
  </section>
</template>

<script>
import react from './react-lifecycle.png';
import angular from './angular-hooks-in-sequence.png';
import vue from './vue-instance-lifecycle.png';
import FragmentSlides from './FragmentSlides';

export default {
  name: 'lifecycle-comparison',
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
