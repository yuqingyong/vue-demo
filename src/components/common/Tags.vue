<template>
	<div class="tag">
		<div class="widget widget_sentence">
	        <h3>标签云</h3>
	        <div class="widget-sentence-content">
	            <ul class="plinks ptags">                
	                <li v-for="(item,index) in tags">
	                	<!-- <a href="" :title="item.title" draggable="false">{{item.tname}}</a> -->
	                	<router-link draggable="false" :to="'/searchArticle/'+item.tid" target="_blank" tag="a">{{item.tname}}</router-link>
	                </li> 
	            </ul>
	        </div>
	      </div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default{
		created(){
			this.$store.dispatch('getTags');
		},
		computed:{
			...mapGetters([
				'tags'
			])
		}
	}
</script>