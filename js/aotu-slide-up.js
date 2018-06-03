
!function(){
let specialTags = document.querySelectorAll('[data-x]') //  返回这个选择器对应的所有的元素
for(var i = 0; i < specialTags.length; i++) {
	specialTags[i].classList.add('offset')
}
findCloseAndmoveOfset()
window.addEventListener('scroll', function(X) {
	findCloseAndmoveOfset()
})

//方法
function findCloseAndmoveOfset() {
	let specialTags = document.querySelectorAll('[data-x]') //  返回这个选择器对应的所有的元素
	let minIndex = 0
	for(var i = 1; i < specialTags.length; i++) {
		if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
			//获取标记块 offsetTop
			//如果 #当前标签的距离# 减去 #滑动的距离#  <  我认为最小的那个
			minIndex = i
		}
		for(let i = 0; i < specialTags.length; i++) {
			specialTags[i].classList.remove('active') //遍历所有 specialTags  删除active
		}
	}
	//specialTags[minIndex].classList.add('active')  //添加active

	//离窗口最近的元素
	specialTags[minIndex].classList.remove('offset')
	let id = specialTags[minIndex].id //获取当前标签ID
	let a = document.querySelector('a[href="#' + id + '"]')
	//console.log(a)
	let li = a.parentNode
	let brodersAndMe = li.parentNode.children
	for(let i = 0; i < brodersAndMe.length; i++) {
		brodersAndMe[i].classList.remove('active')
		//console.log( brodersAndMe[i])
	}
	li.classList.add('active')
}
}.call()
