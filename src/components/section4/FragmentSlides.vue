<template>
  <div>
    <div class="navigator">
      <span class="previous" @click.stop.prevent="previous"><<</span>
      <span class="next" @click.stop.prevent="next">>></span>
    </div>
    <slot name="slides">loading {{ slide }}</slot>
  </div>
</template>

<script>
export default {
  props: ['slide'],
  data() {
    return {
      currentPart: 0,
    };
  },
  methods: {
    previous() {
      if (this.currentPart > 0) {
        [].forEach.call(this.$el.querySelectorAll('.fragment-slides>*'), (el) => {
          // eslint-disable-next-line
          el.style.display = 'none';
        });
        const toShow = this.currentPart - 1;
        const newEl = this.$el.querySelectorAll('.fragment-slides>*')[toShow];
        newEl.style.display = 'block';
        this.currentPart = toShow;
      }
    },
    next() {
      if (this.currentPart < this.$el.querySelectorAll('.fragment-slides>*').length - 1) {
        [].forEach.call(this.$el.querySelectorAll('.fragment-slides>*'), (el) => {
          // eslint-disable-next-line
          el.style.display = 'none';
        });
        const toShow = this.currentPart + 1;
        const newEl = this.$el.querySelectorAll('.fragment-slides>*')[toShow];
        newEl.style.display = 'block';
        this.currentPart = toShow;
      }
    },
  },
};
</script>

<style scoped>
.navigator .previous {
  position: absolute;
  left: 0;
  top: 50vh;
  z-index: 10;
}

.navigator .next {
  position: absolute;
  right: 0;
  top: 50vh;
  z-index: 10;
}

.fragment-slides>* {
  display: none;
}

.fragment-slides>*:nth-child(1) {
  display: inline-block;
}
</style>
