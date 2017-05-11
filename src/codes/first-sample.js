const html = `<!-- HTML Code -->
<div id="test">
Foo {{bar}}
</div>
`;

const js = `// JavaScript Code
var vm = new Vue({
  el: '#test',
  data: {
    bar: 'new-bar'
  }
});
`;

const css = `/* CSS Code */
#test {
  font-size: 3rem;
  color: white;
}
`;

export default { html, js, css };
