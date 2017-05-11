<template>
  <section>
    <section><h2>Frameworks Comparison</h2></section>
    <react-code></react-code>
    <angular2-code></angular2-code>
    <learning-cost></learning-cost>
    <architecture></architecture>
    <lifecycle></lifecycle>
    <popularity></popularity>
    <comparison-reference></comparison-reference>
  </section>
</template>

<script>
import Architecture from './Architecture';
import Lifecycle from './Lifecycle';
import Angular2Code from './Angular2Code';
import ReactCode from './ReactCode';
import LearningCost from './LearningCost';
import Popularity from './Popularity';
import ComparisonReference from './ComparisonReference';

export default {
  name: 'Section4-Comparison',
  components: {
    Architecture,
    Lifecycle,
    Angular2Code,
    ReactCode,
    LearningCost,
    Popularity,
    ComparisonReference,
  },
};
</script>
