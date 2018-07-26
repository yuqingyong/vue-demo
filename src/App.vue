<template>
  <div id="app">
  	<!-- 头部 -->
    <v-header></v-header>
    <!-- 中间内容 -->
    <router-view></router-view>
    <!-- 尾部 -->
	 <v-footer></v-footer>
  </div>
</template>

<script>
// 引入头部
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'

import {mapGetters} from 'vuex'

export default {
    components:{
      'v-header':Header,
      'v-footer':Footer,
    },
}
</script>

<style scoped>
</style>
