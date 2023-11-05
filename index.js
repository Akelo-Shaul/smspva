
const platforms = [
    {
        value: "telegram",
        title: "Telegram",
        icon: "url"
    },
    {
        value: "whatsapp",
        title: "WhatsApp",
        icon: "url"
    },
    {
        value: "Skype",
        title: "skype",
        icon: "url"
    }
]

const services = document.querySelectorAll(".grid-item")
const select_service = document.querySelectorAll(".service-selected")
const default_content = document.querySelector(".default-content")
services.forEach((service) =>{
    service.addEventListener("click", ()=>{
        default_content.style.display = "none";
        select_service.forEach(selected =>{
           selected.innerText = service.textContent; 
        })
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const search_bar = document.getElementById("search_id")

    search_bar.addEventListener('input', function(event) {
        let search_term = event.target.value
        // get all the values into a list
        const search_filter = platforms.filter(platform=>{
            if(platform.value.includes(search_term)){
                return platform
            }
        })
        console.log(search_filter)
        // check if the search term is included in the value
        
    });

});

