import Vue from 'vue'
import { Button, Input, Form, FormItem, Message,MenuItemGroup,Menu,MenuItem,Submenu,Breadcrumb,BreadcrumbItem,Dropdown,DropdownMenu,DropdownItem,Tag,Table,TableColumn } from 'element-ui'
//Message是一个函数，跟别的不一样，别的用法事一个标签
Vue.prototype.$message = Message;
//注册组件，注册就是把button和这个项目关联起来
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(MenuItemGroup)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tag)
Vue.use(Table)
Vue.use(TableColumn)
