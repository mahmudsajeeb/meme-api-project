// get the element from meme api 

const memeLoad = ()=>{
  const URL = "https://meme-api.com/gimme/100 "
  fetch("https://meme-api.com/gimme/40")
  .then(res => res.json())
  .then(data => dataShow(data.memes))
}

/// Meme Data show 
const dataShow = (memes) =>{
 
  memes.forEach( meme =>{
    console.log(meme)
       const memeContainer = document.getElementById("meme-gellary")
       // create div 
       const div = document.createElement("div")
       div.innerHTML = `
       
       <div class="card w-full glass shadow-2xl">
            <figure><img class="w-full h-64" src="${meme.url}" alt="" /></figure>
             
            </div>
          </div>
       `
       memeContainer.appendChild(div)
  })
}

// data load
memeLoad()