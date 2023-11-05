const countries = [
    {
        country: "United Kingdom",
        icon: "url"
    },
    {
        country: "Kenya",
        icon: "url"
    },
    {
        country: "Kenya",
        icon: "url"
    },
    {
        country: "Kenya",
        icon: "url"
    }
]

const service_list = [
    {
        icon: "URL",
        title: "OTHER",
        desc: "Avail. 138 PCS. for 1.5 USD per day"
    },
    {
        icon: "URL",
        title: "Advcash",
        desc: "Avail. 374 PCS. for 0.3 USD per day"
    },
    {
        icon: "URL",
        title: "Airbnb",
        desc: "Avail. 107 PCS. for 0.3 USD per day"
    },
    {
        icon: "URL",
        title: "airwallex.com",
        desc: "Avail. 357 PCS. for 1 USD per day"
    },
    {
        icon: "URL",
        title: "Alibaba & TaoBao",
        desc: "Avail. 346 PCS. for 0.2 USD per day"
    }
]

document.addEventListener('DOMContentLoaded', function() {
    const search_country = document.getElementById("search-country")
    const service_name = document.getElementById("service-name")

    search_country.addEventListener('input', (event) => {
            let country_looker = event.target.value;
            // console.log(country_looker)
            const filtered_countries = countries.filter(item =>{
                if(item.country.includes(country_looker)){
                    return item.country;
                }
            })
            console.log(filtered_countries)
    });

    service_name.addEventListener("input", (event)=>{
        let service_looker = event.target.value
        const filtered_service = service_list.filter(service =>{
            if(service.title.includes(service_looker)){
                return service
            }
        })
        console.log(filtered_service)
    })
})

// switch b2n tabs

// function openTab(evt, tabName){

//     // remove active from all other tabs
//     const tabcontents = document.getElementsByClassName("tabcontent")
//     console.log(tabcontents)

//     tabcontents.forEach(tab => {
//         console.log(tab)
//     });
    

//     document.getElementById(tabName).style.display ="block";
//     evt.currentTarget.classList.add("active")
// }

const tab_btn = document.querySelectorAll(".tablink")
const tabcontents = document.querySelectorAll(".tabcontent")

console.log(tab_btn)

tab_btn.forEach((tab, index) => {
    tab.addEventListener("click", (e) =>{
        tab_btn.forEach(tab => tab.classList.remove("active"))
        tab.classList.add("active")
        tabcontents.forEach(tab => tab.classList.remove("active"))
        tabcontents[index].classList.add("active")
    })
})