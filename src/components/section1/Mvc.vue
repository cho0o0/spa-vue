<template>
  <section>
    <img :src="mvc">
    <footer class="footer">Client >> Request >> Server >> View Rendering >> Response >> Client</footer>
    <footer class="footer">Laravel - my first framework by Maksim Surguy</footer>
  </section>
</template>

<script>
import mvc from './mvc.png';

export default {
  name: 'mvc',
  data() {
    return {
      mvc,
    };
  },
};
</script>

<style scoped>
.footer {
  font-size: 20px;
  margin-top: 0.2rem !important;
}

.footer:nth-of-type(2) {
  font-size: 16px !important;
}
</style>
