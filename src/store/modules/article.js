import types from '../types.js'
import axios from 'axios'

const state = {
	arDetail:{},
	comments:{}
}

const getters = {
	arDetail(state){
		return state.arDetail
	},
	comments(state){
		return state.comments
	}
}

const actions = {
	getArticleDetail({commit,state},param){
		axios.get('http://127.0.0.1/api/vue/getArticleDetail?aid='+param.aid+'')
		.then(resp => {
			if(resp.data.status == 1){
				commit(types.GET_ARTICLE_DETAIL,resp.data.res);
			}else{
				console.log(resp.data.res)
			}
		})
	},
	getComment({commit,state},param){
		axios.get('http://127.0.0.1/api/vue/getComment?aid='+param.aid+'')
		.then(resp => {
			commit(types.GET_ARTICLE_COMMENT,resp.data);
		})
	}
}

const mutations = {
	[types.GET_ARTICLE_DETAIL](state,data){
		state.arDetail = data;
	},
	[types.GET_ARTICLE_COMMENT](state,data){
		state.comments = data;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}