// $(document).ready(function(){
//     $("#dropdown").select2({
//         placeholder: "Click here to view all services",
//         allowClear: true,
//         data: [
//             {id: "", text: ""},
//             {id: "", text: "1 OpenAI API(chatGPT, DALL-e 2)"}
//         ],
//         escapeMarkup: function(m){
//             return m;
//         }
//     })
// })


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


const platform_container = document.getElementById("select_platforms")


const btn = document.getElementById("search_btn")



// search_bar.addEventListener("change", function(e){
// console.log(e.target.value)
// })

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

