

async function fetchProfile () {
   let respone = await fetch('https://randomuser.me/api')
   let data = await respone.json()
   let name = document.querySelector('.name')
   let addressLine = document.querySelector('.address')
   let email = document.querySelector('.email')
   let dob = document.querySelector('.dob')
   let contact = document.querySelector('.contact')
   let image = document.querySelector('.profile')
   let profileImage = data.results[0].picture 
   let picUrl = profileImage.large
   image.setAttribute('src',picUrl)
   let userName = data.results[0].name
   name.innerText = `${userName.title} ${userName.first} ${userName.last}`
   let address = data.results[0].location
   let addressStreet = address.street
   let coordinatePoints = address.coordinates
   addressLine.innerText = `${addressStreet.number} ${addressStreet.name} ${address.city} ${address.state} ${address.country} ${address.postcode} ${coordinatePoints.latitude} ${coordinatePoints.longitude}`
   let emailAddress = data.results[0].email 
   let dobData = data.results[0].dob
   email.innerText = emailAddress
   dob.innerText = `${dobData.date} ${dobData.age} age`
   contact.innerText = data.results[0].phone
}
fetchProfile()