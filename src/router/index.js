import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Article from '../components/Article.vue'
import ArticleDetail from '../components/article/ArticleDetail.vue'
import Jishu from '../components/article/Jishu.vue'
import News from '../components/article/News.vue'
import Message from '../components/Message.vue'
import Release from '../components/Release.vue'
import Share from '../components/Share.vue'
import Chat from '../components/Chat.vue'
import SearchArticle from '../components/SearchArticle.vue'

Vue.use(Router)

export default new Router({
  	routes: [
  		{
  			path:'*',
  			component:Index
  	    },
        {
            path:'/article',
            component:Article,
            children:[
                {
                    path:'detail/:aid',
                    component:ArticleDetail
                },
                {
                    path:'jishu',
                    component:Jishu
                },
                {
                    path:'news',
                    component:News
                }
            ]
        },
        {
    			path:'/share',
    			component:Share
  	    },
  	    {
    			path:'/release',
    			component:Release
  	    },
  	    {
    			path:'/message',
    			component:Message
  	    },
  	    {
    			path:'/chat',
    			component:Chat
  	    },
        {
          path:'/searchArticle/:keyword',
          component:SearchArticle
        },
  	]
})
