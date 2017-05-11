<template>
  <section>
    <section><h2>Libraries Appearance</h2></section>
    <ancient></ancient>
    <triad></triad>
    <components-thinking></components-thinking>
    <separation-of-concerns></separation-of-concerns>
    <old-separation></old-separation>
    <problems-of-old-separation></problems-of-old-separation>
    <current-separation></current-separation>
  </section>
</template>

<script>
import Ancient from './Ancient';
import Triad from './Triad';
import ComponentsThinking from './ComponentsThinking';
import SeparationOfConcerns from './SeparationOfConcerns';
import OldSeparation from './OldSeparation';
import ProblemsOfOldSeparation from './ProblemsOfOldSeparation';
import CurrentSeparation from './CurrentSeparation';

export default {
  name: 'Section2-Libraries',
  components: {
    Ancient,
    Triad,
    ComponentsThinking,
    SeparationOfConcerns,
    OldSeparation,
    ProblemsOfOldSeparation,
    CurrentSeparation,
  },
};
</script>
