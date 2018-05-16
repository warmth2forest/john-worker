const user = {
	state: {
		info: {
			description: '',
			displayName: '',
			dn: '',
			mail: ''
		},
		name: '',
		groups: [],
		permission: []
	},
	mutations: {
		setUserInfo (state, info) {
			state.info = info
		},
		setUserName (state, name) {
			state.name = name
		},
		setUserGroups (state, groups) {
			state.groups = groups
		},
		setUserPermission (state, permission) {
			state.permission = permission
		},
	}
}

export default user