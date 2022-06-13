1. add (data-slide="prev") to the button "prev"
2. add (data-slide="next") to the button "next"
3. add (data-slide="1 2 ...n") to the dots
4. create a variable which inherits the slider class
example:
	let slider = new Slider();

5. fit selectors into an object 
example:
	let slider = new Slider({
  		slides: '.slide',
  		btnPrev: '.slider__btn_prev',
  		btnNext: '.slider__btn_next',
  		dots: '.dot',
  		auto: true,
  		ms: 5000,
  		dot: true,
	});

6. use slider

