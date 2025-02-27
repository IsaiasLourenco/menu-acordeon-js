document.addEventListener("DOMContentLoaded", function () {

const itensPerguntasEhRespostas = document.querySelectorAll(".item");

    if (itensPerguntasEhRespostas.length > 0) {
        itensPerguntasEhRespostas.forEach(function (item) {
            item.addEventListener("click", function () {
                const itemAtivoAtual = document.querySelector(".ativo");
                if (itemAtivoAtual) {
                    itemAtivoAtual.classList.remove("ativo");
                }

                item.classList.add("ativo");

            });
        });
    }
});

// const itensPerguntasEhRespostas = document.querySelectorAll(".item");

// itensPerguntasEhRespostas.forEach(function (item) {
//     item.addEventListener("click", function () {
//         const itemAtivoAtual = document.querySelector(".ativo");

//         if (itemAtivoAtual) {
//             itemAtivoAtual.classList.remove("ativo");
//         }

//         item.classList.add("ativo");
//     });
// });