<template>
  <section id="single-file-component">
    <div class="pics">
      <img :src="singleFileComponent">
    </div>
    <ul class="list">
      <li><h3>Single File Component</h3></li>
      <li>Use vue-loader in company with Webpack</li>
      <li>Use vueify in company with Browserify</li>
      <li>Use vue-cli for bootstrapping</li>
    </ul>
  </section>
</template>

<script>
import singleFileComponent from './single-file-component.png';

export default {
  name: 'single-file-component',
  data() {
    return {
      singleFileComponent,
    };
  },
};
</script>

<style scoped>
#single-file-component {
  display: flex !important;
  align-items: center;
}

.list>li:nth-child(1) {
  list-style-type: none;
}
</style>
