import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import common from './modules/common'
import article from './modules/article'

Vue.use(Vuex);

export default new Vuex.Store
({
	getters,
	actions,
	modules:{
		common,
		article,
	}
})