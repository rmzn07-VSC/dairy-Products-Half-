let slideIndex = 1;
slideShow(slideIndex);

// Otomatik olarak slaytı değiştirmek için bir zamanlayıcı oluşturun
let autoSlideInterval = setInterval(autoSlide, 4000); // 3000 milisaniye = 3 saniye

function autoSlide() {
    slideIndex++;
    slideShow(slideIndex);
}

function slideRoute(n) {
    clearInterval(autoSlideInterval); // Slayt el ile değiştirildiğinde zamanlayıcıyı sıfırlayın
    slideShow(slideIndex += n);
}

function currentSlide(n) {
    clearInterval(autoSlideInterval); // Slayt el ile değiştirildiğinde zamanlayıcıyı sıfırlayın
    slideShow(slideIndex = n);
}

function slideShow(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display="none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";

    dots[slideIndex-1].className +=" active";
}













function solaGit() {
    window.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  }
  
  function sagaGit() {
    var bodyWidth = document.body.scrollWidth;
    window.scrollTo({
      left: bodyWidth,
      behavior: 'smooth'
    });
  }




  



  function ekranAc() {
    document.getElementById('ekran').style.display = 'block';
  }
  
  function ekranKapat() {
    document.getElementById('ekran').style.display = 'none';
  }
  
  function ekranAc_cilekaroma() {
    document.getElementById('ekran_cilekaroma').style.display = 'block';
  }
  
  function ekranKapat_cilekaroma() {
    document.getElementById('ekran_cilekaroma').style.display = 'none';
  }
  function ekranAc_muzaroma() {
    document.getElementById('ekran_muzaroma').style.display = 'block';
  }
  
  function ekranKapat_muzaroma() {
    document.getElementById('ekran_muzaroma').style.display = 'none';
  }
  function ekranAc_vanilyaaroma() {
    document.getElementById('ekran_vanilyaaroma').style.display = 'block';
  }
  
  function ekranKapat_vanilyaaroma() {
    document.getElementById('ekran_vanilyaaroma').style.display = 'none';
  }
  function ekranAc_cikolatacocuk() {
    document.getElementById('ekran_cikolatacocuk').style.display = 'block';
  }
  
  function ekranKapat_cikolatacocuk() {
    document.getElementById('ekran_cikolatacocuk').style.display = 'none';
  }
  function ekranAc_cilekcocuk() {
    document.getElementById('ekran_cilekcocuk').style.display = 'block';
  }
  
  function ekranKapat_cilekcocuk() {
    document.getElementById('ekran_cilekcocuk').style.display = 'none';
  }
  function ekranAc_dvitamincocuk() {
    document.getElementById('ekran_dvitamincocuk').style.display = 'block';
  }
  
  function ekranKapat_dvitamincocuk() {
    document.getElementById('ekran_dvitamincocuk').style.display = 'none';
  }
  function ekranAc_bebekcocuk() {
    document.getElementById('ekran_bebekcocuk').style.display = 'block';
  }
  
  function ekranKapat_bebekcocuk() {
    document.getElementById('ekran_bebekcocuk').style.display = 'none';
  }
  function ekranAc_kalsiyumcocuk() {
    document.getElementById('ekran_kalsiyumcocuk').style.display = 'block';
  }
  
  function ekranKapat_kalsiyumcocuk() {
    document.getElementById('ekran_kalsiyumcocuk').style.display = 'none';
  }
  function ekranAc_laktozcocuk() {
    document.getElementById('ekran_laktozcocuk').style.display = 'block';
  }
  
  function ekranKapat_laktozcocuk() {
    document.getElementById('ekran_laktozcocuk').style.display = 'none';
  }
  function ekranAc_muzlucocuk() {
    document.getElementById('ekran_muzcocuk').style.display = 'block';
  }
  
  function ekranKapat_muzlucocuk() {
    document.getElementById('ekran_muzcocuk').style.display = 'none';
  }
  function ekranAc_omega3cocuk() {
    document.getElementById('ekran_omega3cocuk').style.display = 'block';
  }
  
  function ekranKapat_omega3cocuk() {
    document.getElementById('ekran_omega3cocuk').style.display = 'none';
  }
  function ekranAc_vanilyacocuk() {
    document.getElementById('ekran_vanilyacocuk').style.display = 'block';
  }
  
  function ekranKapat_vanilyacocuk() {
    document.getElementById('ekran_vanilyacocuk').style.display = 'none';
  }
  function ekranAc_bademdevam() {
    document.getElementById('ekran_bademdevam').style.display = 'block';
  }
  
  function ekranKapat_bademdevam() {
    document.getElementById('ekran_bademdevam').style.display = 'none';
  }
  function ekranAc_hindistandevam() {
    document.getElementById('ekran_hindistandevam').style.display = 'block';
  }
  
  function ekranKapat_hindistandevam() {
    document.getElementById('ekran_hindistandevam').style.display = 'none';
  }
  function ekranAc_inekdevam() {
    document.getElementById('ekran_inekdevam').style.display = 'block';
  }
  
  function ekranKapat_inekdevam() {
    document.getElementById('ekran_inekdevam').style.display = 'none';
  }
  
  
  
  function ekranAc_kakaohindistandevam() {
    document.getElementById('ekran_kakaohindistandevam').style.display = 'block';
  }
  
  function ekranKapat_kakaohindistandevam() {
    document.getElementById('ekran_kakaohindistandevam').style.display = 'none';
  }
  
  function ekranAc_kecidevam() {
    document.getElementById('ekran_kecidevam').style.display = 'block';
  }
  
  function ekranKapat_kecidevam() {
    document.getElementById('ekran_kecidevam').style.display = 'none';
  }
  
  function ekranAc_pirincdevam() {
    document.getElementById('ekran_pirincdevam').style.display = 'block';
  }
  
  function ekranKapat_pirincdevam() {
    document.getElementById('ekran_pirincdevam').style.display = 'none';
  }
  
  function ekranAc_soyadevam() {
    document.getElementById('ekran_soyadevam').style.display = 'block';
  }
  
  function ekranKapat_soyadevam() {
    document.getElementById('ekran_soyadevam').style.display = 'none';
  }
  
  function ekranAc_tarcindevam() {
    document.getElementById('ekran_tarcindevam').style.display = 'block';
  }
  
  function ekranKapat_tarcindevam() {
    document.getElementById('ekran_tarcindevam').style.display = 'none';
  }
  
  function ekranAc_yogurtdevam() {
    document.getElementById('ekran_yogurtdevam').style.display = 'block';
  }
  
  function ekranKapat_yogurtdevam() {
    document.getElementById('ekran_yogurtdevam').style.display = 'none';
  }
  
  function ekranAc_yulafdevam() {
    document.getElementById('ekran_yulafdevam').style.display = 'block';
  }
  
  function ekranKapat_yulafdevam() {
    document.getElementById('ekran_yulafdevam').style.display = 'none';
  }
  
  function ekranAc_bademsoya() {
    document.getElementById('ekran_bademsoya').style.display = 'block';
  }
  
  function ekranKapat_bademsoya() {
    document.getElementById('ekran_bademsoya').style.display = 'none';
  }
  
  function ekranAc_cikolatasoya() {
    document.getElementById('ekran_cikolatasoya').style.display = 'block';
  }
  
  function ekranKapat_cikolatasoya() {
    document.getElementById('ekran_cikolatasoya').style.display = 'none';
  }
  
  function ekranAc_kakaosoya() {
    document.getElementById('ekran_kakaosoya').style.display = 'block';
  }
  
  function ekranKapat_kakaosoya() {
    document.getElementById('ekran_kakaosoya').style.display = 'none';
  }
  
  function ekranAc_dogalsoya() {
    document.getElementById('ekran_dogalsoya').style.display = 'block';
  }
  
  function ekranKapat_dogalsoya() {
    document.getElementById('ekran_dogalsoya').style.display = 'none';
  }
  
  function ekranAc_sekersizsoya() {
    document.getElementById('ekran_sekersizsoya').style.display = 'block';
  }
  
  function ekranKapat_sekersizsoya() {
    document.getElementById('ekran_sekersizsoya').style.display = 'none';
  }
  
  function ekranAc_vitaminsoya() {
    document.getElementById('ekran_vitaminsoya').style.display = 'block';
  }
  
  function ekranKapat_vitaminsoya() {
    document.getElementById('ekran_vitaminsoya').style.display = 'none';
  }
  
  
  function ekranAc_vanilyasoya() {
    document.getElementById('ekran_vanilyasoya').style.display = 'block';
  }
  
  function ekranKapat_vanilyasoya() {
    document.getElementById('ekran_vanilyasoya').style.display = 'none';
  }

