<template>
  <section>
    <img :src="Twitter">
  </section>
</template>

<script>
import Twitter from './twitter.png';

export default {
  name: 'twitter',
  data() {
    return {
      Twitter,
    };
  },
};
</script>
