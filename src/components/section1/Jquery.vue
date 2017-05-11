<template>
  <section>
    <img :src="Jquery">
  </section>
</template>

<script>
import Jquery from './jq.png';

export default {
  name: 'jquery',
  data() {
    return {
      Jquery,
    };
  },
};
</script>
