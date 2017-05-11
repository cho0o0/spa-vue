<template>
  <section :data-background-image="bg" class="restful-api">
    <p>RESTful API</p>
    <ul>
      <li>Roy Fielding in his 2000 PhD dissertation "Architectural Styles and the Design of Network-based Software Architectures" at UC Irvine</li>
      <li>Almost all of the API usage can be covered by CRUDs</li>
      <li>With devices in different sizes keeping hitting the market, consistenting backend interface became really necessary</li>
    </ul>
  </section>
</template>

<script>
import bg from './mobile.jpg';

export default {
  name: 'restful-api',
  data() {
    return {
      bg,
    };
  },
};
</script>

<style>
.restful-api {
  text-shadow: 2px 2px 4px grey;
  color: white;
}
</style>
