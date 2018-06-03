!function() {
	var  view=document.querySelector('#topNavBar')
		var controller={
			view:null,
			init:function(view){  //初始化函数
				this.view=view  //controller
				this.bindEvents()
			},
			bindEvents:function(){  //绑定函数
				var view=this.view
				window.addEventListener('scroll', (X)=> {
					if(scrollY > 15) {
						this.active()
					} else {
						this.deactive()
					}
				 })
			},
			active:function(){  //激活事件
				this.view.classList.add('addbar')
			},
			deactive:function(){  //删除
				this.view.classList.remove('addbar')
			}
			
				}
		controller.init(view)
		}.call()


//将做动作的js给封装起来了   只需要传出一个变量