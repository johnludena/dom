
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
	var message = alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  	var numberNode = document.querySelector("#compoundInvestment")
  	var numberValue = parseInt(numberNode.textContent) * 2
  	numberNode.innerHTML = numberValue
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  	var circleNode = document.querySelector("#circle-bw")
  	// var circleNodeStyles = window.getComputedStyle(circleNode)
  	// var circleBgColor = circleNodeStyles.backgroundColor
  	console.log(circleNode.style.backgroundColor)
  	if (circleNode.style.backgroundColor === "black") {
  		circleNode.style.backgroundColor = "white"
  	}
  	else {
  		circleNode.style.backgroundColor = "black"
  	}
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  	var redCircleNode = document.querySelector(".circle-red")
  	var redCircleStyles = window.getComputedStyle(redCircleNode)
  	var widthInteger = parseInt(redCircleStyles.width)

  	if (widthInteger >= 320) {
  		redCircleNode.style.width = "40px"
  		redCircleNode.style.height = "40px"
  	}
  	else {
  		redCircleNode.style.width = (parseInt(redCircleStyles.width) * 2) + "px"
  		redCircleNode.style.height = (parseInt(redCircleStyles.height) * 2) + "px"
  	}

})

document.querySelector("#remove button").addEventListener('click',function(){
	// TASK #5
	var ulNode = document.querySelector("#userList")
	var liNodes = ulNode.querySelectorAll("li")
	
	for (var i = 0; i < liNodes.length; i++) {
		var liNode = liNodes[i]
		if (liNode.classList.contains("inactive")) {
			ulNode.removeChild(liNode)
		}
	}
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  	var boxesContainer = document.querySelector("#reverse-squares > .answer-box")
  	var spanNodes = document.querySelectorAll(".square")
  	console.log(spanNodes)

  	for (var i = spanNodes.length; i >= 0; i--) {
  		var spanNode = spanNode[i]
  		boxesContainer.appendChild(spanNode)
  	}
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})