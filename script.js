const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

// MILESTONE 0
// inserisco la prima img grande con js

/*

<div class="my-carousel-item active">
    <img class="img-fluid" src="http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg" alt="${images[i].title} picture">
    <div class="item-description px-3">
        <h2>Svezia</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.</p>
    </div>
</div>

<div> prova </div>

*/

//salvo output in una variabile (costante o no)

//stampi tramite output il valore "<div>prova</div>"

const output = document.getElementById('output');

//alt="${images[i].title} da rivedere dopo
/* output.innerHTML+= `
<div class="my-carousel-item active">
    <img class="img-fluid" src="http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg"  picture">
    <div class="item-description px-3">
        <h2>Svezia</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.</p>
    </div>
</div>
` */


//1. ciclo che stampa in console.log tutti gli oggetti. ATTENZIONE in questo ciclo ci reriamo agli oggetti con l'elemento dell'array in posizione (i-esima) perso tutto insieme

//2. ne fai un altro ciclo che stampa solo il titolo in console.log di tutti gli ooggetti

//3. fai u altro ciclo che stampa in div #output SOLO IL TITOLO DEGLI OGGETTI <div>titolo</div> deve essere quello dell'immagine

// inserimento dei dati
// gestione di active


// 1. 
images.forEach((images)=>{
  console.log(images)
})

// 2.
images.forEach((images)=>{
  console.log(images.title)
})

// 3.
images.forEach((images)=>{
  // output.innerHTML +=`
  // ${images.title}
  // `
})

// inserisco il blocco html 
images.forEach((images)=>{
  output.innerHTML +=`
  <div class="my-carousel-item active">
  <img class="img-fluid" src="${images.url}"  picture">
  <div class="item-description px-3">
      <h2>${images.title}</h2>
      <p>${images.description}</p>
  </div>
</div>
  `
})

