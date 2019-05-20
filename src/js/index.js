import '../styles/index.css'
import '../styles/main.less'

import avatar from '../assets/images/0.jpg'

const component = () => {
  const element = document.createElement('div')
  const element2 = document.createElement('a')
  const img = document.createElement('img')
  img.src = avatar
  element2.innerText = '百度一下，你就知道'
  element2.href = 'https://www.baidu.com'
  element.innerHTML = 'hello webpack'
  element.appendChild(element2)
  element.appendChild(img)
  element.classList.add('hello')

  return element
}

document.body.appendChild(component())
