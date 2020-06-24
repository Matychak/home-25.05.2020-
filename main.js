let $li = document.querySelectorAll("aside li");

let $content = document.querySelector(".first_content");

let $span =  document.querySelectorAll("span");

let $img = document.querySelectorAll("img")
for (let i = 0; i <$li.length; i++) {

	$li[i].addEventListener("click", function(){

$content.style.display =  'none';
		for (let j = 0; j <$span.length; j++) {
					$span[j].style.top = '-650px';
					$span[j].style.opacity  = '0';
					
			
				
		}
			$span[i].style.opacity  = '1';
		$span[i].style.top = '60px';
	

	})
}
