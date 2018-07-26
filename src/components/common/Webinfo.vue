<template>
	<div class="webinfo">
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
	        <form class="navbar-form">
	          <div class="input-group">
	            <input type="text" v-model="keyword" class="form-control" size="35" placeholder="请输入关键字" maxlength="15" autocomplete="off">
	            <span class="input-group-btn">
	            <button class="btn btn-default btn-search" @click="searchArticle">搜索</button>
	            </span> </div>

	        </form>
	      </div>
	    </div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    created(){
    	this.$store.dispatch('getWebInfo');
    },
    data(){
    	return {
    		keyword:''
    	}
    },
    computed:{
    	...mapGetters([
    		'webinfo'
    	])
    },
    methods:{
    	searchArticle(){
    		if(this.keyword !== ''){
    			this.$store.dispatch('searchArticle',{'keyword':this.keyword});
    		}else{
    			alert('查询条件不能为空');
    		}
    	}
    }
}
</script>