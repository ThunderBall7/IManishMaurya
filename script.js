fetch('https://api.ipdata.co?api-key=64617e32255a8e37f89cb85a242b60f5ce63b5569099687e6318b075')
.then(response => response.json())
.then(data => {
    const country = data.country_name;
    const currency = data.currency.code;
    console.log(country);
    console.log(currency);
    console.log(data);


    document.getElementById("current_country").textContent = country;
    document.getElementById("current_currency").textContent = currency;
})
.catch(error => {
    console.log('Error', error);
});


let mainpage = document.querySelector('.header_name');

console.log(mainpage);
mainpage.addEventListener('click', function(){
    window.location  = "http://127.0.0.1:5500/index.html";
})



const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');


let sectionIndex = 0


document.querySelectorAll('.controls li').forEach(function(indicator, ind){
    indicator.addEventListener('click', function(){
    sectionIndex = ind
    document.querySelector('.controls .selected').classList.remove('selected');
    indicator.classList.add('selected')
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
    });
});


leftArrow.addEventListener('click', function(){

    sectionIndex = (sectionIndex > 0) ? sectionIndex -1 : 0;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';

});



rightArrow.addEventListener('click', function(){

    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
    document.querySelector('.controls .selected').classList.remove('selected');

    indicatorParents.children[sectionIndex].classList.add('selected');

    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';

});

const togglebtn = document.querySelector('.toggle_btn');
const togglebtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

togglebtn.onclick = function(){
    dropDownMenu.classList.toggle('open');

    const isOpen = dropDownMenu.classList.contains('open');
    togglebtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}


