<template>
  <section class="playground">
    <h3 class="title">{{title}}</h3>
    <div>
      <span class="switch-html" @click.stop="switchDisplay('html')">HTML</span>
      <span class="switch-js" @click.stop="switchDisplay('js')">JS</span>
      <span class="switch-css" @click.stop="switchDisplay('css')">CSS</span>
      <span class="switch-view" @click.stop="switchDisplay('view')">View</span>
    </div>
    <div class="container">
      <div class="editor">
        <textarea class="code html" v-model="html"></textarea>
        <textarea class="code js" v-model="js"></textarea>
        <textarea class="code css" v-model="css"></textarea>    
        <button class="run-button" @click="run">Run</button>
      </div>
      <div class="view">
        <iframe class="result" :id="iframeId"></iframe>
      </div>
    </div>
  </section>
</template>

<script>
const Base64 = require('js-base64').Base64;

export default {
  name: 'playground',
  props: ['title', 'code'],
  data() {
    return {
      html: '',
      js: '',
      css: '',
    };
  },
  created() {
    // initialize html, js and css
    this.html = this.code.html;
    this.js = this.code.js;
    this.css = this.code.css;
  },
  computed: {
    iframeId() {
      const title = this.title;
      const id = Base64.encode(title);
      return id;
    },
  },
  methods: {
    run() {
      const iframe = document.getElementById(this.iframeId);
      /* eslint-disable no-useless-escape */
      const vue = '<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.6/vue.min.js" crossorigin="anonymous"><\/script>';
      const js = `<script>${this.js}<\/script>`;
      const css = `<style>${this.css}<\/style>`;
      const code = `<html><head></head><body>${vue}${this.html}${js}${css}</body></html>`;
      const encodedCode = Base64.encode(code);
      const dataUrl = `data:text/html;charset=utf-8;base64,${encodedCode}`;
      iframe.src = dataUrl;
    },
    switchDisplay(elementClass) {
      const el = this.$el.getElementsByClassName(elementClass)[0];
      if (el.style.display === 'none') {
        el.style.display = 'block';
        this.$el.querySelector(`.switch-${elementClass}`).classList.remove('turned-off');
      } else {
        el.style.display = 'none';
        this.$el.querySelector(`.switch-${elementClass}`).classList.add('turned-off');
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  height: 40vh;
}

.editor {
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 2;
}

.run-button {
  -webkit-appearance: none;
  min-height: 40px;
  font-size: 24px;
}

.editor>.code {
  height: 100%;
  font-size: 24px;
}

.view {
  flex-grow: 1;
}

.result {
  height: 100%;
}

.turned-off {
  color: black;
}
</style>
