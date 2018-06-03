!function(){
	var view=document.querySelector('section.message')
	var model={
		init:function(){
			var APP_ID = 'M6xv4RypSwwMGKMB5VRMx9Nc-gzGzoHsz';
			var APP_KEY = 'jK1qp68xY7XtT0MEdzpzza3b';
			AV.init({appId: APP_ID,appKey: APP_KEY})
		},
		fetch:function(){
		var query = new AV.Query('Messages');
			return	query.find()
		},
		save:function(name,content){
		var Messages = AV.Object.extend('Messages');
				var messages = new Messages();
				return messages.save({
						name: name,
						content: content
				})
			}
		}
	
	console.log(view)
	var controller={
		view:null,
		model:null,
		messageList:null,
		myform:null,
		init:function(view,model){
			this.view=view
			this.model=model
			this.messageList = view.querySelector('#messageList')
			this.form = document.querySelector('form')
			this.model.init()
			this.loadmessages()
			this.bindEvent()

		},
		loadmessages:function(){
			this.model.fetch().then((messages)=> {
				// 更新成功
				console.log(messages)
				let array = messages.map((item) => item.attributes)
				console.log(array)
				array.forEach((item) => {
					let li = document.createElement('li')
					li.innerText = `${item.name} : ${item.content}`
					this.messageList.appendChild(li)
					console.log('11')
					})
				})
			},
			bindEvent:function(){
				this.form.addEventListener('submit', (e)=>{
				e.preventDefault()
				this.saveMessage()
				})
			},
			saveMessage:function(){
				let myForm=this.form
				let content = myForm.querySelector('input[name=content]').value
				let name = myForm.querySelector('input[name=name]').value
				this.model.save(name,content).then(function(object) {
					let li = document.createElement('li')
					li.innerText = `${object.attributes.name} : ${object.attributes.content}`
					let messageList = document.querySelector('#messageList')
					messageList.appendChild(li)
					let content = myForm.querySelector('input[name=content]').value = ''
					})
				}
			}
		controller.init(view,model)
		}.call()
