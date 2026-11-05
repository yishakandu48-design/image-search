const imagesContainer=document.querySelector(`.image-container`);
const search=document.querySelector(`.search`);
const input=document.querySelector(`input`);
const more=document.querySelector(`.more_image`);
const hidden=document.querySelector(`.hidden`);
let page=1;
const imageSearch= async function(name){
   const response = await fetch(
  `https://api.pexels.com/v1/search?query=${name}&page=${page}&per_page=9`,
  {
    headers: {
      Authorization: 'WtA4FMVWWBfdVLYjtMGynagd0gbqkmeNSRXpgOdw6g08CYnABTZoxNM4'
    }
  }
);
const data= await response.json(); 

  if(page===1){
  imagesContainer.innerHTML = '';
  }

  data.photos.forEach(photo => {
    imagesContainer.insertAdjacentHTML(
      'beforeend',
      `<img class="image" src="${photo.src.large}" alt="${photo.alt || ''}">`
    );
    more.classList.remove(`hidden`);
  });
  
//console.log(data);
}

search.addEventListener(`click`,function(){
  imageSearch(`${input.value}`);


   
  
});
more.addEventListener(`click`,function(){
  page++;
  imageSearch(`${input.value}`);

});



