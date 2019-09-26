var tmp =3000;
var count =0;
var nPhotos=3;
var sub = document.getElementById("sub");
var img = document.getElementById("imgSlider");
sub1 = ["Chicago","Los Angeles","New York"];
sub2 = [
    "Thank you, Chicago - A night we won't forget.",
    "We had the best time playing at Venice Beach!",
    "The atmosphere in New York is lorem ipsum."
]



function swap(ft){
    sub.innerHTML = `<h2>${sub1[ft]}</h2></br>`;
    sub.innerHTML += `<p>${sub2[ft]}</p>`;
    img.src = `img/s${ft}.jpg`;
}

function autoSlide(){
    swap(count);
    count < nPhotos-1? count ++ : count=0;
    setTimeout(autoSlide, tmp);
}

autoSlide();

function showTicketShop(){
    let fixed = document.getElementById("buy-ticket")
    fixed.style.display = "flex";
}
function hideTicketShop(){
    let fixed = document.getElementById("buy-ticket")
    fixed.style.display = "none";
}