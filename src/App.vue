<template>
  <a-row id="app">
    <router-view/>
  </a-row>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "Helvetica Neue", Helvetica, Arial, "Monaco", "Menlo", "Consolas", sans-serf;
  color: #2c3e50;
  background: #f5f5f5;
}
.projects-setting-modal .projects-setting-modal-content .projects-setting-modal-content-info label {
	font-size: 16px!important;
	display: block;
	margin-bottom: 8px
}
.project-item .project-item-tool-bar .project-function-tab .tab .ant-tabs-nav-wrap {
	text-align: center;
	line-height: 28px;
}
</style>
