
// Links pra testes
// https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0
// /boleto.pdf

fetch('/boleto.pdf')
.then(res => res.blob())
.then(blob => {
    console.log(blob);

    //readFile(blob);

    const file = new File([blob], 'pdf', {type: blob.type}); // segundo atributo nome do arquivo

    readFile(file);
});

function readFile(input){
    const fr = new FileReader();

    fr.readAsDataURL(input);
    fr.addEventListener('load', () =>{
        const res = fr.result;
        console.log(res);
    })
};
