<template>
  <div class="project-item">
  	<div class="project-item-tool-bar">
  		<div class="breadcrumb">
  			<a-breadcrumb>
  				<a-breadcrumb-item href="">
  					首页
  				</a-breadcrumb-item>
  				<a-breadcrumb-item href="">
  					<a-dropdown :trigger="['click']">
  						<a href="#">
					      项目一 <a-icon type="down" />
					    </a>
					    <a-menu slot="overlay">
					      <a-menu-item key="0">
					        <a>项目二</a>
					      </a-menu-item>
					      <a-menu-item key="1">
					        <a>项目三</a>
					      </a-menu-item>
					    </a-menu>
  					</a-dropdown>
  				</a-breadcrumb-item>
  			</a-breadcrumb>
  		</div>
  		<div class="project-function-tab">
  			<a-tabs class="tab" defaultActiveKey="1">
			    <a-tab-pane tab="任务" key="1"></a-tab-pane>
			    <a-tab-pane tab="分享" key="2"></a-tab-pane>
			    <a-tab-pane tab="文件" key="3"></a-tab-pane>
			    <a-tab-pane tab="日程" key="4"></a-tab-pane>
			    <a-tab-pane tab="群聊" key="5"></a-tab-pane>
			  </a-tabs>
  		</div>
  		<div class="project-tool-list">
  			<a>
  				<a-icon type="idcard" />
  				1
  			</a>
  			<a>
  				<a-icon type="eye-o" />
  				视图
  			</a>
  			<a>
  				<a-icon type="bars" />
  				菜单
  			</a>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
.project-item {

}
.project-item .project-item-tool-bar {
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	box-shadow: 0 1px 1px rgba(0,0,0,.08);
	line-height: 50px;
	background: #fff
}
.project-item .project-item-tool-bar .breadcrumb,.project-function-tab,.project-tool-list {
	width: 33%;
}
.project-item .project-item-tool-bar .breadcrumb {
	height: 50px;
	margin-top: 13px;
	padding-left: 53px;
}
.project-item .project-item-tool-bar .breadcrumb span {
	font-size: 15px;
}
.project-item .project-item-tool-bar .project-tool-list {
	text-align: right;
	padding-right: 20px;
}
.project-item .project-item-tool-bar .project-tool-list a {
	color: #00000073;
	margin-right: 5px;
	padding-left: 5px;
}
.project-item .project-item-tool-bar .project-tool-list a:hover {
	color: #1890ff;
}
</style>