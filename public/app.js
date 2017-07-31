//li elements - name, favourite food, and image of cat
// ul, li, li, li(img)


var app = function(){

  // create parent container and class
  var catClass = document.createElement('ul');
  catClass.classList.add('cat');

  //catimage
  var catImage = document.createElement('img');
  catImage.src="http://www.wallpaperbetter.com/wallpaper/338/939/769/cute-cat-with-sunglass-very-cool-1080P-wallpaper-middle-size.jpg"
  //catname
  var catName = document.createElement('li');
  catName.innerText = "Name: Jimmy Jenkings";

  //catfood
  var catFood = document.createElement('li');
  catFood.innerText = "Favourite food: fish and chips";



catClass.appendChild(catName);
catClass.appendChild(catFood);
catClass.appendChild(catImage);



var cats = document.getElementById("cats");
cats.appendChild(catClass);

}

window.onload = app;