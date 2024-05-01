const inputFile = document.querySelector('#picture__input');
const pictureImage = document.querySelector('.picture__image');
const pictureImageTxt = "Imagem...";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener('change', function(e) {
    const inputTarget = e.target[0];
    const file = inputTarget.files[0];
    
    if(file){
        const reader = new FileReader();

        reader.addEventListener('load', function(e){
            const readerTarget = e.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('picture__img');
            pictureImage.innerHTML = '';

            pictureImage.appendChild(img)

        });

        reader.readAsDataURL(file);
        // pictureImage.innerHTML = pictureImageTxt;
    }else{
        pictureImage.innerHTML = pictureImageTxt;
    }
});

// fechando estilo imagem. colocando funcinal na hora de chamar uma imagem


//criando a minha loja

const items = [ 
    { 
        id:0,
        nome:'Xicara',
        img:'./imagens/xicara.png',
        quantidade:0
    },
    { 
        id:1,
        nome:'GameBoy',
        img:'./imagens/gameBoy.png',
        quantidade:0
    },
   
] //chamando a loja

inicializarLoja = () => { 
    var bloco1 = document.getElementById('produtos');
    items.map((val)=>{
        bloco1.innerHTML+=`
        
        <div class="bloco1">
            <img src=" ${val.img} "/>
            <p>${val.nome}</p>
            <a key="${val.id}" href="./imagens">Adicionar ao carrinho</a>
        </div>
        `;
    })
}

inicializarLoja();

//input guardar

atualizarCarrinho = () => { 
    var containerCarrinho = document.getElementById('carrinho');
    items.map((val)=>{
        containerCarrinho.innerHTML+=`
        
        <div class="bloco1">
            <img src=" ${val.img} "/>
            <p>${val.nome}</p>
            <a key="${val.id}" href="./imagens">Adicionar ao carrinho</a>
        </div>
        `;
    })
}