<template>
  <div class="main-header">
  	<div class="main-header-select">
  		<a-auto-complete class="projects-select" placeholder="搜索个人项目" :filterOption="filterOption" :dataSource="dataSource">
  			<a-input class="projects-select-input">
  				<a-icon slot="suffix" type="search" class="certain-category-icon" />
  			</a-input>
  		</a-auto-complete>
  	</div>
  	<div class="main-header-logo">
  		<a>John Worker</a>
  	</div>
  	<div class="main-header-me">
  		<a-dropdown :trigger="['click']">
  			<a class="ant-dropdown-link">
  			  <a-avatar style="color: #fff; backgroundColor: #64c6dc">U</a-avatar>
  		  </a>
  		  <a-menu slot="overlay" @click="onClick">
  		  	<a-menu-item v-for="i in 4" :key="i">{{i}}st menu item</a-menu-item>
  		  </a-menu>
  		</a-dropdown>
  		<a class="main-header-icon"><a-icon type="message" /></a>
  		<a class="main-header-icon"><a-icon type="bell" /></a>
  		<a class="main-header-icon" style="margin-left: 7px"><a-icon type="question-circle-o" /></a>
  		<div class="main-heade-others">
  			<a>日历</a>
  		</div>
  		<div class="main-heade-others">
  			<a>我的</a>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataSource: ['近期完成任务', '近期有更新的任务', '我创建的任务']
    }
  },
  methods: {
  	filterOption(input, option) {
      return option.componentOptions.children[0].text.toUpperCase().indexOf(input.toUpperCase()) >= 0
    },
    onClick({ key }) {
      console.log(`Click on item ${key}`);
    }
  }
}
</script>

<style scoped>
	.main-header {
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		box-shadow: 0 1px 1px rgba(0,0,0,.08);
  	position: fixed;
  	top: 0;
  	z-index: 9;
  	background: #fff;
	}
	.main-header .main-header-select,.main-header-logo,.main-header-me {
		width: 33%;
		margin: auto;
	}
	.main-header .main-header-me {
		display: flex;
		height: 50px;
		flex-direction: row-reverse;
		padding-right: 20px;
	}
	.main-header .main-header-me .ant-dropdown-link {
		height: 100%;
		padding-top: 10px;
		margin-left: 5px;
	}
	.main-header .main-header-me .main-header-icon {
		height: 50px;
		margin-right: 20px;
		line-height: 50px;
		color: #a6a6a6;
		font-size: 18px
	}
	.main-header .main-header-me .main-header-icon:hover {
		color: #1890ff;
	}
	.main-header .main-header-me .main-heade-others {
		height: 20px;
		line-height: 20px;
		margin: 15px 16px 15px 0;
		padding-right: 16px;
		color: #a6a6a6;
		border-right: 1px #e5e5e5 solid;
	}
	.main-header .main-header-me .main-heade-others a {
		color: #a6a6a6;
	}
	.main-header .main-header-me .main-heade-others a:hover {
		color: #1890ff;
	}
	.main-header .main-header-select {
		width: 33%;
		margin: auto;
		padding: 0 13% 0 50px;
	}
	.main-header .main-header-select .projects-select {
		width: 100%;
		height: 50px;
    padding-top: 9px;
	}
	.main-header .main-header-logo {
		text-align: center;
	}
	.main-header .main-header-logo a {
		color: #2c3e50;
	  font-size: 18px;
	  font-weight: 800
	}
</style>