<template>
  <section id="triad">
    <div class="pics">
      <img :src="triad">
    </div>
    <ul class="list">
      <li><h3>MV* frameworks</h3></li>
      <li>Angular: 2012 Jun.(1.0) / 2016 Sep.(2.0)</li>
      <li>React: 2013 Mar.(0.3) / 2017 Apr.(15.4.2)</li>
      <li>Vue: 2014 Feb.(0.1) / 2016 Oct.(2.0)</li>
    </ul>
  </section>
</template>

<script>
import triad from './triad.png';

export default {
  name: 'triad',
  data() {
    return {
      triad,
    };
  },
};
</script>

<style scoped>
#triad {
  display: flex !important;
  align-items: center;
}

.list>li:nth-child(1) {
  list-style-type: none;
}
</style>
