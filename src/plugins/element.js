import Vue from 'vue'
import { Button, Input, DatePicker, Select, Option, Menu, MenuItem, Submenu, Tooltip, Form, FormItem, Checkbox, Switch} from 'element-ui'

[ Button, Input, DatePicker, Select, Option, Menu, MenuItem, Submenu, Tooltip, Form, FormItem, Checkbox, Switch].forEach(item => {
  Vue.use(item)
});