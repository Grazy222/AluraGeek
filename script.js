function abrirFormulario(nome, valor, imagem) {
    
    // Preenche os campos do formulário com os dados do produto clicado
    document.getElementById('nome').value = nome;
    document.getElementById('valor').value = valor;
    document.getElementById('imagem').value = imagem;
    document.getElementById('formulario').classList.remove('hidden');
        
    // Exibe o formulário

}

document.getElementById('formProduto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    
    
    // como adicioná-lo a um carrinho de compras, por exemplo.
    var nome = document.getElementById('nome').value;
    var valor = document.getElementById('valor').value;
    var imagem = document.getElementById('imagem').value;

    var produto = {
        nome: nome,
        valor: valor,
        imagem: imagem
    };
    console.log('Produto adicionado:', produto);

    // Limpa os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('valor').value = '';
    document.getElementById('imagem').value = '';
    
    
    // Esconde o formulário
  //  document.getElementById('formulario').classList.add('hidden');

     // Exibe a imagem selecionada
    //  document.getElementById('imagemExibida').src = imagem;
    //  document.getElementById('imagemSelecionada').classList.remove('hidden');
});

function previewImage() {
    var preview = document.getElementById('preview');
    var fileInput = document.getElementById('productImage');
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        preview.src = reader.result;
        preview.style.display = 'block';
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = '';
        preview.style.display = 'none';
    }
}


//funcionalidade campo botão

function guardarProduto() {
    // Aqui podemos adicionar a lógica para guardar o produto no banco de dados, por exemplo.
    // Por enquanto, vamos apenas exibir uma mensagem.
    
    // Exibe a mensagem de produto guardado com sucesso
    document.getElementById("mensagem").innerText = "Produto guardado com sucesso!";
alert("Imagem Guardada!");
}


function limparCampos() {
    document.getElementById("formProduto").reset(); // Reseta o formulário
    
    // Limpa a pré-visualização da imagem
    document.getElementById("preview").style.display = "none";
    document.getElementById("preview").src = "";

    // Opcional: outras ações de limpeza podem ser adicionadas aqui, como redefinir estilos, etc.

    alert("Campos limpos!"); // Exemplo de mensagem de alerta
}

