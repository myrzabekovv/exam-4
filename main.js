const pics = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80',
  'https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
  'https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
]

Object.keys(pics).forEach((key) => {
  const img = document.createElement('img')

  img.setAttribute('src', `${pics[key]}`)

  img.className = 'img'

  document.querySelector('section').append(img)


  const openImg = document.querySelector('.overlay-img')
  const closeImgButton = document.querySelector('.close-btn-img')

  img.addEventListener('click', () => {
    openImg.classList.add('open2')
  })

  closeImgButton.addEventListener('click', () => {
    openImg.classList.remove('open2')
  })

})


// const imgGallery = document.querySelector('section')
// pics.forEach((url) => {
//   const a = document.createElement('a')
//   imgGallery.append(a)
//   const img = document.createElement('img')
//   const closeImgButton = document.createElement('button')

//   a.append(closeImgButton)
//   a.append(img)

//   img.setAttribute('src', url)
//   img.className('img')
//   a.className('')
// })



const openBtn = document.querySelector('#contact')
const closeBtn = document.querySelector('#closeBtn')
const overlay = document.querySelector('.overlay')

openBtn.addEventListener('click', () => {
  overlay.classList.add('open')
})

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('open')
})

const send = document.querySelector('.send')

const name = document.querySelector('.text')
const email = document.querySelector('.email')
const about = document.querySelector('.about')

send.addEventListener('click', () => {
  let getMessage = {
    name: name.value,
    email: email.value,
    texts: about.value
  }
  console.log(getMessage)
})