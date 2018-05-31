<template>
  <div id="app">
  	<mz-header></mz-header>
  	<mz-nav></mz-nav>
  	<router-view></router-view> 
  </div>
</template>

<script>

import Header from './components/header.vue';
import Nav from './components/nav.vue';

export default {
  name: 'App',
  data(){
    return {};
  },
  components : {
  	[Header.name] : Header,
  	[Nav.name] : Nav
  }
}
</script>

<style>
*{ margin:0; padding:0; }
html,body{ height: 100%; font-size:14px; background: #ebebeb; }
li{ list-style:none; }
img{ display:block; }

</style>
