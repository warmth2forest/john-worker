<template>
  <a-card hoverable class="project-card">
  	<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover" />
  	<ul class="ant-card-actions" slot="actions">
  		<li style="width: 33.3333%;"><a-icon type="setting" /></li>
  		<li style="width: 33.3333%;"><a-icon type="edit" /></li>
  		<li style="width: 33.3333%;"> <a-icon type="ellipsis" /></li>
  	</ul>
  	<a-card-meta title="Card title" description="This is the description">
  		<a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />		
  	</a-card-meta>
  </a-card>
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
.project-card {
	width: 250px;
	margin: 0 30px 30px 30px;
}
</style>