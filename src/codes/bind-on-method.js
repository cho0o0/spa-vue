const html = `<!-- HTML Code -->
<div id="test">
  <p>Price Calculator</p>
  <input v-model="price" type="number"></input>
  <p>Final Price: <span>{{finalPrice}}</span></p>
  <!-- Check --> 
  <button
    v-on:click="reset"
    v-bind:disabled="price === 0 ? true : false"
  >Reset</button>
  <!--
    class and style can also be binded!
  -->



  <footer 
    :class="'easter-egg-' + price"
    v-if="finalPrice === 1031"
  >Human Cooperation Integration</footer>
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
  // Check
  methods: {
    reset() {
      this.price = 0;
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

.easter-egg-955 {
  color: white;
}
`;

export default { html, js, css };
