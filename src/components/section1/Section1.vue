<template>
  <section>
    <section><h1>From MultiPage Application To Single Page Application</h1></section>
    <mvc></mvc>
    <partial-page-rendering></partial-page-rendering>
    <ajax></ajax>
    <google-map></google-map>
    <jquery></jquery>
    <restful-api></restful-api>
    <twitter></twitter>
    <spa-book></spa-book>
  </section>
</template>

<script>
import Mvc from './Mvc';
import PartialPageRendering from './PartialpageRendering';
import Ajax from './Ajax';
import GoogleMap from './GoogleMap';
import Jquery from './Jquery';
import RestfulApi from './Restfulapi';
import Twitter from './Twitter';
import SpaBook from './SpaBook';

export default {
  name: 'Section1-Single-Page-Application',
  components: {
    Mvc,
    PartialPageRendering,
    Ajax,
    GoogleMap,
    Jquery,
    RestfulApi,
    Twitter,
    SpaBook,
  },
};
</script>
