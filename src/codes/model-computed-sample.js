const html = `<!-- HTML Code -->
<div id="test">
  <p>Price Calculator</p>
  <input v-model="price" type="number"></input>
  <p>Final Price: <span>{{finalPrice}}</span></p>
</div>
`;

const js = `// JavaScript Code
var vm = new Vue({
  el: '#test',
  data: {
    price: 0,
    tax: 0.08,
  },
  computed: {
    finalPrice() {
      return Math.round(this.price * (1 + this.tax));
    },
  },
});
`;

const css = `/* CSS Code */
p {
  font-size: 1rem;
  color: grey;
}

p>span {
  font-size: 3rem;
  color: white;
}

p:nth-child(1) {
  font-size: 2rem;
  color: white;
}

input {
  min-height: 40px;
  font-size: 36px;
}
`;

export default { html, js, css };
