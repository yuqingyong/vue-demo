import types from '../types.js'
import axios from 'axios'

const state = {
	webinfo:{},
	article:{
		'list':{
			'data':{},
			'total':0
		}
	},
	hotArticle:{},
	searchList:{}
}

const getters = {
	webinfo(state){
		return state.webinfo;
	},
	article(state){
		return state.article;
	},
	hotArticle(state){
		return state.hotArticle;
	}
}

const actions = {
	getWebInfo({commit,state}){
		axios.get('http://127.0.0.1/api/vue/getWebInfo')
		.then(resp => {
			if(resp.data.status == 1){
				commit(types.GET_WEBINFO,resp.data);
			}else{
				console.log(resp.data.res);
			}
		})
	},
	getArticleList({commit,state},param){
		axios.get('http://127.0.0.1/api/vue/getArticleList?cid='+param.cid+'&tid='+param.tid+'&page='+param.page+'')
		.then(resp => {
			var artilce_list = resp.data.res;
			if(resp.data.status == 1){
				commit(types.GET_ARTICLE,artilce_list);
			}else{
				console.log(resp.data.res);
			}
		})
	},
	getHotArticle({commit,state}){
		axios.get('http://127.0.0.1/api/vue/getHotArticle')
		.then(resp => {
			var hotArtilce_list = resp.data.res;
			if(resp.data.status == 1){
				commit(types.GET_HOTARTICLE,hotArtilce_list);
			}else{
				console.log(resp.data.res);
			}
		})
	},
	searchArticle({commit,state},param){
		console.log(param)
		axios.get('http://127.0.0.1/api/vue/searchArticle?keyword='+param.keyword+'')
		.then(resp => {
			console.log(resp.data)
		})
	}
}

const mutations = {
	[types.GET_WEBINFO](state,data){
		state.webinfo = data.res;
	},
	[types.GET_ARTICLE](state,data){
		state.article = data;
	},
	[types.GET_HOTARTICLE](state,data){
		state.hotArticle = data;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}