let images = document.querySelectorAll(`img`);
let first_h2 = document.querySelector(`h2`);
let all_p_tags = document.querySelectorAll(`p`);
let all_articles = document.querySelectorAll(`.article`);
let my_header = document.querySelector(`#main_header`);

let all_articles2 = document.getElementsByClassName(`article`);
let my_header2 = document.getElementById(`main_header`);

first_h2.style.fontSize = `2rem`;
first_h2.style.color = `green`;
first_h2.style.backgroundColor = `yellow`;


for(let i = 0; i < all_p_tags.length; i++)
{
    all_p_tags[i].innerHTML = `HACKED`;
}

first_h2.insertAdjacentHTML(`beforebegin`, `<h1>***</h1>`);
first_h2.insertAdjacentHTML(`afterbegin`, `<h3>***</h3>`);
first_h2.insertAdjacentHTML(`beforeend`, `<h3>***</h3>`);
first_h2.insertAdjacentHTML(`afterend`, `<h1>***</h1>`);


for(let i = 0; i<images.length; i++)
{
    images[i].setAttribute(`src`, `https://img.freepik.com/free-photo/beautiful-pet-portrait-dog_23-2149218450.jpg?w=2000&t=st=1679621275~exp=1679621875~hmac=5eb2b4f84a931cde323452f8bdce27242f0bc8323a018ee8fb468e66dae45de4`);
}
