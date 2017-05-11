<template>
  <section>
    <img :src="pinterest">
    <p>{{title}}</p>
  </section>
</template>

<script>
import pinterest from './pinterest.png';

export default {
  name: 'partialpage-rendering',
  data() {
    return {
      pinterest,
      title: 'Partial-Page Rendering',
    };
  },
};
</script>
