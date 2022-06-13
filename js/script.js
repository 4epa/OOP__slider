
class Slider{
  constructor(opt = {
    slides:'',
    btnPrev: '',
    btnNext: '',
    dots: '',
    auto: true,
    ms: '',
    dot: true,
  } ) {
    this.slides = document.querySelectorAll(opt.slides);
    this.dots = document.querySelectorAll(opt.dots);
    this.slideIndex = 0;
    document.querySelector(opt.btnPrev).addEventListener('click', () => this.slide());
    document.querySelector(opt.btnNext).addEventListener('click', () => this.slide());
    if (opt.auto) {setInterval(() => this.slide(), +opt.ms)}; 
    if (opt.dot) {this.clickOnDots()};
  }
  
  slide() {
    let action = event;
    if (action == undefined) action = 'next';
    else action = event.target.dataset.slide;

    this.slides[this.slideIndex].classList.add('_hide');
    this.dots[this.slideIndex].classList.remove('_show');

    switch (action) {
      case ('next'):
        ++this.slideIndex;
        if (this.slideIndex > (this.slides.length - 1)) this.slideIndex = 0;
        break;
      case ('prev'):
        --this.slideIndex;
        if (this.slideIndex < 0) this.slideIndex = (this.slides.length - 1);
        break;   
    }

    if (+action <= this.dots.length) this.slideIndex = action - 1;

    this.dots[this.slideIndex].classList.add('_show');
    this.slides[this.slideIndex].classList.remove('_hide');
  }

  clickOnDots() {
    this.dots.forEach(dot => {dot.addEventListener('click', () => this.slide())
    dot.style.cursor = 'pointer'
    });
  }

}

let slider = new Slider({
  slides: '.slide',
  btnPrev: '.slider__btn_prev',
  btnNext: '.slider__btn_next',
  dots: '.dot',
  auto: true,
  ms: 5000,
  dot: true,
});
