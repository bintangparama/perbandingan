var text = document.getElementById('text');
var input = document.querySelector('input')
var score = 0;

var answer = Generate();
var shouldGenerate = true;

function submit() {
    if (Number.parseInt(input.value) == answer) {
        alert('Correct Answer');
        score += 1;
        shouldGenerate = true;
        input.value = '';
    } else {
        alert('Incorrect answer');
        shouldGenerate = false;
        input.value = '';
    }
    if (shouldGenerate) answer = Generate();
}

function Generate() {
    switch ( rand(1, 0) ) {
        case 0: 
            // Panjang
            var rn = RandomPanjang();

            switch ( rand(2, 0) ) {
                case 0:
                    text.innerText = CariPanjangDalamPeta(rn.skala, rn.sebenarnya, rand(1, 0));
                    console.log(rn.dalampeta);
                    text.innerText += '\n\nScore: ' + score;
                    return rn.dalampeta;
                case 1:
                    text.innerText = CariPanjangSebenarnya(rn.skala, rn.dalampeta, rand(1, 0));
                    console.log(rn.sebenarnya);
                    text.innerText += '\n\nScore: ' + score;
                    return rn.sebenarnya;
                case 2:
                    text.innerText = CariSkala(rn.sebenarnya, rn.dalampeta, rand(1, 0));
                    console.log(rn.skala);
                    text.innerText += '\n\nScore: ' + score;
                    return rn.skala;
            }

            break;
        case 1:
            // Luas
            var rn = RandomLuas();

            switch ( rand(2, 0) ) {
                case 0:
                    text.innerText = CariLuasDalamDenah(rn.skala, rn.sebenarnya, rand(1, 0));
                    console.log(rn.dalampeta);
                    text.innerText += '\n\nScore: ' + score;
                    return rn.dalampeta;
                case 1:
                    text.innerText = CariLuasSebenarnya(rn.skala, rn.dalampeta, rand(1, 0));
                    console.log(rn.sebenarnya);
                    text.innerText += '\n\nScore: ' + score;
                    return rn.sebenarnya;
                case 2:
                    text.innerText = CariSkalaLuas(rn.sebenarnya, rn.dalampeta, rand(1, 0));
                    console.log(rn.skala);
                    text.innerText += '\n\nScore: ' + score;
                    return rn.skala;
            }
            break;
    }
    
}