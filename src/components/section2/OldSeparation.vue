<template>
  <section>
    <h2>Separation of Presentation and Content</h2>
    <h4>Separation of HTML, CSS and JavaScript</h4>
    <img :src="oldSeparation">
    <footer>http://fastwebstart.com/modern-html-tutorial/</footer>
  </section>
</template>

<script>
import oldSeparation from './html-css-javascript.png';

export default {
  name: 'old-separation',
  data() {
    return {
      oldSeparation,
    };
  },
};
</script>

<style scoped>
footer {
  margin-top: 0.2rem !important;
  font-size: 16px !important;
}  
</style>
