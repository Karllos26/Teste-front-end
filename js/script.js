let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Impede o comportamento padrão de seguir o link

        let targetId = this.getAttribute('href').substring(1); // Obtém o id do alvo removendo o '#' do href

        // Obtém a seção correspondente com o id
        let targetSection = document.getElementById(targetId);

        // Rola a página até a seção alvo
        window.scrollTo({
            top: targetSection.offsetTop - 150,
            behavior: 'smooth'
        });
    });
});

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.id; // Obtém o id diretamente

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};



document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');

  
    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 10; // Inclui a margem entre os cartões
  
    function showSlide(index) {
      currentIndex = index;
      carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  
    function nextSlide() {
      if (currentIndex < cards.length - 3) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = cards.length - 3;
      }
      showSlide(currentIndex);
    }
  
    // Adiciona auto-rotação a cada 3 segundos
    setInterval(nextSlide, 5000);
  });
  
  $(function () {
    $('[data-toggle="popover"]').popover()
  })
  