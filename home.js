const contactUs = document.getElementById('contact-us')

contactUs.addEventListener('click', () => {
  // Redirect to the link
  window.location.href = whatsappLink;
});

const phoneNumber = '+2349031444628';
const captionText = 'Hello! Can i get more info your products';
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(captionText)}`;


const knowMore = document.getElementById('know-more')

const hiddenCard = document.getElementById('hidden-card')

const hcPara = document.getElementById('hc-para')

knowMore.addEventListener('click', () => {

  hcPara.innerHTML = 'Are you a working guy, Do you need a sharp FB accounts for your hustle, We got you covered, We deliver variety of FB accounts, Instagram, TikTok, Foreign numbers, VPN, Account boosting and other tools';

  hiddenCard.style.display = 'flex'

})

