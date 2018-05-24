<template>
  <div id="mz_movie">
		<ul>
			<li>
				<img src="/static/images/4.jpg">
				<div class="info">
					<div class="title">
						<p>神秘巨星</p>
						<p>9家影院上映1331134人购票</p>
					</div>
					<div class="score">8.5</div>
				</div>
			</li>
			<li>
				<img src="/static/images/5.jpg">
				<div class="info">
					<div class="title">
						<p>神秘巨星</p>
						<p>9家影院上映1331134人购票</p>
					</div>
					<div class="score">8.5</div>
				</div>
			</li>
			<li>
				<img src="/static/images/4.jpg">
				<div class="info">
					<div class="title">
						<p>神秘巨星</p>
						<p>9家影院上映1331134人购票</p>
					</div>
					<div class="score">8.5</div>
				</div>
			</li>
			<li>
				<img src="/static/images/5.jpg">
				<div class="info">
					<div class="title">
						<p>神秘巨星</p>
						<p>9家影院上映1331134人购票</p>
					</div>
					<div class="score">8.5</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'mz-movie',
  data(){
    return {};
  }
}
</script>

<style>
#mz_movie{ margin-top: 18px; }
#mz_movie ul{ width: 100%; padding:0 10px; box-sizing:border-box;}
#mz_movie li{ margin-bottom: 10px; }
#mz_movie img{ width: 100%; }
#mz_movie .info{ height: 50px; background:white; display: flex; }
#mz_movie .title{ flex : 1; padding-left: 10px; padding-top: 5px; }
#mz_movie .title p{ line-height: 20px; }
#mz_movie .score{ width: 50px; line-height: 50px; text-align: center; color:#f79177; font-size: 20px; }
</style>