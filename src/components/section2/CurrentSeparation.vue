<template>
  <section>
    <img :src="componentImage">
  </section>
</template>

<script>
import componentImage from './components.png';

export default {
  name: 'new-separation',
  data() {
    return {
      componentImage,
    };
  },
};
</script>
