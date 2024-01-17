let btns= document.querySelectorAll('.shoes');

let main=document.querySelector('#MainShoe')

let herobg=document.getElementById('herobg')


// console.log(btns[0]);

// let btns = document.querySelectorAll('.shoes');
// let main = document.querySelector('#MainShoe');
// let herobg = document.getElementById('herobg');

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        switch (index) {
            case 0:
                main.src = './Assets/air-max-2x-shoe-Wh9d6P-removebg-preview 1.svg';
                main.classList.add('rotate20');
                herobg.style.backgroundImage = "url('./Assets/JUSTDOITBlack.svg')";
                break;
            case 1:
                main.src = './Assets/air-max-2x-shoe-Wh9d6P-removebg-preview 2.svg';
                herobg.style.backgroundImage = "url('./Assets/JustDoItPink.svg')";
                main.classList.add('rotate20');
                break;
            case 2:
                main.src = './Assets/Shoe 3.svg';
                main.classList.remove('rotate20');
                herobg.style.backgroundImage = "url('./Assets/JUST DO IT (1).svg')";
                break;
            // Add more cases if needed
        }
    });
});
