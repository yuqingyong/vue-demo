<template>
	<div class="search">
		<section class="container">
		  <div class="content-wrap">
		    <div class="content">
		      <div class="title">
		        <h3 style="line-height: 1.3">搜索关键词：{{searchList.keyword}}</h3>
		      </div>
		      
		      <article v-if="searchList.res == ''" class="excerpt excerpt-1">暂时没有相关文章！</article>
		      
		      <article v-for="(item,index) in searchList.res" :key="index" class="excerpt excerpt-1">
		      <router-link class="focus" :title="item.title"  :to="'/article/detail/'+item.aid" target="_blank" tag="a">
		      <img class="thumb" :src="'http://www.yuqingyong.cn'+item.path" style="display: inline;"></router-link>
		            <header>
		            	<a class="cat" v-if="item.cid === 2">
		                    技术分享
		                <i></i></a>
		                <a class="cat" v-if="item.cid === 3">
		                    源码分享
		                <i></i></a>
		                <a class="cat" v-if="item.cid === 4">
		                    随心笔记
		                <i></i></a>
		                <a class="cat" v-if="item.cid === 5">
		                    推荐文章
		                <i></i></a>
		                <a class="cat" v-if="item.cid === 7">
		                    资讯分享
		                <i></i></a>
		                <h2><a target="_blank" >{{item.title}}</a>
		                </h2>
		            </header>
		            <p class="meta">
		                <time class="time"><i class="glyphicon glyphicon-time"></i>{{item.create_time}}</time>
		                <span class="views"><i class="glyphicon glyphicon-eye-open"></i>{{item.click}}</span> <a class="comment" title="评论" target="_blank" ><i class="glyphicon glyphicon-comment"></i>{{item.comment_num}}</a>
		            </p>
		            <p class="note">{{item.description}}</p>
		        </article>
		    </div>
		  </div>
		  <aside class="sidebar">
		    <web-info></web-info>
		    <div class="widget widget_hot">
		          <h3>最热文章</h3>
		          <ul>
		            <hot-article></hot-article>
		          </ul>
		      </div>
		     <div class="widget widget_sentence">    
		        <v-music></v-music>
		     </div>
		  </aside>
		</section>
	</div>	
</template>

<script>
// 引入头部
import Music from './common/Music.vue'
import ArticleList from './common/ArticleList.vue'
import HotArticle from './common/HotArticle.vue'
import Webinfo from './common/Webinfo.vue'

import {mapGetters} from 'vuex'

export default {
    components:{
      'v-music':Music,
      'article-list':ArticleList,
      'hot-article':HotArticle,
      'web-info':Webinfo
    },
    created(){
    	this.$store.dispatch('searchArticle',this.$route.params)
    },
    computed:{
    	...mapGetters([
    		'searchList'
    	])
    }
}
</script>

<style scoped>
</style>