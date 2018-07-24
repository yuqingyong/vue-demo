import types from '../types.js'
import axios from 'axios'

const state = {
	webinfo:{}
}

const getters = {
	webinfo(state){
		return state.webinfo;
	}
}

const actions = {
	getWebInfo({commit,state}){
		axios.get('http://127.0.0.1/api/vue/getWebInfo')
		.then(resp => {
			commit(types.GET_WEBINFO,resp.data);
		})
	}
}

const mutations = {
	[types.GET_WEBINFO](state,data){
		state.webinfo = data.res;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}