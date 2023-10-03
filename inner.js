const query = window.location.search.slice(1).split('&');// '?page = about' => 'page=about'
const queryObject = {}; //  عشان نحول الكويري لاوبجكت وتكون شكلها key :values
 
if(query[0].length > 0) {
    for(let i = 0; i < query.length; i++) {
        var keys = query[i].split('=');

        queryObject[keys[0]] = keys[1];
        Scrollpage();
    }
}

if (!queryObject.page) {
    queryObject.page = 'about';
}

document.getElementById(queryObject.page).style.display = 'block';
document.getElementById(queryObject.page + '-link').classList.add('active');



function Scrollpage(){
    window.scrollTo({
    top:document.querySelector('.about-me').offsetTop,
    behavior:'smooth'
})
}
