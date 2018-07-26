<template>
	<div class="hot-ariticle">
		<li v-for="(item,index) in hotArticle" :key="index">
			<!-- <router-link :title="item.title" to="/article/detail" tag="a"> -->
			<router-link :title="item.title"  :to="'/article/detail/'+item.aid" target="_blank" tag="a">
			<!-- <a :title="item.title" href="/article/detail"> -->
        	<span class="thumbnail">
            <img class="thumb" :data-original="item.path" :src="'http://www.yuqingyong.cn'+item.path" :alt="item.title"  style="display: block;">
        	</span><span class="text">{{item.title}}</span><span class="muted"><i class="glyphicon glyphicon-time"></i>
            {{item.create_time}}
        	</span><span class="muted"><i class="glyphicon glyphicon-eye-open"></i>{{item.click}}</span></router-link>
    	</li>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default{
		created(){
			this.$store.dispatch('getHotArticle');
		},
		computed:{
			...mapGetters([
				'hotArticle'
			])
		}
	}
</script>

<style scoped></style>