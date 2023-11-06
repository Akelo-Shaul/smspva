
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

const services = document.querySelectorAll(".grid-title")
const select_service = document.querySelectorAll(".service-selected")
const select_service_for = document.querySelectorAll(".service-selected-for")
const default_content = document.querySelector(".default-content")
const countries = document.querySelectorAll(".country-title")
const select_country = document.querySelectorAll(".selected-country")
const country_btn = document.querySelectorAll(".country-button")
const info_temp = document.querySelector(".info-temp")
const info_temp_1 = document.querySelector(".info-temp-1")
const temp_triad = document.querySelector(".temp-triad");
const how_select_service = document.querySelector(".how-select-service")
const about_country = document.querySelector(".about-country")
const top_selling_services = document.querySelector(".top-selling-services")
const select_service_content = document.querySelector(".select-service-content")
const for_both_container = document.querySelector(".for-both-container")

let is_selected = false;
let is_selected_1 = false;

services.forEach((service) =>{
    service.addEventListener("click", ()=>{
        how_select_service.style.display = "flex"
        select_service_content.style.display = "block"
        default_content.style.display = "none";
        select_service.forEach(selected =>{
           selected.innerText = "for " + service.textContent; 
        })
        select_service_for.forEach(selected =>{
            selected.innerText = service.textContent;
        })
        is_selected = true;
    })
})

country_btn.forEach(btn => {
    btn.addEventListener("click", () => {
        const country_item = btn.parentElement.parentElement;
        const country_title = country_item.querySelector(".country-title")

        default_content.style.display = "none";
        select_service_content.style.display = "block"
        info_temp.style.display = "none";
        info_temp_1.style.display = "block"

        select_country.forEach(selected => {
            selected.innerText = "in " + country_title.textContent;
        })

        btn.innerHTML = '<div>Selected</div>';

        temp_triad.style.display = "none"
        how_select_service.style.display = "none"
        about_country.style.display = "flex"
        top_selling_services.style.display = "block"

        is_selected_1 = true;

        if(is_selected && is_selected_1){
            how_select_service.style.display = "flex"
            // for both items selected
            // how_select_service.classList.add("active")
            // about_country.classList.add("active")
            // for_both_container.classList.add("active")
        }

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

