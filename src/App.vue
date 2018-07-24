<template>
  <div id="app">
    <v-header></v-header>
    <!-- 轮播图 -->
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
	      <article-list></article-list>

	      <nav class="pagination">
	        <ul>
	        </ul>
	      </nav>
	    </div>
	  </div>
	  <aside class="sidebar">
	    <div class="fixed">
	      <div class="widget widget-tabs">
	        <ul class="nav nav-tabs" role="tablist">
	          <li role="presentation" class="active"><a href="#notice" aria-controls="notice" role="tab" data-toggle="tab" >统计信息</a></li>
	          <li role="presentation"><a href="#contact" aria-controls="contact" role="tab" data-toggle="tab" >联系站长</a></li>
	        </ul>
	        <div class="tab-content">
	          <div role="tabpanel" class="tab-pane contact active" id="notice">
	            <h2>日志总数:{{webinfo.all_article_num}}篇
	              </h2>
	              <h2>网站运行:
	              <span id="sitetime">{{webinfo.web_day}}天</span></h2>
	          </div>
	            <div role="tabpanel" class="tab-pane contact" id="contact">
	              <h2>QQ:
	                  <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1425219094&amp;site=qq&amp;menu=yes" target="_blank" rel="nofollow" data-toggle="tooltip" data-placement="bottom" title=""  data-original-title="QQ:1425219094">1425219094</a>
	              </h2>
	              <h2>Email:
	              <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=1425219094@qq.com" target="_blank" data-toggle="tooltip" rel="nofollow" data-placement="bottom" title=""  data-original-title="Email:1425219094@qq.com">1425219094@qq.com</a></h2>
	          </div>
	        </div>
	      </div>
	      <div class="widget widget_search">
	        <form class="navbar-form" action="" method="get">
	          <div class="input-group">
	            <input type="text" name="word" class="form-control" size="35" placeholder="请输入关键字" maxlength="15" autocomplete="off">
	            <span class="input-group-btn">
	            <button class="btn btn-default btn-search" name="search" type="submit">搜索</button>
	            </span> </div>
	        </form>
	      </div>
	    </div>
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
	<v-footer></v-footer>
    <router-view/>
  </div>
</template>

<script>
// 引入头部
import Header from './components/common/Header.vue'
import Rili from './components/common/Rili.vue'
import Music from './components/common/Music.vue'
import Footer from './components/common/Footer.vue'
import ArticleList from './components/common/ArticleList.vue'
import HotArticle from './components/common/HotArticle.vue'

import {mapGetters} from 'vuex'

export default {
    components:{
      'v-header':Header,
      'v-rili':Rili,
      'v-music':Music,
      'v-footer':Footer,
      'article-list':ArticleList,
      'hot-article':HotArticle
    },
    created(){
    	this.$store.dispatch('getWebInfo');
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
