// Questão 2
const ehTriangulo = (l1, l2, l3) => { 
    if ((l1 + l2 > l3) && 
        (l2 + l3 > l1) && 
        (l1 + l3 > l2)) {
        return true;
    }

    return false;
};

const identificarTipoTriangualo = (l1, l2, l3) => {
    const condicaoTriangulo = ehTriangulo(l1, l2, l3);

    if(condicaoTriangulo == true) {
        if(l1 == l2 && l2 == l3) return "Equilátero";
        if(l1 == l2 || l2 == l3 || l1 == l3) return "Isósceles";
        return "Escaleno";
    }

    return "Lados não representam um triângulo";

};

// Questão 1
const calcularAreaCirculo = (raio) => { 
    // A = PI*r**2
    return (Math.PI * (raio ** 2)).toFixed(2);
};

export { calcularAreaCirculo, identificarTipoTriangualo };