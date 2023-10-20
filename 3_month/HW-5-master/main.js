//HW-5.1
const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const eur = document.querySelector("#eur")

const convert = (elem, target1, target2) => {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.addEventListener("load", () => {
            const response = JSON.parse(request.response)
            if (elem === som) {
                target1.value = (elem.value / response.usd).toFixed(2)
                target2.value = (elem.value / response.eur).toFixed(2)
            } else if (elem === usd) {
                target1.value = (elem.value * response.usd).toFixed(2)
                target2.value = (elem.value * response.eur2).toFixed(2)
            } else if (elem === eur) {
                target1.value = (elem.value * response.eur).toFixed(2)
                target2.value = (elem.value / response.eur2).toFixed(2)
            }
            elem.value === "" && (target1.value = "")
            elem.value === "" && (target2.value = "")
        })
    })
}
convert(som, usd, eur)
convert(usd, som, eur)
convert(eur, som, usd)


//HW-5.2
const message = {
    loading: "Loading...",
    success: "Success!",
    fail: "Error"
}

const forms = document.querySelectorAll("form")
forms.forEach((item) => {
    postData (item)
})

function postData (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const messageBlock = document.createElement("div")
        messageBlock.innerText = message.loading
        form.append(messageBlock)

        const request = new XMLHttpRequest()
        request.open("POST", "server.php")
        request.setRequestHeader("Content-type", "application/json")

        const formData = new FormData(form)

        const object = {}

        formData.forEach((item,i) => {
            object[i] = item
        })
        const json = JSON.stringify(object)

        request.send(json)

        request.addEventListener("load", () => {
            if (request.status === 200) {
                console.log(request.response)
                messageBlock.innerText = message.success
            } else {
                messageBlock.innerText = message.fail
            }
        })
    })
}

