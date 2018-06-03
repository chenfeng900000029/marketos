! function() {
	var view = document.querySelector('nav>ul')
	var controller = {
		view: null,
		aTags: null,
		initAnimate: function() {
			function animate(time) {
				requestAnimationFrame(animate);
				TWEEN.update(time);
			}
			requestAnimationFrame(animate);
		},
		scrollToElement: function(element) {
			let element = document.querySelector(href) // a的href内的连接赋值给element
			if(element != null) { // 判断id是否为空
				let top = element.offsetTop //根据id 找到内容部分 id='' 获取内容部分距上面的高度

				//	let n=25  //移动次数
				//多长时间动一次 
				//	let duration= 500 / n  
				let currentTop = window.scrollY //当前的scroll 距顶距离
				let targetTop = top - 160 //目标高度
				let s = (targetTop - currentTop) // 滚动距离
				let t = Math.abs(s / 100) * 250 //滚动事件  取正  求绝对值
				if(t > 150) {
					t = 400
				} //最大时间为400
				var coords = {
					y: currentTop
				}; //起始位置
				var tween = new TWEEN.Tween(coords)
					.to({
						y: targetTop
					}, t)
					.easing(TWEEN.Easing.Quadratic.InOut)
					.onUpdate(function() {
						window.scrollTo(0, coords.y)
					})
					.start();
			}
		},
		bindEvent: function() {
			let aTags = this.view.querySelectorAll('nav>ul>li>a')
			for(let i = 0; i < aTags.length; i++) {
				aTags[i].onclick = function(x) {
					x.preventDefault() //阻止默认动作
					let a = x.currentTarget //监听的元素
					let href = a.getAttribute('href') //'获取a的href'
					this.scrollToElement(element)

				}
			}

		},
		init: function(view) {
			this.view = view

			this.initAnimate()
			this.bindEvent()
		}
	}
	controller.init(view)
}.call()