<template>
  <a-row class="projects">
  	<div class="my-projects">
  		<h3>我拥有的项目</h3>
  		<div class="my-projects-list">
  			<project-card v-for="i in 4" :key="i"></project-card>
  		</div>
  	</div>
  	<div class="my-participated-projects">
  		<h3>我参与的项目</h3>
  		<div class="my-participated-projects-list">
  			<project-card v-for="i in 4" :key="i"></project-card>
  		</div>
  	</div>
    <project-setting-modal></project-setting-modal>
  </a-row>
</template>

<script>
import projectCard from '../components/projects/project-card.vue'
import projectSettingModal from '../components/modal/project-setting-modal.vue'
export default {
	components: {
		projectCard,
    projectSettingModal
	},
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
.projects {
	width: 100%;
	padding: 30px 100px 20px 100px;
}
.projects .my-projects-list,.my-participated-projects-list{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.projects .my-projects h3 {
	display: block;
	margin: 20px 0 20px 30px;
}
.projects .my-participated-projects h3 {
	display: block;
	margin: 20px 0 20px 30px;
}
</style>