
function getData(url) {
  return new Promise(function (resolve, reject) {

    const req = new XMLHttpRequest()

    req.open('GET', url)

    req.onload = function () {

      if (req.status === 200) {

        resolve(req.response)
      } else {

        reject(req.status + ' ' + req.statusText)
      }
    }


    req.onerror = function () {
   
      reject('Erro de conexão')
    }

    req.send()
  })
} 


const divcontainer = document.querySelector(".container")

const p = getData("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=OvCy0T9edBcXvL0R7YNSssOZpdQ3hY5wLrsPnFX7").then(function(response) {

  const jsonResponse = JSON.parse(response)
  console.log(jsonResponse)
  
  for (const photo of jsonResponse['photos']) {
    console.log(photo.img_src)

    const divGetImg = document.createElement("div")
    const newDiv___GetImg = document.createElement("div")

    const newImg = document.createElement("img")

    divGetImg.appendChild(newDiv___GetImg)

    newDiv___GetImg.classList.add("imgrequest")

    newDiv___GetImg.appendChild(newImg)

    newImg.src = photo.img_src

    divcontainer.appendChild(divGetImg)
  }
}, function(error) { 

})
