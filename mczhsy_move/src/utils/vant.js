/*
 * @Author: liangsir
 * @Date: 2020-05-30 09:17:21
 * @LastEditors: liangsir
 * @LastEditTime: 2020-05-30 11:11:58
 * @Description: 
 */
import Vue from 'vue'

import {
  List,
  Popup,
  Stepper,
  Toast,
  Swipe,
  SwipeItem,
  Dialog,
  Image as VanImage,
  Loading,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Lazyload,
  ActionSheet,
  Tab,
  Tabs,
  Icon,
  Form,
  Field,
  Button,
  Picker,
  CountDown,
  RadioGroup,
  Radio,
  DropdownItem,
  DropdownMenu
} from 'vant';

Vue.use(List);
Vue.use(Popup);
Vue.use(Stepper);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(VanImage);
Vue.use(Loading);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Lazyload);
Vue.use(ActionSheet);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Icon);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Picker);
Vue.use(CountDown);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);


Vue.prototype.$toast = Toast
Vue.prototype.$dailog = Dialog