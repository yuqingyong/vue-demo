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
	searchList:{},
	tags:{}
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
	},
	tags(state){
		return state.tags;
	},
	searchList(state){
		return state.searchList;
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
		axios.get('http://127.0.0.1/api/vue/searchArticle?keyword='+param.keyword+'')
		.then(resp => {
			commit(types.GET_SEARCH_ARTICLE,resp.data);
		})
	},
	getTags({commit,state}){
		axios.get('http://127.0.0.1/api/vue/getTags')
		.then(resp => {
			commit(types.GET_TAGS,resp.data);
		})
	},
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
	},
	[types.GET_TAGS](state,data){
		state.tags = data;
	},
	[types.GET_SEARCH_ARTICLE](state,data){
		state.searchList = data;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}