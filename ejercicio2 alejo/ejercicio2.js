function obtenerNumero() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 2000);
    });
}

function multiplicarPorDos(numero) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numero * 2);
        }, 2000);
    });
}

// Flujo correcto
obtenerNumero()
    .then((num) => {
        return multiplicarPorDos(num);
    })
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error(error);
    });
