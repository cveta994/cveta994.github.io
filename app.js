let pictures=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
let descrptions=
['Description for Picture 1',
'Description for Picture 2',
'Description for Picture 3',
'Description for Picture 4',
'Description for Picture 5',
]

let picture=document.getElementById('pic');
let description=document.getElementById('desc');
let index=0;

function rightClick(){
    if(index<pictures.length-1){
    index++;
    }
    else index=0;
    showPicture();
}

function leftClick(){
    if(index<=0){
        index=pictures.lenght-1;
    }
    else 
    index--;
    showPicture();
}
function showPicture(){
    description.innerText=descrptions[index];
}