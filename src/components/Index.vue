<template>
	<div class="index">
		<section class="container">
		  <div class="content-wrap">
		    <div class="content">
		        
		        <div id="focusslide" class="carousel slide" data-ride="carousel">
		        <ol class="carousel-indicators">
		            <li data-target="#focusslide" v-for="(item,index) in webinfo.banner" :key="index" :data-slide-to="index"></li>
	            </ol>
		        <div class="carousel-inner" role="listbox">
		            <div class="item active" v-for="(m,n) in webinfo.banner" :key="n" v-if="n==1">
			            <a :href="m.url" target="_blank" :title="m.mname">
			            <img :src="m.img" :alt="m.mname" class="img-responsive"></a>
		            </div>
		            <div class="item" v-for="(m,n) in webinfo.banner" :key="n" v-if="n!=1">
			            <a :href="m.url" target="_blank" :title="m.mname">
			            <img :src="m.img" :alt="m.mname" class="img-responsive"></a>
		            </div>
		        </div>
		        <a class="left carousel-control" href="#focusslide" role="button" data-slide="prev" rel="nofollow"> <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> <span class="sr-only">上一个</span> </a> <a class="right carousel-control" href="#focusslide" role="button" data-slide="next" rel="nofollow"> <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> <span class="sr-only">下一个</span> </a> </div>

		        <article class="excerpt-minic excerpt-minic-index">
		            <h2><span class="red">【公告】</span><a target="_blank" href="/" title="" >本站源码下载</a>
		            </h2>
		            <p class="note">本站的源码可供免费下载，下载地址是https://github.com/yuqingyong/yqyblog，无论是转载任何文章，都无需打招呼！</p>
		        </article>
		      <div class="title">
		        <h3>最新发布</h3>
		      </div>

		      <!-- 文章列表组件 -->
		      <article-list :cid="cid" :tid="tid" :page="page"></article-list>
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
		     <!--日历插件开始-->
		     <!-- <v-rili></v-rili> -->
		     <!--日历插件结束-->
		     <div class="widget widget_sentence">    
		        <v-music></v-music>
		     </div>
		     <div class="widget widget_sentence">
		      <h3>友情链接</h3>
		      <div class="widget-sentence-link">
		        <a href="" title="博客链接" target="_blank" >博客链接</a>&nbsp;&nbsp;&nbsp;
		      </div>
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
    	this.$store.dispatch('getWebInfo');
    },
    data(){
    	return {
    		cid:'all',
    		tid:'all',
    		page:1
    	}
    },
    computed:{
    	...mapGetters([
    		'webinfo'
    	])
    },
}
</script>

<style scoped>
</style>