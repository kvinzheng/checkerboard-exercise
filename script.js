// Your JS goes here
var body = document.body;



//this is a red and black checkboard
for(var i = 0; i < 81; i++){
  var create = document.createElement('div');

  if( i % 2 !== 0){
    create.style.backgroundColor = 'rgb(255, 0, 0)';
    create.style.width = '11.1%' ;
    create.style.float = 'left';
    create.style.paddingBottom = '11.1%';
  }
  else{
    create.style.backgroundColor = "black";
    create.style.width = '11.1%' ;
    create.style.float = 'left';
    create.style.paddingBottom = '11.1%';
  }

  body.append(create)
}
//return body;


//this is a random color checkboard
function getRandomColor(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for(var i = 0; i < 6; i++){
    color = color + letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

for(var i = 0; i < 81; i++){

  var create = document.createElement('div');

  if( i % 2 !== 0){
    create.style.backgroundColor = getRandomColor();
    create.style.width = '11.1%' ;
    create.style.float = 'left';
    create.style.paddingBottom = '11.1%';
  }
  else{
    create.style.backgroundColor = getRandomColor();
    create.style.width = '11.1%' ;
    create.style.float = 'left';
    create.style.paddingBottom = '11.1%';
  }

  body.append(create)
}
