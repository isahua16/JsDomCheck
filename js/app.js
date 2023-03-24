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

