<template>
	<div class="header">
		<header class="header">
		  <nav class="navbar navbar-default" id="navbar">
		    <div class="container">
		      <div class="header-topbar hidden-xs link-border">
		        <ul class="site-nav topmenu">
		          <!-- {if condition="$Think.session.users != ''"}
		            <li><a href="#}">欢迎您:{$Think.session.users.username}</a></li>
		            <li><a href="{:url('home/Index/log_out')}">退出</a></li>
		          {else/} -->
		              <li><a href="">登录</a></li>
		              <li><a href="" rel="nofollow" >注册</a></li>
		              <li data-toggle="modal" data-target="#myModal"><a  onclick="" title="第三方登录" >
		                <i class="fa fa-rss">
		                </i> 第三方登录
		            </a></li>
		          <!-- {/if} -->
		        </ul> 勤记录 懂分享</div>
		      <div class="navbar-header">
		        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#header-navbar" aria-expanded="false"> <span class="sr-only"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
		        <h1 class="logo hvr-bounce-in"><a href="" title="星辰网络博客"><img src="/static/images/logo.png" alt="星辰网络博客" class="animated bounce"></a></h1>
		      </div>
		      <div class="collapse navbar-collapse" id="header-navbar">
		        <ul class="nav navbar-nav navbar-right" style="margin-top:35px;margin-left:160px;">
		          <router-link to="/" target="_blank" tag="li"><a data-cont="星辰网络博客" title="星辰网络博客" href="">首页</a></router-link>
		          <router-link to="/article/news" target="_blank" tag="li"><a data-cont="最新资讯" title="最新资讯" href="">最新资讯</a></router-link>
		          <router-link to="/article/jishu" target="_blank" tag="li"><a data-cont="IT技术笔记" title="IT技术笔记" href="">IT技术笔记</a></router-link>
		          <router-link to="/share" target="_blank" tag="li"><a data-cont="源码分享" title="源码分享" href="">源码分享</a></router-link>
		          <router-link to="/chat" target="_blank" tag="li"><a data-cont="随心笔记" title="随心笔记" href="" >随心笔记</a></router-link>
		          <router-link to="/release" target="_blank" tag="li"><a data-cont="需求发布" title="需求发布" href="" >需求发布</a></router-link>
		          <router-link to="/message" target="_blank" tag="li"><a data-cont="心语心愿" title="心语心愿" href="" >心语心愿</a></router-link>
		        </ul>
		      </div>
		    </div>
		  </nav>
		</header>


		<!-- 弹窗 -->
		<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
							&times;
						</button>
						<h4 class="modal-title" id="myModalLabel">
							第三方登录
						</h4>
					</div>
					<div class="modal-body">
						<a href="http://www.yuqingyong.cn/home/Regnotify/qqsend">QQ登录</a>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">关闭
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import 'animate.css/animate.css'
	export default {
		
	}
</script>

<style scoped>
</style>