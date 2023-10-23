const input = document.getElementById('input')
const planet = document.getElementById('planet-select')
const btn = document.getElementById('button')
const img = document.getElementById('image')
const message = document.querySelector('.result-message')
const kg = document.querySelector('.result-kg')

btn.addEventListener('click',() => {
  if(input.value === '' && planet.value === '--select planet--'){
    message.classList.remove('none')
    message.textContent = 'Mass is required'
  }
  else{
    message.classList.remove('none')
    kg.classList.remove('none')
    img.parentElement.classList.remove('none')
    if(planet.value === 'earth'){
      kg.innerHTML = `${(input.value * 9.81).toFixed(2)} kg`
      message.innerHTML = `The weight of the object on ${planet.value}kg`
      img.setAttribute('src','./images/earth.png')
    }

    else if(planet.value === 'jupiter'){
      kg.innerHTML = `${(input.value * 24,79).toFixed(2)} kg`
      message.innerHTML = `The weight of the object on ${planet.value}`
      img.setAttribute('src',`./images/${planet.value}.png`)
    }
    else if(planet.value === 'mars'){
      kg.innerHTML = `${(input.value * 3.711).toFixed(2)} kg`
      message.innerHTML = `The weight of the object on ${planet.value}`
      img.setAttribute('src',`./images/${planet.value}.png`)
    }

    else if(planet.value === 'mercury'){
      kg.innerHTML = `${(input.value * 3.7).toFixed(2)} kg`
      message.innerHTML = `The weight of the object on ${planet.value}`
      img.setAttribute('src',`./images/${planet.value}.png`)
    }

    else if(planet.value === 'moon'){
      kg.innerHTML = `${(input.value * 1.62).toFixed(2)} kg`
      message.innerHTML = `The weight of the object on ${planet.value}`
      img.setAttribute('src',`./images/${planet.value}.png`)
    }

    else if(planet.value === 'neptune'){
      kg.innerHTML = `${(input.value * 11.15).toFixed(2)} kg`
      message.innerHTML = `The weight of the object on ${planet.value}`
      img.setAttribute('src',`./images/${planet.value}.png`)
    }
    else if(planet.value === 'pluto'){
      kg.innerHTML = `${(input.value * 0.62).toFixed(2)} kg`
      message.innerHTML = `The weight of the object on ${planet.value}`
      img.setAttribute('src',`./images/${planet.value}.png`)
    }
    else if(planet.value === 'saturn'){
      kg.innerHTML = `${(input.value * 10.44).toFixed(2)} kg`
      message.innerHTML = `The weight of the object on ${planet.value}`
      img.setAttribute('src',`./images/${planet.value}.png`)
    }

    else if(planet.value === 'uranus'){
      kg.innerHTML = `${(input.value * 8.87).toFixed(2)} kg`
      message.innerHTML = `The weight of the object on ${planet.value}`
      img.setAttribute('src',`./images/${planet.value}.png`)
    }

    else if(planet.value === 'venus'){
      kg.innerHTML = `${(input.value * 8.87).toFixed(2)} kg`
      message.innerHTML = `The weight of the object on ${planet.value}`
      img.setAttribute('src',`./images/${planet.value}.png`)
    }

  }
})