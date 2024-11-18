document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Aquí deberías hacer una llamada a tu API o base de datos para obtener los detalles del producto
    // Por ahora, usaremos datos de ejemplo
    const productData = {
        1: {
            name: "Samsung Galaxy A54",
            description: "Un teléfono potente con cámara de alta resolución y batería de larga duración.",
            price: "$999.000",
            image: "imgPhone/oppo-removebg-preview.png",
            specs: [
                "Pantalla: 6.4 pulgadas Super AMOLED",
                "Cámara: 50MP + 12MP + 5MP",
                "Batería: 5000mAh",
                "Almacenamiento: 128GB"
            ]
        },
        // Agrega más productos aquí
        2: {
            name: "iPhone 16",
            description: "Un diseño elegante con el rendimiento excepcional que esperas de Apple.",
            price: "$5.499.000",
            image: "imgPhone/iphone_16__c5bvots96jee_large.png",
            specs: [
                "Pantalla: 6.1 pulgadas Super Retina XDR",
                "Cámara: 48MP principal, 12MP ultra gran angular",
                "Chip: A18 Bionic",
                "Batería: Hasta 20 horas de reproducción de video",
                "Almacenamiento: 128GB, 256GB, 512GB"
            ]
        },
        3: {
            name: "iPhone 16 Pro",
            description: "La versión Pro con funcionalidades avanzadas para profesionales y entusiastas.",
            price: "$6.999.000",
            image: "imgPhone/iphone_16pro__erw9alves2qa_large.png",
            specs: [
                "Pantalla: 6.7 pulgadas ProMotion OLED",
                "Cámara: 48MP principal, 12MP ultra gran angular, 12MP teleobjetivo",
                "Chip: A18 Pro Bionic",
                "Material: Titanio de grado aeroespacial",
                "Almacenamiento: 256GB, 512GB, 1TB"
            ]
        },
        4: {
            name: "Huawei Pura 70",
            description: "El balance perfecto entre diseño, rendimiento y conectividad.",
            price: "$3.199.000",
            image: "imgPhone/pura70-pro-removebg-preview.png",
            specs: [
                "Pantalla: 6.6 pulgadas OLED",
                "Cámara: 64MP + 13MP + 8MP",
                "Procesador: Kirin 990",
                "Batería: 4500mAh con carga rápida de 66W",
                "Almacenamiento: 256GB"
            ]
        },
        5: {
            name: "Samsung Galaxy S24 Ultra",
            description: "El tope de gama con un rendimiento y diseño incomparables.",
            price: "$7.299.000",
            image: "imgPhone/Samsung-Galaxy-S24-Ultra-removebg-preview.png",
            specs: [
                "Pantalla: 6.8 pulgadas Dynamic AMOLED 2X",
                "Cámara: 200MP + 12MP + 10MP + 10MP",
                "Procesador: Snapdragon 8 Gen 2",
                "Batería: 5000mAh con carga inalámbrica",
                "Almacenamiento: 256GB, 512GB, 1TB"
            ]
        },
        6: {
            name: "Realme Watch Pro",
            description: "El reloj más seguro y preciso para tus actividades diarias.",
            price: "$2.999.000",
            image: "imgPhone/realem_watch_s-removebg-preview.webp",
            specs: [
                "Marca: Realme",
                "Modelo: Watch Pro",
                "Pantalla: 1.78 pulgadas Super AMOLED",
                "Cámara: 20MP + 12MP",
                "Procesador: Snapdragon 855",
                "Batería: 3000mAh",
                "Almacenamiento: 64GB"
            ]

        },
        7: {
            name: "Realme Buds Air 3",
            description: "El buds más seguro y eficiente para tu salud.",
            price: "$2.499.000",
            image: "imgPhone/realmebudsair3.png",
            specs: [
                "Marca: Realme",
                "Modelo: Buds Air 3",
                "Cámara: 30MP",
                "Procesador: Snapdragon 855",
                "Batería: 2500mAh",
                "Almacenamiento: 64GB",
                "Conectividad: Bluetooth 5.0, NFC, A2DP, HFP",
            ]
        }
        
    };

    const product = productData[productId];

    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-image').src = product.image;

        const specsList = document.getElementById('product-specs');
        product.specs.forEach(spec => {
            const li = document.createElement('li');
            li.textContent = spec;
            specsList.appendChild(li);
        });
    } else {
        document.querySelector('.product-info').innerHTML = '<p>Producto no encontrado</p>';
    }

    document.getElementById('payment-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Gracias por tu compra! Este es solo un ejemplo y no se ha procesado ningún pago real.');
    });
});