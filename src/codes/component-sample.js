const html = `<!-- HTML Code -->
<div id="test">
<bar></bar>
<!-- <foo></foo> -->
</div>
`;

const js = `// JavaScript Code
var Bar = {
  template: '<p>{{greetings}}, I am bar</p>',
  data() {
    return {
      greetings: 'hello',
    };
  },
};

/*
var Foo = {
  template: '<p>{{greetings}}, I am foo</p>',
  data() {
    return {
      greetings: 'hi',
    };
  },
};
*/

var vm = new Vue({
  el: '#test',
  components: { Bar, /* Foo, */ },
});
`;

const css = `/* CSS Code */
#test {
  font-size: 3rem;
  color: white;
}
`;

export default { html, js, css };
