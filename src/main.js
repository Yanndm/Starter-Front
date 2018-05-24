var items = document.querySelectorAll('.topRestaurantContainer');
var more = document.querySelector('.btnMore');
var items2 = document.querySelectorAll('.topRestaurantContainer2');

more.addEventListener('click', function(){
  for (var i = 0; i < items.length; i++) {
    items[i].classList.add('hide');

}

  for (var i = 0; i < items2.length; i++) {
      items2[i].classList.add('show');
    }


})
