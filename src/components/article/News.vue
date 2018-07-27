<template>
	<div class="jishu">
		<section class="container">
		  <div class="content-wrap">
		    <div class="content">
		      <article-list :cid="cid" :tid="tid" :page="page"></article-list>
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
import Music from '../common/Music.vue'
import HotArticle from '../common/HotArticle.vue'
import Tags from '../common/Tags.vue'
import ArticleList from '../common/ArticleList.vue'

export default {
    components:{
      'v-music':Music,
      'article-list':ArticleList,
      'hot-article':HotArticle,
      'v-tag':Tags
    },
    data(){
        return {
            page:1,
            cid:'7',
            tid:'all'
        }
    },
}
</script>

<style scoped>
</style>