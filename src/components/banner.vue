<template>
  <div id="mz_banner" class="swiper-container">
		<ul class="swiper-wrapper">
			<li class="swiper-slide"><img src="/static/images/1.jpg"></li>
			<li class="swiper-slide"><img src="/static/images/2.jpg"></li>
			<li class="swiper-slide"><img src="/static/images/3.jpg"></li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'mz-banner',
  data(){
    return {};
  }
}
</script>

<style>
#mz_banner{ margin-top: 50px; width: 100%; overflow:hidden; }
#mz_banner img{ width: 100%; }
</style>