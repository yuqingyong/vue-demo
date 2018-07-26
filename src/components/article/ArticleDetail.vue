<template>
	<div class="detail">
		<section class="container">
		  <div class="content-wrap">
		    <div class="content" style="background:#fff;">
		      <header class="article-header">
		        <h1 class="article-title"><a  :title="arDetail.title" >{{arDetail.title}}</a></h1>
		        <div class="article-meta"> <span class="item article-meta-time">
		          <time class="time" data-toggle="tooltip" data-placement="bottom"><i class="glyphicon glyphicon-time"></i> {{arDetail.create_time}}</time>
		          </span> <span class="item article-meta-source" data-toggle="tooltip" data-placement="bottom" ><i class="glyphicon glyphicon-globe"></i> {{arDetail.author}}</span> 

              <span v-if="arDetail.cid === 2" class="item article-meta-category" data-toggle="tooltip" data-placement="bottom" title=""><i class="glyphicon glyphicon-list"></i>技术分享</span> 
              <span v-if="arDetail.cid === 3" class="item article-meta-category" data-toggle="tooltip" data-placement="bottom" title=""><i class="glyphicon glyphicon-list"></i>源码分享</span> 
              <span v-if="arDetail.cid === 4" class="item article-meta-category" data-toggle="tooltip" data-placement="bottom" title=""><i class="glyphicon glyphicon-list"></i>随心笔记</span> 
              <span v-if="arDetail.cid === 5" class="item article-meta-category" data-toggle="tooltip" data-placement="bottom" title=""><i class="glyphicon glyphicon-list"></i>推荐文章</span> 
              <span v-if="arDetail.cid === 7" class="item article-meta-category" data-toggle="tooltip" data-placement="bottom" title=""><i class="glyphicon glyphicon-list"></i>资讯分享</span> 

              <span class="item article-meta-views" data-toggle="tooltip" data-placement="bottom"><i class="glyphicon glyphicon-eye-open"></i> {{arDetail.click}}</span> 
              <span class="item article-meta-comment" data-toggle="tooltip" data-placement="bottom"><i class="glyphicon glyphicon-comment"></i> {{arDetail.comment_num}}</span> 
            </div>
		      </header>
		      <article class="article-content" v-html="arDetail.content">
		      </article>
		      <div class="title" id="comment">
		        <h3>评论</h3>
		      </div>
		      <div id="respond">
		            <div class="comment">
		                <div class="comment-box">
		                    <textarea placeholder="您的评论或留言（必填）" class="user_input" name="content" id="comment-textarea" cols="100%" rows="3" tabindex="3"></textarea>
		                    <div class="comment-ctrl">
		                        <i style="font-size: 30px;padding: 5px;color: #ccc;float: left;" class="fa fa-smile-o" id="emoji_tip"></i>
		                        <input style="height: 30px;float: left;margin-top: 5px;float: left;width: 185px;" class="form-control b-email" id="email" type="text" name="email" placeholder="接收回复的email地址" value="">
		                        <button type="button" name="comment-submit" id="comment-submit" tabindex="4" onclick="add_comment({$art_detail.aid})">评论</button>
		                    </div>
		                </div>
		            </div>
		            <!-- 表情 -->
		            <div class="emoji_div" style="display: none;"></div>
		        </div>
		      <div id="postcomments">
		        <ol id="comment_list" class="commentlist">
		          <!-- <li class="comment-content">
		            <img src="/static/home/images/default_head_img.gif" class="header_img">
		            <span class="comment-f">2018-05-16</span>
		            <div class="comment-main"><p><a class="address" rel="nofollow" target="_blank">yuqingyong</a><br>dkalsjdklasjdlkasjldkasj</p></div>
		          </li> -->
				    </ol>
		      </div>
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
    <textarea id="comments" style="display:none;">{{comments}}</textarea>
	</div>
</template>

<script>
// 引入头部
import Music from '../common/Music.vue'
import HotArticle from '../common/HotArticle.vue'
import Webinfo from '../common/Webinfo.vue'

import {mapGetters} from 'vuex'

export default {
    components:{
      'v-music':Music,
      'hot-article':HotArticle,
      'web-info':Webinfo
    },
    created(){
      this.$store.dispatch('getArticleDetail',this.$route.params);
    	this.$store.dispatch('getComment',this.$route.params);
    },
    computed:{
    	...mapGetters([
    		'webinfo',
        'arDetail',
        'comments'
    	])
    },
}

// // 评论js
// var comment = $("#comments").val();
// show_comment();
// //评论显示模板
// var tpl = "<li class='comment-content'><img src='{header}' class='header_img'><span class='comment-f'>{time}</span><div class='comment-main'><p><a class='address' rel='nofollow' target='_blank'>{name}</a><br>{content}</p></div></li>";
// // 输入框对象
// var user_input = document.getElementsByClassName('user_input')[0];

// $('#emoji_tip').on('click', function(e) {
//     e.stopPropagation();
//     if ($('.emoji_div').find('.emoji').size() == 0) {
//         show_biaoqing();
//     }
//     $('.emoji_div').fadeIn();
// });

// // 显示表情
// function show_biaoqing() {
//     var row = 5, col = 15;
//     var str = '<table class="emoji">';
//     for (var i = 0; i < row; i++) {
//         str += '<tr>';
//         for (var j = 0; j < col; j++) {
//             var n = i * col + j;
//             str += '<td>' + (n > 71 ? '' : ('<img onclick="select_emoji(' + n + ');" src="/static/home/face/' + n + '.gif" />')) + '</td>';
//         }
//         str += '</tr>';
//     }
//     str += '</table>';
//     $('.emoji_div').html(str);
// }

// // 选择表情
// function select_emoji(n) {
//     cursor_insert(user_input, '{{@' + n + '}}');
//     $(".emoji_div").fadeOut();
// }

// // 光标处插入内容
// function cursor_insert(obj, txt) {
//     if (document.selection) {
//         obj.selection.createRange().text = txt;
//     } else {
//         var v = obj.value;
//         var i = obj.selectionStart;
//         obj.value = v.substr(0, i) + txt + v.substr(i);
//         user_input.focus();
//         obj.selectionStart = i + txt.length;
//     }
// }

// // 解析消息中的表情
// function analysis_emoji(str) {
//     var p = /{{@(\d|[1-6]\d|7[01])}}/;
//     if (p.test(str)) {
//         return analysis_emoji(str.replace(p, "<img src='/static/home/face/$1.gif'/>"))
//     } else {
//         return str;
//     }
// }

// //显示评论
// function show_comment(){
//   var str = '';
//   for(var i in comment){
//     var data = comment[i];
//     str += tpl.replace('{header}',data.head_img != 0 ? data.head_img : '/static/home/images/default_head_img.gif').replace('{time}',data.date).replace('{name}',data.username).replace('{content}',analysis_emoji(data.content));
//   }
//   return str;
// }
</script>