const url = 'https://raw.githubusercontent.com/alanpradomobile/ciencia-de-dados-alan/refs/heads/main/dados-globais.json';

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url);

    const dados = await res.json();
    
}