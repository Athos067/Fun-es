console.log('oi escada');

let lances = Number(prompt('Quantos lances de escada você quer?'));
//let material = '#';
let material = prompt('Qual material você que usar?');
while(material.length!=1){
material = prompt('Digite um unico material por favor.');
}
let degrau = material;
let i = 0;

while (i < lances){
    console.log(degrau);
    degrau += material;
    i++;
}
