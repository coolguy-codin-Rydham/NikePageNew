let btns= document.querySelectorAll('.shoes');

let main=document.querySelector('#MainShoe')

let herobg=document.getElementById('herobg')


// console.log(btns[0]);

// let btns = document.querySelectorAll('.shoes');
// let main = document.querySelector('#MainShoe');
// let herobg = document.getElementById('herobg');


btns[0].addEventListener('click', ()=>{
    main.src=`./assets/air-max-2x-shoe-Wh9d6P-removebg-preview 1.svg`;
    main.classList.add('rotate20')
    herobg.style.backgroundImage="url('./assets/JUSTDOITBlack.svg')"
    // main.classList.remove('right-10');
    // main.classList.add('right-52');
})

btns[1].addEventListener('click',()=>{
    main.src='./assets/air-max-2x-shoe-Wh9d6P-removebg-preview 2.svg';
    herobg.style.backgroundImage="url('./assets/JustDoItPink.svg')"
    main.classList.add('rotate20')
})
btns[2].addEventListener('click', ()=>{
    main.src=`./assets/Shoe 3.svg`;
    main.classList.remove('rotate20')
    herobg.style.backgroundImage="url('./assets/JUST DO IT (1).svg')"
})