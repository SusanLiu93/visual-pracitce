import Vue from 'vue';
import App from './app.vue';
import { Chart } from '@antv/g2';
import {Scene ,PointLayer,HeatmapLayer } from '@antv/l7'
import {GaodeMap,Mapbox } from '@antv/l7-maps'
Vue.prototype.Chart = Chart;

Vue.prototype.Chart = Chart;


Vue.prototype.Scene = Scene;


Vue.prototype.PointLayer = PointLayer;

Vue.prototype.GaodeMap = GaodeMap;

Vue.prototype.Mapbox = Mapbox;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
