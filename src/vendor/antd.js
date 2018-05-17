import { 
	Button, 
	message, 
	Card, 
	Input, 
	Icon, 
	Avatar, 
	Tabs, 
	AutoComplete, 
	Col, 
	Row, 
	Progress, 
	Modal, 
	Select, 
	Collapse, 
	Timeline,
	Tree,
	Form,
	Popconfirm,
	Dropdown,
	Menu,
	Divider
} from 'vue-antd-ui'

const install = (Vue) => {
	Vue.component(Button.name, Button)
	Vue.component(Card.name, Card)
	Vue.component(Card.Meta.name, Card.Meta)
	Vue.component(Input.name, Input)
	Vue.component(Input.TextArea.name, Input.TextArea)
	Vue.component(Input.Search.name, Input.Search)
	Vue.component(Icon.name, Icon)
	Vue.component(Avatar.name, Avatar)
	Vue.component(Tabs.name, Tabs)
	Vue.component(Tabs.TabPane.name, Tabs.TabPane)
	Vue.component(AutoComplete.name, AutoComplete)
	Vue.component(Col.name, Col)
	Vue.component(Row.name, Row)
	Vue.component(Progress.name, Progress)
	Vue.component(Modal.name, Modal)
	Vue.component(Select.name, Select)
	Vue.component(Select.Option.name, Select.Option)
	Vue.component(Collapse.name, Collapse)
	Vue.component(Collapse.Panel.name, Collapse.Panel)
	Vue.component(Timeline.name, Timeline)
	Vue.component(Timeline.Item.name, Timeline.Item)
	Vue.component(Tree.name, Tree)
	Vue.component(Form.name, Form)
	Vue.component(Form.Item.name, Form.Item)
	Vue.component(Popconfirm.name, Popconfirm)
	Vue.component(Dropdown.name, Dropdown)
	Vue.component(Dropdown.Button.name, Dropdown.Button)
	Vue.component(Menu.name, Menu)
	Vue.component(Menu.Item.name, Menu.Item)
	Vue.component(Divider.name, Divider)
	Vue.prototype.$confirm = Modal.confirm
	Vue.prototype.$message = message
}

export default { install }