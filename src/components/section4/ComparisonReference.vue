<template>
  <section id="comparison-reference">
    <div class="pics">
      <img :src="todoMVC">
    </div>
    <ul class="list">
      <li><h3>How to Compare? </h3></li>
      <li>Comparison with Other Frameworks in Vue.js Online Document</li>
      <li>TodoMVC</li>
      <li>Offical Tutorial (Seriously)</li>
    </ul>
  </section>
</template>

<script>
import todoMVC from './todo-mvc.png';

export default {
  name: 'comparison-reference',
  data() {
    return {
      todoMVC,
    };
  },
};
</script>

<style scoped>
#comparison-reference {
  display: flex !important;
  align-items: center;
}

ul>li:nth-child(1) {
  list-style-type: none !important;
}
</style>
