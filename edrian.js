// let body = document.body
// let adis = document.createElement('lah')
// body.prepend(adis)

// let img = document.createElement('img')
// img.src = './pexels-felix-mittermeier-956999'
// body.prepend(img)


// body.style.backgroundImage = "pexels-felix-mittermeier-956999";
// body.prepend(img)


// let contents = '';
// const elHeaders = document.querySelectorAll('.article h2');

// elHeaders.forEach((el, index) => {
//     if (!el.id) {
//       el.id = `id-${index}`;
//     }
//     const url = `${location.href.split('#')[0]}#${el.id}`;
//     contents += `<li><a href="${url}">${el.textContent}</a></li>`;
//   });
let body = document.body

let data = [
  
  {
    location: 'Orlando',
    tittle: 'Magic',
    img: 'thumb_484276_news_xxxl',
    age: 1999
    
  },
  {
    location: 'Milwaukee',
    tittle: 'Bucks',
    img: 'thumb_484276_news_xxxl',
    age:2021
    
  },
  {
    location: 'Indiana',
    tittle: 'Pacers',
    img: 'thumb_484276_news_xxxl',
    age: 2004   
  },
  {
    location: 'Dallas',
    tittle: 'Mavericks',
    color: 'black',
    img: 'thumb_484276_news_xxxl',
    age: 2011
    
  },

    

  
]
let render = ()=> data.map(el =>{
let block = document.createElement('div')

block.style.backgroundColor = 'green'
block.style.width = '200px'
block.style.color = 'white'

let h1 = document.createElement('h1')
let h2 = document.createElement('h2')
let img = document .createElement('img')
let h3 = document .createElement('h3')

h1.innerText = el.location
h2.innerText = el.tittle

h3.innerText = el.age

block.append(h1)
block.append(h2)
block.append(img)
block.append(h3)
body.append(block)

})
render()