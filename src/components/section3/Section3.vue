<template>
  <section>
    <section><h1>Say hello to Vue.js</h1></section>
    <playground :title="playgrounds.first.title" :code="playgrounds.first.code"></playground>
    <playground :title="playgrounds.modelAndComputed.title" :code="playgrounds.modelAndComputed.code"></playground>
    <playground :title="playgrounds.bindOnMethod.title" :code="playgrounds.bindOnMethod.code"></playground>    
    <playground :title="playgrounds.component.title" :code="playgrounds.component.code"></playground>
    <playground :title="playgrounds.propsDirectiveFor.title" :code="playgrounds.propsDirectiveFor.code"></playground>
    <single-file-component></single-file-component>
    <other-jargons></other-jargons>
  </section>
</template>

<script>
import Playground from './Playground';

import firstSample from '../../codes/first-sample';
import modelComputedSample from '../../codes/model-computed-sample';
import componentSample from '../../codes/component-sample';
import bindOnMethodSample from '../../codes/bind-on-method';
import propsDirectiveFor from '../../codes/props-directive-for';

import SingleFileComponent from './SingleFileComponent';
import OtherJargons from './OtherJargons';

export default {
  name: 'Section3-Vue',
  components: { Playground, SingleFileComponent, OtherJargons },
  data() {
    return {
      playgrounds: {
        first: {
          title: 'First Vue Sample',
          code: firstSample,
        },
        modelAndComputed: {
          title: 'Form Binding and Computed Properties',
          code: modelComputedSample,
        },
        bindOnMethod: {
          title: 'Properties and Event Binding (And More)',
          code: bindOnMethodSample,
        },
        component: {
          title: 'Vue Component Sample',
          code: componentSample,
        },
        propsDirectiveFor: {
          title: 'Component Usage & Custom Directive & Animation',
          code: propsDirectiveFor,
        },
      },
    };
  },
};
</script>
