import Vue from 'vue'
import { Table, TableColumn, button, MessageBox, Message, Dialog, Form, FormItem, Input } from 'element-ui'

Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message;
Vue.prototype.$prompt = MessageBox.prompt
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(button)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
