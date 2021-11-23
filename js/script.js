// Ciao Ragazzi,
// Esercizio di oggi: cartella/repo js-es6-icons
// Milestone 1 Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2 Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// Milestone 3 Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
// BONUS 1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F. 2- popolare le options della select della milestone 3 dinamicamente.
// Consigli del giorno Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
// Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina. Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi. Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina?
// Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome. Solamente quando la parte logica è completa, ci dedichiamo al css.
// N.B. :collisione: Il layout dovete farlo voi, ma potete personalizzarlo (modificato) 


const boxElement = [
	{
		nameBox: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'danger'
	},
	{
		nameBox: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'danger'
	},
	{
		nameBox: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'danger'
	},
	{
		nameBox: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'danger'
	},
	{
		nameBox: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'danger'
	},
	{
		nameBox: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'danger'
	},
	{
		nameBox: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'danger'
	},
	{
		nameBox: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'danger'
	},
	{
		nameBox: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'success'
	},
	{
		nameBox: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'success'
	},
	{
		nameBox: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'success'
	},
	{
		nameBox: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'success'
	},
	{
		nameBox: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'primary'
	},
	{
		nameBox: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'primary'
	},
	{
		nameBox: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'primary'
	},
	{
		nameBox: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'primary'
	}
];

console.log(boxElement);

// Creare le classi dinamicamente

for(i = 0; i < boxElement.length; i++) {
  InsertClass(boxElement);

};



function InsertClass (member) {
  const BoxLocal = document.getElementById("boxlocal");
  BoxLocal.innerHTML +=
  
  `
  <div class=" col-2  ">
    <div class="card" >
      <div class="card-top fs-2 bg-${member[i].color} ">
        <i class="${member[i].family} ${member[i].prefix}${member[i].nameBox}"></i>
      </div>
      <div class="card-body">
        <p class="card-text">${member[i].nameBox}</p>
      </div>
    </div>
  </div>
  
  `

};

  // AGGIUNGO LA CLASSE SELECT

  const RowLocal = document.getElementById("rowselect");
  RowLocal.innerHTML +=
  
  `
  <div class="col-6 text-light d-flex justify-content-around align-items-center">
    <h1 class=""> FILTRA PER TIPO </h1>
  <select class="form-select w-25 h-50 bg-warning " size="3" aria-label="size 2 select example">
    <option value="1" class="all">ALL</option>
    <option value="2"class="animal">ANIMAL</option>
    <option value="3"class="vegetable">VEGETABLE</option>
    <option value="3"class="user">USER</option>
  </select> 
  
  
  `;

  // Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

  function AnimalClick() {
    
    boxElement.forEach(FunctionType)
    
    function FunctionType (element) {
      const type = element.type;
      console.log(type);
      if(type === animal) {
        
      }

  };

  };






// document.querySelector("animal").addEventListener("click", AnimalClick());
// document.querySelector("user").addEventListener("click", UserSelect());
// document.querySelector("vegetable").addEventListener("click", VegetableSelect());


// const result = boxElement.filter(word => boxElement.type == animal);
// console.log(result);


// const result = words.filter(word => word.length > 6);

// const result = words.filter(word => word.length > 6);







