<template>
  <div id="mz_banner" class="swiper-container">
		<ul class="swiper-wrapper">
			<li class="swiper-slide" v-for="item in bannerData"><img :src="item.imageUrl"></li>
		</ul>
	</div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'mz-banner',
  data(){
    return {
    	bannerData : []
    };
  },
  mounted(){
	 axios.get('/v4/api/billboard/home').then((res)=>{
		
		//console.log(res);
		var msg = res.data.msg;
		if(msg === 'ok'){
			this.bannerData = res.data.data.billboards;

			this.$nextTick()
			  .then(()=>{
			    // DOM 更新了
				
				var $mz_banner = $('#mz_banner');
				new Swiper($mz_banner,{
					loop : true
				});

			  })

			
		}

	 });
  }
}
</script>

<style>
#mz_banner{ margin-top: 50px; width: 100%; overflow:hidden; }
#mz_banner img{ width: 100%; }
</style>