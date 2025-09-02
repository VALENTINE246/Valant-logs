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

  hcPara.innerHTML = 'Are you a working guy, Do you need a sharp FB accounts for your hustle, We got you covered, We deliver variety of FB accounts, Instagram, TikTok, Foreign numbers, VPN, Account boosting and other tools. <br> <p class="c-inst">Click the button below to join our Whatsapp group chat</p> <br> <button id="join" class="Contact-us">Join</button>' ;

  hiddenCard.style.display = 'flex'

  const joinGroup = document.getElementById('join')

  joinGroup.addEventListener('click', () => {
  window.location.href = 'https://chat.whatsapp.com/HKtEx73QNFKBuExSV4PtF3?mode=r_t';
})

})




const closeHc = document.getElementById('close-hc')

closeHc.addEventListener('click', () => {
  hiddenCard.style.display = 'none'
})
