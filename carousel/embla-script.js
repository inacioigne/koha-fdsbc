var emblaNode = document.querySelector('.embla')
var options = { loop: false }
var plugins = [EmblaCarouselAutoplay()] // Plugins

var embla = EmblaCarousel(emblaNode, options, plugins)