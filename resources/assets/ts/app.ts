import Vue from 'vue';
import './bootstrap';
import ExampleComponent from './components/ExampleComponent.vue';

new Vue({
    el: '#app',
    render: h => h(ExampleComponent)
});