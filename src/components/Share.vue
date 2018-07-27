<template>
	<div>
		<section class="container">
		  <div class="content-wrap">
		    <div class="content">
		      <div class="title">
		        <h3 style="line-height: 1.3">源码分享</h3>
		      </div>
		        <article class="excerpt excerpt-1"><a class="focus" href="https://github.com/yuqingyong/yqyblog" title="源码分享" target="_blank" ><img class="thumb" data-original="/static/home/images/benzhanyuanma.png" src="http://www.yuqingyong.cn/static/home/images/benzhanyuanma.png" alt="星辰网络博客站点源码分享"  style="display: inline;"></a>
		          <header><a class="cat" href="https://github.com/yuqingyong/yqyblog" title="" >源码分享<i></i></a>
		            <h2><a href="https://github.com/yuqingyong/yqyblog" title="星辰网络博客站点源码分享" target="_blank" >星辰网络博客站点源码分享</a></h2>
		          </header>
		            <p class="meta">
		            <time class="time"><i class="glyphicon glyphicon-time"></i>2017-07-21</time>
		            </p>
		          <p class="note">本站使用了tp5.0的框架开发，一个个人博客的网站系统，多次重构并整理网站代码....</p>
		          <p class="git"><span><a href="https://github.com/yuqingyong/yqyblog">查看GitHub>></a></span><span><a href="http://github.com/yuqingyong/yqyblog/zipball/master">下载ZIP源码>></a></span></p>
		        </article>
		        
		        <article class="excerpt excerpt-1"><a class="focus" href="https://github.com/yuqingyong/laravel" title="源码分享" target="_blank" ><img class="thumb" data-original="/static/home/images/benzhanyuanma.png" src="http://www.yuqingyong.cn/static/home/images/benzhanyuanma.png" alt="星辰网络博客站点源码分享"  style="display: inline;"></a>
		          <header><a class="cat" href="https://github.com/yuqingyong/laravel" title="" >源码分享<i></i></a>
		            <h2><a href="https://github.com/yuqingyong/laravel" title="星辰网络博客站点源码分享" target="_blank" >laravel加layui后台</a></h2>
		          </header>
		            <p class="meta">
		            <time class="time"><i class="glyphicon glyphicon-time"></i>2017-07-21</time>
		            </p>
		          <p class="note">使用laravel5.4和layui编写的一个后台管理....</p>
		          <p class="git"><span><a href="https://github.com/yuqingyong/laravel">查看GitHub>></a></span><span><a href="http://github.com/yuqingyong/laravel/archive/master.zip">下载ZIP源码>></a></span></p>
		        </article>
		    </div>
		  </div>
		  <aside class="sidebar">
		    <v-tag></v-tag>
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
import HotArticle from './common/HotArticle.vue'
import Tags from './common/Tags.vue'

export default {
    components:{
      'v-music':Music,
      'hot-article':HotArticle,
      'v-tag':Tags
    },
    data(){
        return {
            page:1,
            cid:'2',
            tid:'all'
        }
    },
}
</script>
<style scoped>
	.git {margin-top:50px;text-align:right;}
	.git span{margin-right: 10px;}
</style>