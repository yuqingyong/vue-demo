<template>
	<div class="list">
		<article class="excerpt excerpt-1" style="">
      		<a class="focus" href="" title="标题" target="_blank" ><img class="thumb" data-original="http://www.yuqingyong.cn/upload/101thumb.png" src="http://www.yuqingyong.cn/upload/101thumb.png" alt="关键词"  style="display: inline;"></a>
            <header>
            	<a class="cat" href="{:url('home/Articles/detail',array('aid'=>$val['aid']))}" title="{$val.cid}" >资讯分享<i></i></a>
                <h2><a href="" title="标题" target="_blank" >标题</a></h2>
            </header>
            <p class="meta">
                <time class="time"><i class="glyphicon glyphicon-time"></i>2018-7-24 3:15</time>
                <span class="views"><i class="glyphicon glyphicon-eye-open"></i> 22</span> 
                <a class="comment" href="#" title="评论" target="_blank" ><i class="glyphicon glyphicon-comment"></i>3</a>
            </p>
            <p class="note">文章描述</p>
        </article>
	</div>
</template>

<script>
	export default{

	}
</script>

<style scoped></style>