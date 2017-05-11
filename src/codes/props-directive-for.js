const html = `<!-- HTML Code -->
<div id="test">
  <p class="title">Simple Todo List</p>
  
  <!-- @ is a shorthand of v-on -->
  <input
    @keyup.enter="addItem"
    v-model="input"
    v-focus
  ></input>

  <!-- : is a shorthand of v-bind -->
  <!-- class name here will be merged to component itselves' class name -->
  <item-component
    class="item"
    v-for="(item, index) in items"
    :key="item"
    :id="index"
    :task="item"
  ></item-component>
</div>
`;

const js = `// JavaScript Code

// event hub is used for listening event in parent component from child.
var eventHub = new Vue();

// register a global custom directive called v-focus
Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted(el) {
    // Focus the element
    el.focus();
  }
});

var itemComponent = {
  props: ['id', 'task'],
  template: '<transition name="fade">'
    + '<p :class="completed">'
    + '<span class="task" @click="check">{{task}}</span>'
    + '<span class="delete" @click="remove">X</span>'
    + '</p>'
    + '</transition>'
  ,
  data() {
    return {
      done: false,
    };
  },
  methods: {
    check() {
      this.done = !this.done;
    },
    remove() {
      eventHub.$emit('delete-item', this.id);
    },
  },
  computed: {
    completed() {
      return this.done ? 'completed' : 'not-completed';
    },
  },
}

var vm = new Vue({
  el: '#test',
  data: {
    input: '',
    items: [],
  },
  components: {
    itemComponent,
  },
  methods: {
    addItem() {
      // add item
      this.items.unshift(this.input);
      // reset input
      this.input = '';
    },
  },
  created() {
    eventHub.$on('delete-item', (id) => {
      // remove item from items array by index
      this.items.splice(id, 1);
    });
  },
  // clean up all the listeners before destoried
  beforeDestroy() {
    eventHub.$off();
  },
});
`;

const css = `/* CSS Code */
.title {
  color: white;
  font-size: 3rem;
}

input {
  min-height: 40px;
  font-size: 36px;
  width: 100%;
}

.item {
  background-color: #d35400;
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 32px;
  font-size: 28px;
  border-radius: 10px;
  border: 4px solid #e67e22;
}

.item.completed {
  background-color: #95a5a6;
}

.item.completed > .task {
  text-decoration: line-through;
}

.delete {
  color: white;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
`;

export default { html, js, css };
