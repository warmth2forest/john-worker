<template>
  <a-modal ref="modal" :visible="visible" :footer="null" @cancel="handleCancel" class="projects-setting-modal" :bodyStyle="bodyStyle" :width="modalWidth">
  	<h4 slot="title" style="margin: 0; text-align: center;">项目设置</h4>
  	<div class="projects-setting-modal-content">
  		<div class="projects-setting-modal-content-menu">
  			<a-menu :defaultSelectedKeys="['1']" style="width: 150px; height: 450px">
  				<a-menu-item key="1">
  					<a-icon type="mail" />
  					项目信息
  				</a-menu-item>
  				<a-menu-item key="2">
  					<a-icon type="calendar" />
  					项目偏好
  				</a-menu-item>
  				<a-menu-item key="3">
  					<a-icon type="appstore" />
  					任务权限
  				</a-menu-item>
  				<a-menu-item key="4">
  					<a-icon type="ellipsis" />
  					更多
  				</a-menu-item>
  			</a-menu>
  		</div>
  		<div class="projects-setting-modal-content-info">
	  		<a-form :layout="formLayout">
	  			<a-form-item label='项目名称' :labelCol="formItemLayout.labelCol" :wrapperCol="formItemLayout.wrapperCol">
	  				<a-input placeholder='写一个产品名称' v-model="infoForm.name" />
	  			</a-form-item>
	  			<a-form-item label='项目简介' :labelCol="formItemLayout.labelCol" :wrapperCol="formItemLayout.wrapperCol">
	  				<a-textarea placeholder="介绍一下这个项目" :autosize="{ minRows: 2, maxRows: 6 }" v-model="infoForm.description" />
	  			</a-form-item>
	  			<a-form-item label='项目公开性' :labelCol="formItemLayout.labelCol" :wrapperCol="formItemLayout.wrapperCol">
	  				<a-select labelInValue :defaultValue="{ key: 'public' }" @change="typeChange">
					    <a-select-option value="public">公有项目(所有成员可访问，仅成员可以查看编辑)</a-select-option>
					    <a-select-option value="private">私有项目(仅成员可以查看编辑)</a-select-option>
					  </a-select>
	  			</a-form-item>
	  			<a-form-item label='项目拥有者' :labelCol="formItemLayout.labelCol" :wrapperCol="formItemLayout.wrapperCol">
	  				<a-select labelInValue :defaultValue="defaultOwner" @change="ownerChange">
					    <a-select-option v-for="(owner,index) in ownerList" :value="owner.key" :key="index">
					    	{{ owner.value }}
					    </a-select-option>
					  </a-select>
	  			</a-form-item>
	  			<a-divider></a-divider>
	  			<div label='' :labelCol="formItemLayout.labelCol" :wrapperCol="formItemLayout.wrapperCol" style="text-align: right; padding-top: 10px">
	  				<a-button type="primary" :disabled="!formPass" style="width: 80px" @click="submitInfo(infoForm)">保存</a-button>
	  			</div>
	  		</a-form>
	  	</div>
  	</div>
  </a-modal>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      modalWidth: 800,
      infoForm: {
      	name: null,
      	description: null,
      	type: 'public',
      	owner: 'john_xiao'
      },
      bodyStyle: {
      	height: '500px'
      },
      formLayout: 'vertical',
      formItemLayout: {
      	labelCol: { 
      		span: 4 
      	},
      	wrapperCol: {
      		span: 24
      	}
      },
      defaultOwner: {
      	key: 'john_xiao'
      },
      ownerList: [{
      	key: 'john_xiao',
      	value: 'john_xiao'
      },{
      	key: 'shangwenhe',
      	value: 'shangwenhe'
      }],
      formPass: false
    }
  },
  methods: {
  	handleCancel() {
  		this.visible = false
  	},
  	ownerChange(value) {
  		this.infoForm.owner = value
  		!this.formPass && this.validate(this.infoForm)
  	},
  	typeChange(value) {
  		this.infoForm.type = value
  		!this.formPass && this.validate(this.infoForm)
  	},
  	validate(form) {
  		let isPass = true
  		for(let key in form) {
  			if(!form[key]) {
  				isPass = false
  			}
  		}
  		this.formPass = isPass
  	},
  	submitInfo(infoForm) {
  		console.log(infoForm)
  		this.$message.success('提交成功');
  	}
  },
  watch: {
  	'infoForm.name'(nval, oval) {
  		this.validate(this.infoForm)
  	},
  	'infoForm.description'(nval, oval) {
  		this.validate(this.infoForm)
  	}
  },
  mounted() {
  	console.log(this.$refs.modal)
  }
}
</script>

<style scoped>
.projects-setting-modal .projects-setting-modal-content {
	display: flex;
}
.projects-setting-modal .projects-setting-modal-content .projects-setting-modal-content-info {
	width: 100%;
	padding: 20px 15px 20px 30px;
	height: 450px;
	overflow: auto;
}
</style>