<template>
  <section>
    <img :src="GoogleMap">
    <footer class="footer">https://thinkit.co.jp/free/article/0612/22/2/</footer>
  </section>
</template>

<script>
import GoogleMap from './google-maps.png';

export default {
  name: 'google-maps',
  data() {
    return {
      GoogleMap,
    };
  },
};
</script>
