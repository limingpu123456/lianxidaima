import Vue from 'vue';
// 按需引入组件
import { Search, Swipe, SwipeItem, Icon, Tag, List, Cell, Grid, GridItem, DropdownMenu, DropdownItem, Empty, Toast, Tabbar, TabbarItem, Row, Col, Popup, Form, Field, Button, Dialog, GoodsAction, GoodsActionIcon, GoodsActionButton, Sku, Checkbox, CheckboxGroup, Card, SubmitBar, Stepper } from 'vant';



// 目前项目已经配置好自动按需引入样式
// 手动按需引入：
// import 'vant/lib/button/style';
// import 'vant/lib/stepper/style';
// 整个ui框架的样式都引入进来：
// import 'vant/lib/index.css';

// 注册组件
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Icon);
Vue.use(Tag);
Vue.use(List);
Vue.use(Cell);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Empty);
Vue.use(Toast);

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Popup);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Sku);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Card);
Vue.use(SubmitBar);
Vue.use(Stepper);
