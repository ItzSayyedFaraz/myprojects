const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const Name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");
console.log(animated_bgs);

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" 
    alt="">`;
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, culpa!";
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/35.jpg" alt="No">`;
  Name.innerHTML = "John Doe";
  date.innerHTML = "Oct 08,2020";
  console.log(animated_bgs);

  animated_bgs.forEach((value) => value.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
