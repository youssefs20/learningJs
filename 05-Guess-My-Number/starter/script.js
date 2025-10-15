'use strict';

console.log(document.querySelector(".message").textContent);
document.addEventListener("keydown", function(e){
	if(e.key!= "Escape") {
		console.log("press Esc to quit");
	}
	else if(e.key === "Escape" && !modal.classList.contains("hidden")){
		closeModal()
	}
});