function saludar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nombre === "Tomas") {
                resolve("Hola Tomas, bienvenido");
            } else {
                reject("No te conozco");
            }
        }, 2000);
    });
}

// Consumir la promesa
saludar("Tomas")
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });
