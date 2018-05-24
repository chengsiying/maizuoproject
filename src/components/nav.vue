<template>
  <div id="mz_menu">
		<ul>
			<li>首页<i class="iconfont icon-more"></i></li>
			<li>影片<i class="iconfont icon-more"></i></li>
			<li>影院<i class="iconfont icon-more"></i></li>
			<li>商城<i class="iconfont icon-more"></i></li>
			<li>我的<i class="iconfont icon-more"></i></li>
			<li>卖座卡<i class="iconfont icon-more"></i></li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'mz-nav',
  data(){
    return {};
  }
}
</script>

<style>
#mz_menu{ width: 265px; height: 100%; background: #282828; color:#999999; position: fixed; left: 0; top:50px; display: none; z-index:10;}
	#mz_menu ul{}
	#mz_menu li{ line-height: 50px; height: 50px; border-bottom: 1px dashed #333333; padding-left: 10px; }
	#mz_menu li i{ float:right; padding-right: 10px; }

	#mz_banner{ margin-top: 50px; width: 100%; overflow:hidden; }
	#mz_banner img{ width: 100%; }
</style>