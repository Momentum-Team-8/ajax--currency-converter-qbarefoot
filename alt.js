const url = 'http://api.exchangeratesapi.io/v1/latest?access_key=f47d73e37cf7de4d65d33fad1324c1ac'

fetch(url)
  .then(response => response.json())
  .then(data => {
      console.log(data)
    const info = data.rates
    console.log(info)




window.onload = function() {
    let currencyOne = document.querySelector(".convert-from")

    let currencyTwo = document.querySelector(".convert-to")
}