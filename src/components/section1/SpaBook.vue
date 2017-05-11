<template>
  <section class="spa-book">
    <img :src="SinglePageApplicationBook">
    <ul>
      <li>Take advantage of AJAX and RESTful API</li>
      <li>Decrease page transition</li>
      <li>JavaScript enabling as a precondition</li>
    </ul>
  </section>
</template>

<script>
import SinglePageApplicationBook from './spa-book.jpg';

export default {
  name: 'spa-book',
  data() {
    return {
      SinglePageApplicationBook,
    };
  },
};
</script>

<style scoped>
.spa-book {
  display: flex !important;
  align-items: center;
}
</style>
