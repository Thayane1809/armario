const bnt = document.querySelectorAll('.bnt');
let proximaCor = 'bnt2';

fetch('armarios.json')
  .then(response => response.json())
  .then(estados => {
    for (let i = 0; i < bnt.length; i++) {
      bnt[i].addEventListener('click', function() {
        if (proximaCor === 'bnt2') {
          this.style.backgroundColor = estados[0].cor;
          proximaCor = 'bnt3';
        } else if (proximaCor === 'bnt3') {
          this.style.backgroundColor = estados[1].cor;
          proximaCor = 'bn1';
        } else if (proximaCor === 'bn1') {
          this.style.backgroundColor = estados[2].cor;
          proximaCor = 'bnt2';
        }
      });
    }
  })
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
  });