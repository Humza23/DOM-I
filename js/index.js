const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navList = document.querySelectorAll('a')
navList[0].textContent = siteContent.nav['nav-item-1']
navList[1].textContent = siteContent.nav['nav-item-2']
navList[2].textContent = siteContent.nav['nav-item-3']
navList[3].textContent = siteContent.nav['nav-item-4']
navList[4].textContent = siteContent.nav['nav-item-5']
navList[5].textContent = siteContent.nav['nav-item-6']
// console.log(navList[0])
// console.log(navList[1])
// console.log(navList[2])
// console.log(navList[3])
// console.log(navList[4])
// console.log(navList[5])

const navImg = document.querySelector("#logo-img")
navImg.src = siteContent.nav['img-src']
// console.log(navImg)

const ctaH1 = document.querySelector('h1')
ctaH1.textContent = siteContent.cta.h1
// console.log(ctaH1)

const ctaButton = document.querySelector('button')
ctaButton.textContent = siteContent.cta.button
// console.log(ctaButton);

const ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent.cta['img-src']
// console.log(ctaImg);

const mainContH4 = document.querySelectorAll('.text-content h4')
mainContH4[0].textContent = siteContent['main-content']['features-h4']
// console.log(mainContH4[0]);

const mainContP = document.querySelectorAll('.text-content p')
mainContP[0].textContent = siteContent['main-content']['features-content']
// console.log(mainContP[0])

mainContH4[1].textContent = siteContent['main-content']['about-h4']
mainContH4[2].textContent = siteContent['main-content']['services-h4'];
mainContH4[3].textContent = siteContent['main-content']['product-h4'];
mainContH4[4].textContent = siteContent['main-content']['vision-h4'];

mainContP[1].textContent = siteContent['main-content']['about-content']
mainContP[2].textContent = siteContent['main-content']['services-content'];mainContP[3].textContent = siteContent['main-content']['product-content'];mainContP[4].textContent = siteContent['main-content']['vision-content'];


middleImg = document.querySelector('#middle-img')
middleImg.src = siteContent['main-content']['middle-img-src']
// console.log(middleImg)



// console.log(mainContH4[0])
// console.log(mainContH4[1])
// console.log(mainContH4[2])
// console.log(mainContH4[3])
// console.log(mainContH4[4])

const contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent['contact']['contact-h4']
// console.log(contactH4)

const contactP = document.querySelectorAll('.contact p')
contactP[0].textContent = siteContent['contact']['address']
contactP[1].textContent = siteContent['contact']['phone']
contactP[2].textContent = siteContent['contact']['email']

// console.log(contactP[0]);
// console.log(contactP[1]);
// console.log(contactP[2]);

const footerP = document.querySelector('footer p')
footerP.textContent = siteContent['footer']['copyright']

console.log(footerP)