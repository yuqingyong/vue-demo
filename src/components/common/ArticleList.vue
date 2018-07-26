<template>
	<div class="list">
		<article class="excerpt excerpt-1" v-for="(item,index) in article.list.data" :key="index">
            <router-link class="focus" :title="item.title"  :to="'/article/detail/'+item.aid" target="_blank" tag="a">
      		<img class="thumb" :data-original="item.path" :src="'http://www.yuqingyong.cn'+item.path" alt="关键词"  style="display: inline;">
            </router-link>
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
                <h2><a title="标题" target="_blank" >{{item.title}}</a></h2>
            </header>
            <p class="meta">
                <time class="time"><i class="glyphicon glyphicon-time"></i>{{item.create_time}}</time>
                <span class="views"><i class="glyphicon glyphicon-eye-open"></i> {{item.click}}</span> 
                <a class="comment" href="#" title="评论" target="_blank" ><i class="glyphicon glyphicon-comment"></i>{{item.comment_num}}</a>
            </p>
            <p class="note">{{item.description}}</p>
        </article>
        <ul class="pagination">
            <li><a href="javascript:;" @click="prePage">&laquo;</a></li>
            <li :class="[item==current_page ? 'active' : '']" v-for="(item) in pageNum" @click="curPage(item)"><a href="javascript:;">{{item}}</a></li>
            <li><a href="javascript:;" @click="nextPage">&raquo;</a></li>
        </ul>
	</div>
</template>

<script>
    import {mapGetters} from 'vuex'

	export default{
        created(){
            // 请求文章列表数据  
            this.$store.dispatch('getArticleList',{'cid':this.cid,'tid':this.tid,'page':this.current_page});
        },
        data(){
            return {
                current_page:1,
                cid:'all',
                tid:'all'
            }
        },
        computed:{
            ...mapGetters([
                'article'
            ]),
            pageNum(){
                var total = this.article.list.total;
                if(total != 0){
                    if(total%10 == 0){
                        return total/10;
                    }else{
                        return Math.floor(total/10) + 1;
                    }
                }
            }
        },
        methods:{
            nextPage(){
                if(this.current_page < this.pageNum){
                    this.current_page++;
                    this.$store.dispatch('getArticleList',{'cid':this.cid,'tid':this.tid,'page':this.current_page});
                }else{
                    console.log('已经是最后一页了')
                }
            },
            prePage(){
                if(this.current_page > 1){
                    this.current_page--;
                    this.$store.dispatch('getArticleList',{'cid':this.cid,'tid':this.tid,'page':this.current_page});
                }else{
                    console.log('已经是第一页了')
                }
            },
            curPage(p){
                if(p!=this.current_page){
                    this.current_page=p;
                    this.$store.dispatch('getArticleList',{'cid':this.cid,'tid':this.tid,'page':this.current_page});
                }else{
                    console.log('已处于当前页')
                }
            }
        }
	}
</script>

<style scoped></style>