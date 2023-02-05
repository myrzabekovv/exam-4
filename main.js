const pics = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80',
  'https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
  'https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
]

pics.forEach((src) => {
  const div = document.createElement('div') 
  const img = document.createElement('img')
  const loading = document.createElement('img')

  img.setAttribute('src', src)
  loading.setAttribute('src', './Group 1.png')

  img.className = 'img'
  div.className = 'divImg'
  loading.className = 'loading'

  setTimeout(() => {
    loading.style.display = 'none'
  }, 1000)

  div.append(img, loading,)
  document.querySelector('section').append(div)


  const openImg = document.querySelector('.overlay-img')
  const closeImgButton = document.querySelector('.close-btn-img')
  

  div.addEventListener('click', () => {
    openImg.classList.add('open2')
    const showImg = document.createElement('img')
    const currentImage = div.querySelector('img')
    showImg.setAttribute('src', currentImage.getAttribute('src'))
    showImg.className = 'modal-img'
    document.querySelector('.overlay-img').append(showImg)

    closeImgButton.addEventListener('click', () => {
      openImg.classList.remove(`open2`)
      showImg.remove()
    })

  })

})


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