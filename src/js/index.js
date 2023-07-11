// Declarar Uma VARIÁVEL:const itemCiclope = document.getElementById('ciclope');
// PROCURAR ALGO NO DOCUMENTO: document.getElementById('NOME DA CLASSE OU ID');

// ------------------------------------------------------//

// OBJERTIVO 1: ---> Quando passasr o mouse em cima do personagem na listagem, devemos selecioná-lo.

// PASSOS:

// PASSO 1: Pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles

// PASSO 2: Adicionar a classe ('selecionado') no personagem que o usuário passar o cursor do mouse.

// PASSO 3: Verificarse já existe um personagem selecionado, se sim, devemos remover a seleção dele



const personagens = document.querySelectorAll('.personagem');
// PRIMEIRO PASSO CONCLUÍDO

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerHeight < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

        const personagemSelecionado = document.querySelector('.selecionado')
// SEGUNDO PASSO CONCLUÍDO

        personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado');
// TERCEIRO PASSO CONCLUÍDO  

// ------------------------------------------------------//

// OBJETIVO 2: ---> Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descriçao do personagem grande.

// PASSOS:

// PASSO 1: Pegar o elemento do personagem grande para adicionar as informações nele.

// PASSO 2: Alterar a imagem do personagem grande.

// PASSO 3: Alterar o nome do personagem grande.

// PASSO 4: Alterar a descrição do personagem grande.

    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
//PRIMEIRO PASSO CONCLUÍDO
    const idPersonagem = personagem.attributes.id.value;   
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`
// SEGUNDO PASSO CONCLUÍDO
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
// TERCEIRO PASSO CONCLUÍDO
    const idDescription = document.getElementById('descricao-personagem');
    idDescription.innerText = personagem.getAttribute('data-description');
//QUARTO PASSO CONCLUÍDO
    })
})

