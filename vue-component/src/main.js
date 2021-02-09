import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'
import VueWebComponent from './App'

const CustomElement = wrap(Vue, VueWebComponent)

window.customElements.define('vue-component', CustomElement)