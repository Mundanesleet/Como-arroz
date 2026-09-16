/* =========================================================
   COMO ARROZ - APP.JS
   Menú digital + carrito + pedidos por WhatsApp
   Imágenes: WebP optimizadas + fallback JPG
   ========================================================= */

const NUMERO_WHATSAPP = "573224047068";

/* =========================================================
   PRODUCTOS
   ========================================================= */

function crearProducto(id, nombre, categoria, imagen, descripcion, precio, etiqueta = "") {
    const base = `img/${categoria}/${imagen}`;
    return {
        id,
        nombre,
        categoria,
        ...(Array.isArray(precio)
            ? { variantes: precio }
            : { precio }),
        imagen: `img/web/${categoria}/${imagen}.webp`,
        imagenOriginal: `${base}.jpg`,
        descripcion,
        etiqueta
    };
}

const productos = [
    // ARROCES
    crearProducto(1, "Arroz Tailandés", "arroces", "arroz-thai",
        "Arroz frito al wok con lomo de cerdo, carne desmechada, camarones, raíces, salsa teriyaki y vegetales frescos.",
        [{ nombre: "¼ porción", precio: 27000 }, { nombre: "½ porción", precio: 40000 }, { nombre: "Caja", precio: 60000 }], "RECOMENDADO"),

    crearProducto(2, "Arroz Chino", "arroces", "arroz-chino",
        "Arroz frito al wok con vegetales frescos, raíces, lomo de cerdo, pechuga en trozos, camarones salteados y salsa de soya china.",
        [{ nombre: "¼ porción", precio: 27000 }, { nombre: "½ porción", precio: 40000 }, { nombre: "Caja", precio: 60000 }]),

    crearProducto(3, "Arroz Ranchero", "arroces", "arroz-ranchero",
        "Arroz frito al wok con jamón, salchicha llanera, lomo de cerdo, maíz tierno y vegetales frescos salteados.",
        [{ nombre: "¼ porción", precio: 27000 }, { nombre: "½ porción", precio: 40000 }, { nombre: "Caja", precio: 60000 }], "MÁS PEDIDO"),

    crearProducto(4, "Arroz Italiano", "arroces", "arroz-italiano",
        "Arroz preparado con carne desmechada, pechuga en trozos, salchicha llanera, queso, salsa italiana y salsa de soya.",
        [{ nombre: "¼ porción", precio: 27000 }, { nombre: "½ porción", precio: 40000 }, { nombre: "Caja", precio: 60000 }]),

    crearProducto(5, "Arroz Mexicano", "arroces", "arroz-mexicano",
        "Arroz frito al wok preparado con vegetales, salchicha llanera, jamón ahumado, jalapeños, lomo de cerdo y doritos.",
        [{ nombre: "¼ porción", precio: 27000 }, { nombre: "½ porción", precio: 40000 }, { nombre: "Caja", precio: 60000 }]),

    crearProducto(6, "Arroz Queso y Jamón", "arroces", "arroz-queso-jamon",
        "Arroz preparado con queso y jamón, con carne y pollo en trozos y salsa de la casa.",
        [{ nombre: "¼ porción", precio: 27000 }, { nombre: "½ porción", precio: 40000 }, { nombre: "Caja", precio: 60000 }]),

    crearProducto(7, "Arroz Vegetariano", "arroces", "arroz-vegetariano",
        "Arroz preparado con maíz tierno, zanahoria, pimentón, calabacín, cebolla en julianas, brócoli, coliflor y queso.",
        [{ nombre: "¼ porción", precio: 27000 }, { nombre: "½ porción", precio: 40000 }, { nombre: "Caja", precio: 60000 }], "VEGETARIANO"),

    crearProducto(8, "Arroz Demasiadas Carnes", "arroces", "arroz-demasiadas-carnes",
        "Arroz frito al wok con una preparación de todas las carnes: lomo de cerdo, pechuga, jamón, salchicha y carne de res desmechada con salsa de soya y BBQ.",
        [{ nombre: "¼ porción", precio: 38000 }, { nombre: "½ porción", precio: 51000 }, { nombre: "Caja", precio: 75000 }], "🔥 ESPECIAL"),

    crearProducto(9, "Arroz con Camarones", "arroces", "arroz-camarones",
        "Arroz preparado con vegetales frescos, pollo en trozos, lomo de cerdo y camarón tigre.",
        [{ nombre: "¼ porción", precio: 38000 }, { nombre: "½ porción", precio: 51000 }, { nombre: "Caja", precio: 75000 }], "🦐 ESPECIAL"),

    crearProducto(10, "Arroz Mixto", "arroces", "arroz-mixto",
        "Arroz preparado con vegetales frescos, raíces, plátano maduro, maíz, tocineta, chicharrón, pollo y chorizo.",
        [{ nombre: "¼ porción", precio: 38000 }, { nombre: "½ porción", precio: 51000 }, { nombre: "Caja", precio: 75000 }], "ESPECIAL"),


    // ESPAGUETIS
    crearProducto(11, "Espagueti Vegetariano", "espaguetis", "espagueti-vegetariano",
        "Delicioso espagueti con maíz tierno, raíces, zanahoria, pimentón, calabacín, brócoli, champiñones, coliflor y queso.",
        28000,
        "VEGETARIANO"),

    crearProducto(12, "Espagueti Tailandés", "espaguetis", "espagueti-thai",
        "Delicioso espagueti preparado con carne desmechada, camarones, vegetales frescos, queso y salsa de la casa.",
        28000,
        "RECOMENDADO"),

    crearProducto(13, "Espagueti Ranchero", "espaguetis", "espagueti-ranchero",
        "Espagueti en salsa de la casa con salchicha llanera, jamón ahumado, maíz tierno, queso y vegetales frescos.",
        28000),

    crearProducto(14, "Espagueti Mexicano", "espaguetis", "espagueti-mexicano",
        "Espagueti en salsa de la casa con salchicha llanera, jamón, jalapeños, queso y vegetales frescos.",
        28000),

    crearProducto(15, "Espagueti Italiano", "espaguetis", "espagueti-italiano",
        "Espagueti con queso, vegetales, carne desmechada, pechuga en trozos y salsa de la casa.",
        28000),

    crearProducto(16, "Espagueti Demasiadas Carnes", "espaguetis", "espagueti-demasiadas-carnes",
        "Espagueti con salsa de la casa, vegetales frescos y una cama de carnes picadas, salchicha, cerdo, jamón, carne desmechada, pechuga en trozos y queso.",
        43000,
        "🔥 ESPECIAL"),

    crearProducto(17, "Espagueti Camarones", "espaguetis", "espagueti-camarones",
        "Espagueti con pechuga en trozos, vegetales frescos y una cama de camarones de primera.",
        43000,
        "🦐 ESPECIAL"),


    // CARNES
    crearProducto(18, "Churrasco", "carnes", "churrasco",
        "Lomo de res de 270 gramos con ensalada fría y papas a la francesa.",
        33000),

    crearProducto(19, "Pechuga a la Plancha", "carnes", "pechuga-plancha",
        "Filete de pechuga de 270 gramos con ensalada fría y papas a la francesa.",
        27500),

    crearProducto(20, "Lomo de Cerdo", "carnes", "lomo-cerdo",
        "Lomo de cerdo de 270 gramos con ensalada fría y papas a la francesa.",
        33000),

    crearProducto(21, "Picada de Carnes", "carnes", "picada-carnes",
        "Lomo de cerdo, lomo de res, pechuga, chorizo, salchicha llanera, papas a la francesa, plátanos y huevos de codorniz.",
        38000,
        "PARA COMPARTIR"),

    crearProducto(22, "Costillas BBQ", "carnes", "costillas-bbq",
        "400 gramos de costillas acompañadas de papa a la francesa.",
        38000),

    crearProducto(23, "Ceviche de Camarones", "carnes", "ceviche-camarones",
        "250 gramos de camarón tigre con salsa de tomate, mayonesa, ajo, ají, pimentón, cebolla y cilantro, acompañado con galletas saltín y jugo de naranja.",
        25000,
        "🦐"),

    crearProducto(24, "Ceviche Especial", "carnes", "ceviche-especial",
        "Ceviche con ingredientes frescos, camarón tigre, pimentón, cilantro, salsa de ajo y sal, acompañado con galletas saltín y jugo de naranja.",
        29000,
        "🦐 ESPECIAL"),


    // MAZORCADAS
    crearProducto(25, "Mazorcada de Pollo", "mazorcadas", "mazorcada-pollo",
        "Pechuga en trozos, maíz tierno, queso, ripio de papa y salsas.",
        28500),

    crearProducto(26, "Mazorcada de Carnes", "mazorcadas", "mazorcada-carnes",
        "Carne desmechada, maíz tierno, queso, ripio de papa y salsas.",
        28500),

    crearProducto(27, "Mazorcada Mixta", "mazorcadas", "mazorcada-mixta",
        "Carne desmechada, pechuga en trozos, tocineta, maíz tierno, queso, ripio de papa y salsas.",
        32000,
        "MÁS PEDIDO"),

    crearProducto(28, "Mazorcada Media Mixta", "mazorcadas", "mazorcada-media-mixta",
        "Carne desmechada, pechuga en trozos, tocineta, maíz tierno, queso, ripio de papa y salsas.",
        20000),


    // HAMBURGUESAS Y COMIDAS RÁPIDAS
    crearProducto(29, "Hamburguesa Sencilla", "hamburguesas", "hamburguesa-sencilla",
        "Pan o patacón, carne de res o pollo apanado, lechuga, tomate, cebolla sofrita y salsas.",
        [
            { nombre: "Pan", precio: 19000 },
            { nombre: "Patacón", precio: 20000 }
        ]),

    crearProducto(30, "Hamburguesa Especial", "hamburguesas", "hamburguesa-especial",
        "Doble carne de res, pollo apanado o mixta, doble queso, lechuga, tomate, cebolla sofrita y champiñones.",
        [
            { nombre: "Pan", precio: 27500 },
            { nombre: "Patacón", precio: 29000 }
        ],
        "MÁS PEDIDO"),

    crearProducto(31, "Choripapa", "hamburguesas", "choripapa",
        "300 gramos de papa a la francesa, chorizo de Las Brisas, queso y huevos de codorniz.",
        22000),

    crearProducto(32, "Chorizo", "hamburguesas", "chorizo",
        "Chorizo de Las Brisas acompañado con 150 gramos de papas a la francesa, lechuga y tomate.",
        10000),

    crearProducto(33, "Nuggets de Pollo", "hamburguesas", "nuggets-pollo",
        "Nuggets de pollo acompañados con papas a la francesa.",
        19000),

    crearProducto(34, "Salchipapa Especial", "hamburguesas", "salchipapa-especial",
        "300 gramos de papa a la francesa, salchicha llanera, queso y huevo de codorniz.",
        21000),

    crearProducto(35, "Salchipapa Junior", "hamburguesas", "salchipapa-junior",
        "Papa a la francesa, salchicha llanera, queso y huevo de codorniz.",
        13000),


    // CHOP SUEY
    crearProducto(36, "Chop Suey Vegetales", "chop-suey", "chop-suey-vegetales",
        "Vegetales frescos: cebolla, brócoli, coliflor, pimentón, calabacín, raíces y zanahoria en delicioso caldo de pollo.",
        22000),

    crearProducto(37, "Chop Suey con Lomo de Cerdo", "chop-suey", "chop-suey-cerdo",
        "Chop Suey de vegetales acompañado de lomo de cerdo.",
        30000),

    crearProducto(38, "Chop Suey con Pollo", "chop-suey", "chop-suey-pollo",
        "Chop Suey de vegetales acompañado de pollo.",
        30000),

    crearProducto(39, "Chop Suey Mixto", "chop-suey", "chop-suey-mixto",
        "Chop Suey mixto de pollo, cerdo y camarón.",
        34000,
        "RECOMENDADO"),


    // BEBIDAS
    crearProducto(40, "Jugo Natural en Agua", "bebidas", "jugo-agua",
        "Sabores: fresa, mora, maracuyá, mango, lulo, guanábana y limonada.",
        [
            { nombre: "Vaso 22 oz", precio: 6500 },
            { nombre: "Jarra 40 oz", precio: 12000 }
        ]),

    crearProducto(41, "Jugo Natural en Leche", "bebidas", "jugo-leche",
        "Sabores: fresa, mora, maracuyá, mango, lulo, guanábana y limonada.",
        [
            { nombre: "Vaso 22 oz", precio: 8500 },
            { nombre: "Jarra 40 oz", precio: 16000 }
        ]),

    crearProducto(42, "Jugo Hit Personal", "bebidas", "hit-personal",
        "Jugo Hit personal.",
        4500),

    crearProducto(43, "Jugo Hit Litro", "bebidas", "hit-litro",
        "Jugo Hit en presentación de litro.",
        6500),

    crearProducto(44, "Gaseosa Tropikola 400 ml", "bebidas", "tropikola-400",
        "Gaseosa Tropikola de 400 ml.",
        5500),

    crearProducto(45, "Gaseosa PET 400 ml", "bebidas", "gaseosa-pet-400",
        "Gaseosa PET de 400 ml.",
        5000),

    crearProducto(46, "Gaseosa 1.5 L", "bebidas", "gaseosa-1-5",
        "Gaseosa familiar de 1.5 litros.",
        9500),

    crearProducto(47, "Gaseosa 3 L", "bebidas", "gaseosa-3",
        "Gaseosa familiar de 3 litros.",
        13000),

    crearProducto(48, "Power", "bebidas", "power",
        "Bebida Power.",
        5500),

    crearProducto(49, "Agua", "bebidas", "agua",
        "Botella de agua.",
        3000),

    crearProducto(50, "Agua con Gas", "bebidas", "agua-gas",
        "Botella de agua con gas.",
        4000),

    crearProducto(51, "Cerveza Águila o Poker", "bebidas", "aguila-poker",
        "Presentación disponible según existencia.",
        5000),

    crearProducto(52, "Cerveza Club Colombia", "bebidas", "club-colombia",
        "Cerveza Club Colombia.",
        6000),

    crearProducto(53, "Cerveza Corona / Heineken", "bebidas", "corona-heineken",
        "Presentación disponible según existencia.",
        7000),

    crearProducto(54, "Limonada de Coco", "bebidas", "limonada-coco",
        "Limonada de coco.",
        13000,
        "NUEVA"),

    crearProducto(55, "Limonada de Cereza", "bebidas", "limonada-cereza",
        "Limonada de cereza.",
        13000,
        "NUEVA"),

    crearProducto(56, "Malteada", "bebidas", "malteada",
        "Malteada de la casa.",
        13000,
        "NUEVA"),

    crearProducto(57, "Limonada Mango Biche", "bebidas", "limonada-mango-biche",
        "Limonada de mango biche.",
        13000,
        "NUEVA"),

    crearProducto(58, "Maltiricrunch", "bebidas", "maltiricrunch",
        "Nueva bebida de la casa con topping especial.",
        16500,
        "NUEVA"),


    // ADICIONALES
    crearProducto(59, "Papas a la Francesa 125 g", "adicionales", "papas-125",
        "Porción de papas a la francesa de 125 gramos.",
        4500),

    crearProducto(60, "Papas a la Francesa 250 g", "adicionales", "papas-250",
        "Porción de papas a la francesa de 250 gramos.",
        8000),

    crearProducto(61, "Yuca Frita", "adicionales", "yuca",
        "Porción de yuca frita.",
        4500),

    crearProducto(62, "Patacón", "adicionales", "patacon",
        "Porción de patacón.",
        5500),

    crearProducto(63, "Camarón Tigre 250 g", "adicionales", "camaron",
        "Porción de camarón tigre de 250 gramos.",
        19000,
        "🦐"),

    crearProducto(64, "Queso", "adicionales", "queso",
        "Porción adicional de queso.",
        3000),

    crearProducto(65, "Jalapeños", "adicionales", "jalapenos",
        "Porción adicional de jalapeños.",
        2200),

    crearProducto(66, "Maíz Tierno", "adicionales", "maiz-tierno",
        "Porción adicional de maíz tierno.",
        6000),

    crearProducto(67, "Ensalada Fría", "adicionales", "ensalada",
        "Porción de ensalada fría.",
        7500),

    crearProducto(68, "Huevos de Codorniz", "adicionales", "huevos-codorniz",
        "Porción de huevos de codorniz.",
        6000),

    crearProducto(69, "Tocineta", "adicionales", "tocineta",
        "Porción adicional de tocineta.",
        4000),

    crearProducto(70, "Empaque", "adicionales", "empaque",
        "Empaque para llevar.",
        1500),


    // ENTRADAS
    crearProducto(71, "Rollos Primavera (Lumpias) x2", "entradas", "lumpias",
        "2 rollos primavera (lumpias).",
        7000,
        "ENTRADA"),

    crearProducto(72, "Rollos Primavera (Lumpias) x4", "entradas", "lumpias",
        "4 rollos primavera (lumpias).",
        13000,
        "ENTRADA"),

    crearProducto(73, "Plato de Arroz Demasiadas Carnes", "entradas", "plato-arroz-demasiadas-carnes",
        "Arroz frito al wok con una preparación especial de todas las carnes, con salsa de soya y BBQ.",
        21000,
        "ESPECIAL")
];


/* =========================================================
   DOM + ESTADO
   ========================================================= */

const contenedorProductos =
    document.getElementById("contenedorProductos");

const tituloCategoria =
    document.getElementById("tituloCategoria");

const cantidadProductos =
    document.getElementById("cantidadProductos");

const botonesCategoria =
    document.querySelectorAll(".categoria-btn");

const carritoContador =
    document.getElementById("carritoContador");

const carritoProductos =
    document.getElementById("carritoProductos");

const carritoVacio =
    document.getElementById("carritoVacio");

const carritoResumen =
    document.getElementById("carritoResumen");

const carritoSubtotal =
    document.getElementById("carritoSubtotal");

const carritoTotal =
    document.getElementById("carritoTotal");

const btnContinuarPedido =
    document.getElementById("btnContinuarPedido");

const btnCombo =
    document.getElementById("btnCombo");

const modalPedidoElement =
    document.getElementById("modalPedido");

const modalPedido =
    modalPedidoElement
        ? new bootstrap.Modal(modalPedidoElement)
        : null;

let carrito = [];

let modalVariantes = null;

let productoPendiente = null;


/* =========================================================
   UTILIDADES
   ========================================================= */

function formatoPrecio(valor) {

    return new Intl.NumberFormat(
        "es-CO",
        {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0
        }
    ).format(valor);

}


function escaparHTML(valor) {

    return String(valor ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function nombreCategoria(categoria) {

    const nombres = {

        arroces:
            "Arroces",

        espaguetis:
            "Espaguetis",

        carnes:
            "Carnes a la Plancha",

        hamburguesas:
            "Hamburguesas y Comidas Rápidas",

        mazorcadas:
            "Mazorcadas",

        "chop-suey":
            "Chop Suey",

        bebidas:
            "Bebidas",

        adicionales:
            "Adicionales",

        entradas:
            "Entradas"

    };

    return nombres[categoria] || categoria;

}


function iconoCategoria(categoria) {

    const iconos = {

        arroces:
            "bi-egg-fried",

        espaguetis:
            "bi-egg",

        carnes:
            "bi-fire",

        hamburguesas:
            "bi-burger",

        mazorcadas:
            "bi-circle",

        "chop-suey":
            "bi-bowl-hot",

        bebidas:
            "bi-cup-straw",

        adicionales:
            "bi-plus-circle",

        entradas:
            "bi-box2-heart"

    };

    return (
        iconos[categoria] ||
        "bi-egg-fried"
    );

}


function tieneVariantes(producto) {

    return (
        Array.isArray(
            producto.variantes
        ) &&
        producto.variantes.length > 0
    );

}


function precioDesde(producto) {

    return tieneVariantes(producto)

        ? Math.min(
            ...producto.variantes.map(
                variante =>
                    variante.precio
            )
        )

        : producto.precio;

}


function obtenerLineaId(
    id,
    variante = null
) {

    const texto =
        variante

            ? String(variante)
                .toLowerCase()
                .trim()
                .replace(
                    /\s+/g,
                    "-"
                )

            : "normal";

    return `${id}-${texto}`;

}


/* =========================================================
   MOSTRAR PRODUCTOS
   ========================================================= */

function mostrarProductos(
    categoria = "arroces"
) {

    if (!contenedorProductos) {
        return;
    }

    const lista =
        productos.filter(
            producto =>
                producto.categoria ===
                categoria
        );

    if (tituloCategoria) {

        tituloCategoria.textContent =
            nombreCategoria(
                categoria
            );

    }

    if (cantidadProductos) {

        cantidadProductos.textContent =
            lista.length;

    }

    contenedorProductos.innerHTML =
        "";

    lista.forEach(
        (
            producto,
            indice
        ) => {

            const tarjeta =
                document.createElement(
                    "div"
                );

            tarjeta.className =
                "col-12 col-sm-6 col-lg-4";

            tarjeta.style.opacity =
                "0";

            tarjeta.style.transform =
                "translateY(16px)";


            const nombre =
                escaparHTML(
                    producto.nombre
                );

            const descripcion =
                escaparHTML(
                    producto.descripcion
                );

            const etiqueta =
                escaparHTML(
                    producto.etiqueta || ""
                );


            const precioHTML =
                tieneVariantes(
                    producto
                )

                    ? `Desde ${formatoPrecio(
                        precioDesde(
                            producto
                        )
                    )}`

                    : formatoPrecio(
                        producto.precio
                    );


            tarjeta.innerHTML = `

                <div class="producto-card">

                    <div class="producto-imagen">

                        <img
                            src="${producto.imagen}"
                            alt="${nombre}"
                            class="producto-foto"
                            loading="lazy"
                            decoding="async"
                            width="1200"
                            height="800"
                            onerror="
                                if (
                                    this.dataset.fallback !== '1'
                                ) {
                                    this.dataset.fallback = '1';
                                    this.src = '${producto.imagenOriginal}';
                                } else {
                                    this.style.display = 'none';
                                    this.nextElementSibling.style.display = 'flex';
                                }
                            "
                        >

                        <div
                            class="producto-imagen-placeholder"
                            style="display:none;"
                        >

                            <i
                                class="bi ${iconoCategoria(
                                    producto.categoria
                                )}"
                            ></i>

                            <span>
                                Foto del plato
                            </span>

                        </div>

                        ${
                            etiqueta
                                ? `
                                    <span class="producto-etiqueta">
                                        ${etiqueta}
                                    </span>
                                  `
                                : ""
                        }

                    </div>

                    <div class="producto-contenido">

                        <h3 class="producto-nombre">
                            ${nombre}
                        </h3>

                        <p class="producto-descripcion">
                            ${descripcion}
                        </p>

                        <div class="producto-footer">

                            <span class="producto-precio">
                                ${precioHTML}
                            </span>

                            <button
                                class="btn-agregar"
                                onclick="agregarAlCarrito(${producto.id})"
                                aria-label="Agregar ${nombre}"
                            >

                                <i
                                    class="bi bi-plus-lg"
                                ></i>

                            </button>

                        </div>

                    </div>

                </div>

            `;


            contenedorProductos.appendChild(
                tarjeta
            );


            setTimeout(
                () => {

                    tarjeta.style.transition =
                        "opacity .35s ease, transform .35s ease";

                    tarjeta.style.opacity =
                        "1";

                    tarjeta.style.transform =
                        "translateY(0)";

                },
                indice * 45
            );

        }
    );

}


/* =========================================================
   MODAL DE VARIANTES
   ========================================================= */

function crearModalVariantes() {

    if (
        document.getElementById(
            "modalVariantes"
        )
    ) {
        return;
    }

    const modal =
        document.createElement(
            "div"
        );

    modal.className =
        "modal fade";

    modal.id =
        "modalVariantes";

    modal.tabIndex =
        -1;

    modal.innerHTML = `

        <div
            class="modal-dialog modal-dialog-centered"
        >

            <div class="modal-content">

                <div class="modal-header">

                    <h5
                        class="modal-title"
                        id="tituloModalVariantes"
                    >
                        Personaliza tu pedido
                    </h5>

                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Cerrar"
                    ></button>

                </div>

                <div
                    class="modal-body"
                    id="listaVariantes"
                ></div>

                <div class="modal-footer">

                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Cancelar
                    </button>

                    <button
                        type="button"
                        class="btn btn-danger"
                        id="btnConfirmarVariante"
                    >

                        <i
                            class="bi bi-cart-plus me-1"
                        ></i>

                        Agregar al pedido

                    </button>

                </div>

            </div>

        </div>

    `;

    document.body.appendChild(
        modal
    );

    modalVariantes =
        new bootstrap.Modal(
            modal
        );

    document
        .getElementById(
            "btnConfirmarVariante"
        )
        .addEventListener(
            "click",
            confirmarVariante
        );

}


function abrirSelectorVariantes(
    producto
) {

    crearModalVariantes();

    productoPendiente =
        producto;


    document.getElementById(
        "tituloModalVariantes"
    ).textContent =
        `Personaliza: ${producto.nombre}`;


    const lista =
        document.getElementById(
            "listaVariantes"
        );


    lista.innerHTML =
        producto.variantes
            .map(
                (
                    variante,
                    indice
                ) => `

                    <label
                        class="variante-opcion"
                    >

                        <input
                            type="radio"
                            name="varianteSeleccionada"
                            value="${indice}"
                            ${
                                indice === 0
                                    ? "checked"
                                    : ""
                            }
                        >

                        <span
                            class="variante-info"
                        >

                            <span
                                class="variante-nombre"
                            >
                                ${escaparHTML(
                                    variante.nombre
                                )}
                            </span>

                            <span
                                class="variante-precio"
                            >
                                ${formatoPrecio(
                                    variante.precio
                                )}
                            </span>

                        </span>

                    </label>

                `
            )
            .join("");


    modalVariantes.show();

}


function confirmarVariante() {

    if (
        !productoPendiente
    ) {
        return;
    }


    const seleccionado =
        document.querySelector(
            'input[name="varianteSeleccionada"]:checked'
        );


    if (
        !seleccionado
    ) {
        return;
    }


    const variante =
        productoPendiente
            .variantes[
                Number(
                    seleccionado.value
                )
            ];


    agregarProductoAlCarrito(
        productoPendiente,
        variante.nombre,
        variante.precio
    );


    if (
        modalVariantes
    ) {

        modalVariantes.hide();

    }


    productoPendiente =
        null;

}


/* =========================================================
   CARRITO
   ========================================================= */

function agregarAlCarrito(
    id
) {

    const producto =
        productos.find(
            p =>
                p.id === id
        );


    if (!producto) {
        return;
    }


    if (
        tieneVariantes(
            producto
        )
    ) {

        abrirSelectorVariantes(
            producto
        );

        return;
    }


    agregarProductoAlCarrito(
        producto
    );

    mostrarCarrito();

}


function agregarProductoAlCarrito(
    producto,
    variante = null,
    precio = null
) {

    const precioFinal =
        precio ??
        producto.precio;


    const lineaId =
        obtenerLineaId(
            producto.id,
            variante
        );


    const existente =
        carrito.find(
            item =>
                item.lineaId ===
                lineaId
        );


    if (existente) {

        existente.cantidad++;

    } else {

        carrito.push({

            lineaId,

            id:
                producto.id,

            nombre:
                producto.nombre,

            variante,

            precio:
                precioFinal,

            cantidad:
                1

        });

    }


    actualizarCarrito();

    animarCarrito();

}


function aumentarCantidad(
    lineaId
) {

    const item =
        carrito.find(
            producto =>
                producto.lineaId ===
                lineaId
        );


    if (!item) {
        return;
    }


    item.cantidad++;


    actualizarCarrito();

}


function disminuirCantidad(
    lineaId
) {

    const item =
        carrito.find(
            producto =>
                producto.lineaId ===
                lineaId
        );


    if (!item) {
        return;
    }


    item.cantidad--;


    if (
        item.cantidad <= 0
    ) {

        carrito =
            carrito.filter(
                producto =>
                    producto.lineaId !==
                    lineaId
            );

    }


    actualizarCarrito();

}


function eliminarDelCarrito(
    lineaId
) {

    carrito =
        carrito.filter(
            producto =>
                producto.lineaId !==
                lineaId
        );


    actualizarCarrito();

}


function calcularCantidadTotal() {

    return carrito.reduce(
        (
            total,
            producto
        ) =>
            total +
            producto.cantidad,
        0
    );

}


function calcularTotal() {

    return carrito.reduce(
        (
            total,
            producto
        ) =>
            total +
            (
                producto.precio *
                producto.cantidad
            ),
        0
    );

}


/* =========================================================
   ACTUALIZAR CARRITO
   ========================================================= */

function actualizarCarrito() {

    const total =
        calcularTotal();


    if (
        carritoContador
    ) {

        carritoContador.textContent =
            calcularCantidadTotal();

    }


    if (
        !carritoProductos ||
        !carritoVacio ||
        !carritoResumen
    ) {

        return;

    }


    if (
        carrito.length === 0
    ) {

        carritoVacio.style.display =
            "flex";

        carritoResumen.style.display =
            "none";

        carritoProductos.innerHTML =
            "";

        return;

    }


    carritoVacio.style.display =
        "none";

    carritoResumen.style.display =
        "block";

    carritoProductos.innerHTML =
        "";


    carrito.forEach(
        producto => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "carrito-item";


            item.innerHTML = `

                <div
                    class="carrito-item-info"
                >

                    <div
                        class="carrito-item-nombre"
                    >
                        ${escaparHTML(
                            producto.nombre
                        )}
                    </div>

                    ${
                        producto.variante
                            ? `
                                <div
                                    class="carrito-item-variante"
                                >
                                    ${escaparHTML(
                                        producto.variante
                                    )}
                                </div>
                              `
                            : ""
                    }

                    <div
                        class="carrito-item-precio"
                    >
                        ${formatoPrecio(
                            producto.precio
                        )}
                        c/u
                    </div>

                    <div
                        class="cantidad-control"
                    >

                        <button
                            class="cantidad-btn"
                            onclick="disminuirCantidad('${producto.lineaId}')"
                            aria-label="Disminuir cantidad"
                        >

                            <i
                                class="bi bi-dash"
                            ></i>

                        </button>


                        <span
                            class="cantidad-numero"
                        >
                            ${producto.cantidad}
                        </span>


                        <button
                            class="cantidad-btn"
                            onclick="aumentarCantidad('${producto.lineaId}')"
                            aria-label="Aumentar cantidad"
                        >

                            <i
                                class="bi bi-plus"
                            ></i>

                        </button>


                        <button
                            class="btn-eliminar ms-2"
                            onclick="eliminarDelCarrito('${producto.lineaId}')"
                            aria-label="Eliminar producto"
                        >

                            <i
                                class="bi bi-trash"
                            ></i>

                        </button>

                    </div>

                </div>


                <div
                    class="carrito-item-total"
                >
                    ${formatoPrecio(
                        producto.precio *
                        producto.cantidad
                    )}
                </div>

            `;


            carritoProductos.appendChild(
                item
            );

        }
    );


    if (
        carritoSubtotal
    ) {

        carritoSubtotal.textContent =
            formatoPrecio(
                total
            );

    }


    if (
        carritoTotal
    ) {

        carritoTotal.textContent =
            formatoPrecio(
                total
            );

    }

}


/* =========================================================
   MOSTRAR CARRITO
   ========================================================= */

function mostrarCarrito() {

    const elemento =
        document.getElementById(
            "carrito"
        );


    if (!elemento) {
        return;
    }


    bootstrap.Offcanvas
        .getOrCreateInstance(
            elemento
        )
        .show();

}


/* =========================================================
   ANIMAR CARRITO
   ========================================================= */

function animarCarrito() {

    if (
        !carritoContador
    ) {
        return;
    }


    carritoContador.animate(
        [
            {
                transform:
                    "scale(1)"
            },

            {
                transform:
                    "scale(1.45)"
            },

            {
                transform:
                    "scale(1)"
            }
        ],
        {
            duration:
                350
        }
    );

}


/* =========================================================
   CATEGORÍAS
   ========================================================= */

botonesCategoria.forEach(
    boton => {

        boton.addEventListener(
            "click",
            () => {

                const categoria =
                    boton.dataset.categoria;


                botonesCategoria.forEach(
                    btn => {

                        btn.classList.remove(
                            "activo"
                        );

                    }
                );


                boton.classList.add(
                    "activo"
                );


                mostrarProductos(
                    categoria
                );


                if (
                    window.innerWidth <
                    768
                ) {

                    const seccion =
                        document.querySelector(
                            ".productos"
                        );


                    if (
                        seccion
                    ) {

                        seccion.scrollIntoView(
                            {
                                behavior:
                                    "smooth",

                                block:
                                    "start"
                            }
                        );

                    }

                }

            }
        );

    }
);


/* =========================================================
   COMBO
   ========================================================= */

if (
    btnCombo
) {

    btnCombo.addEventListener(
        "click",
        () => {

            const lineaId =
                "combo-100";


            const existente =
                carrito.find(
                    item =>
                        item.lineaId ===
                        lineaId
                );


            if (
                existente
            ) {

                existente.cantidad++;

            } else {

                carrito.push({

                    lineaId,

                    id:
                        100,

                    nombre:
                        "Combo de lunes a viernes",

                    precio:
                        29900,

                    variante:
                        null,

                    cantidad:
                        1

                });

            }


            actualizarCarrito();

            animarCarrito();

            mostrarCarrito();

        }
    );

}


/* =========================================================
   CONTINUAR PEDIDO
   ========================================================= */

if (
    btnContinuarPedido
) {

    btnContinuarPedido.addEventListener(
        "click",
        () => {

            if (
                carrito.length ===
                0
            ) {

                return;

            }


            const carritoElemento =
                document.getElementById(
                    "carrito"
                );


            if (
                carritoElemento
            ) {

                bootstrap.Offcanvas
                    .getOrCreateInstance(
                        carritoElemento
                    )
                    .hide();

            }


            setTimeout(
                () => {

                    if (
                        modalPedido
                    ) {

                        modalPedido.show();

                    }

                },
                300
            );

        }
    );

}


/* =========================================================
   TIPO DE PEDIDO
   ========================================================= */

const opcionesTipoPedido =
    document.querySelectorAll(
        'input[name="tipoPedido"]'
    );


opcionesTipoPedido.forEach(
    opcion => {

        opcion.addEventListener(
            "change",
            () => {

                const domicilio =
                    document.getElementById(
                        "datosDomicilio"
                    );


                const recoger =
                    document.getElementById(
                        "datosRecogida"
                    );


                const esDomicilio =
                    opcion.value ===
                    "domicilio";


                if (
                    domicilio
                ) {

                    domicilio.style.display =
                        esDomicilio
                            ? "block"
                            : "none";

                }


                if (
                    recoger
                ) {

                    recoger.style.display =
                        esDomicilio
                            ? "none"
                            : "block";

                }

            }
        );

    }
);


/* =========================================================
   MÉTODO DE PAGO
   ========================================================= */

const opcionesPago =
    document.querySelectorAll(
        'input[name="metodoPago"]'
    );


opcionesPago.forEach(
    opcion => {

        opcion.addEventListener(
            "change",
            () => {

                const alerta =
                    document.getElementById(
                        "alertaTarjeta"
                    );


                if (
                    alerta
                ) {

                    alerta.style.display =
                        opcion.value ===
                        "tarjeta"

                            ? "flex"

                            : "none";

                }

            }
        );

    }
);


/* =========================================================
   VALIDACIÓN
   ========================================================= */

function mostrarError(
    mensaje
) {

    const error =
        document.getElementById(
            "mensajeError"
        );


    if (!error) {
        return;
    }


    error.textContent =
        mensaje;


    error.style.display =
        "block";


    error.scrollIntoView(
        {
            behavior:
                "smooth",

            block:
                "nearest"
        }
    );

}


function valorCampo(
    id
) {

    return (
        document.getElementById(
            id
        )?.value.trim() || ""
    );

}


/* =========================================================
   VALIDAR PEDIDO
   ========================================================= */

function validarPedido() {

    const error =
        document.getElementById(
            "mensajeError"
        );


    if (
        error
    ) {

        error.style.display =
            "none";

        error.textContent =
            "";

    }


    const tipoPedido =
        document.querySelector(
            'input[name="tipoPedido"]:checked'
        );


    if (
        !tipoPedido
    ) {

        mostrarError(
            "Selecciona si deseas domicilio o recoger el pedido."
        );

        return false;

    }


    const nombre =
        valorCampo(
            "clienteNombre"
        );


    if (
        !nombre
    ) {

        mostrarError(
            "Por favor escribe tu nombre."
        );

        return false;

    }


    const telefono =
        valorCampo(
            "clienteTelefono"
        );


    if (
        !telefono
    ) {

        mostrarError(
            "Por favor escribe tu número de teléfono."
        );

        return false;

    }


    if (
        tipoPedido.value ===
        "domicilio"
    ) {

        const direccion =
            valorCampo(
                "clienteDireccion"
            );


        const barrio =
            valorCampo(
                "clienteBarrio"
            );


        if (
            !direccion ||
            !barrio
        ) {

            mostrarError(
                "Para el domicilio necesitamos la dirección y el barrio."
            );

            return false;

        }

    } else {

        const punto =
            document.getElementById(
                "puntoRecogida"
            )?.value || "";


        if (
            !punto
        ) {

            mostrarError(
                "Selecciona el punto donde recogerás tu pedido."
            );

            return false;

        }

    }


    const metodoPago =
        document.querySelector(
            'input[name="metodoPago"]:checked'
        );


    if (
        !metodoPago
    ) {

        mostrarError(
            "Selecciona una forma de pago."
        );

        return false;

    }


    if (
        metodoPago.value ===
        "tarjeta" &&
        tipoPedido.value ===
        "domicilio"
    ) {

        mostrarError(
            "El pago con tarjeta está disponible únicamente en el punto físico."
        );

        return false;

    }


    return true;

}

/* =========================================================
   WHATSAPP
   ========================================================= */

function generarMensajeWhatsApp() {

    const tipoPedido =
        document.querySelector(
            'input[name="tipoPedido"]:checked'
        )?.value;


    const metodoPago =
        document.querySelector(
            'input[name="metodoPago"]:checked'
        )?.value;


    if (
        !tipoPedido ||
        !metodoPago
    ) {

        return "";

    }


    const total =
        calcularTotal();


    let mensaje =
        "Hola, Como Arroz 👋\n\n" +
        "Quiero realizar el siguiente pedido:\n\n";


    carrito.forEach(
        producto => {

            const variante =
                producto.variante
                    ? ` — ${producto.variante}`
                    : "";


            const subtotal =
                producto.precio *
                producto.cantidad;


            mensaje +=
                `🍽️ ${producto.nombre}${variante} x${producto.cantidad} — ${formatoPrecio(subtotal)}\n`;

        }
    );


    mensaje +=
        `\n💰 TOTAL: ${formatoPrecio(total)}\n\n`;


    if (
        tipoPedido ===
        "domicilio"
    ) {

        mensaje +=
            "🛵 TIPO DE PEDIDO: DOMICILIO\n\n";


        mensaje +=
            `👤 Nombre: ${valorCampo(
                "clienteNombre"
            )}\n`;


        mensaje +=
            `📞 Teléfono: ${valorCampo(
                "clienteTelefono"
            )}\n`;


        mensaje +=
            `🏠 Dirección: ${valorCampo(
                "clienteDireccion"
            )}\n`;


        mensaje +=
            `📍 Barrio: ${valorCampo(
                "clienteBarrio"
            )}\n`;


        const referencia =
            valorCampo(
                "clienteReferencia"
            );


        if (
            referencia
        ) {

            mensaje +=
                `📌 Referencia: ${referencia}\n`;

        }

    } else {

        mensaje +=
            "🏪 TIPO DE PEDIDO: RECOGER EN EL RESTAURANTE\n\n";


        mensaje +=
            `👤 Nombre: ${valorCampo(
                "clienteNombre"
            )}\n`;


        mensaje +=
            `📞 Teléfono: ${valorCampo(
                "clienteTelefono"
            )}\n`;


        mensaje +=
            `📍 Punto de recogida: ${
                document.getElementById(
                    "puntoRecogida"
                )?.value || ""
            }\n`;

    }


    const nombresPago = {

        efectivo:
            "Efectivo",

        transferencia:
            "Transferencia",

        tarjeta:
            "Tarjeta"

    };


    mensaje +=
        `\n💳 FORMA DE PAGO: ${
            nombresPago[
                metodoPago
            ] ||
            metodoPago
        }\n`;


    const observaciones =
        valorCampo(
            "clienteObservaciones"
        );


    if (
        observaciones
    ) {

        mensaje +=
            `\n📝 Observaciones: ${observaciones}\n`;

    }


    return (
        mensaje +
        "\n¿Me confirman el pedido, por favor? 😊"
    );

}


/* =========================================================
   ENVIAR WHATSAPP
   ========================================================= */

const btnEnviarWhatsApp =
    document.getElementById(
        "btnEnviarWhatsApp"
    );


if (
    btnEnviarWhatsApp
) {

    btnEnviarWhatsApp.addEventListener(
        "click",
        () => {

            if (
                !validarPedido()
            ) {

                return;

            }


            if (
                carrito.length ===
                0
            ) {

                mostrarError(
                    "Tu carrito está vacío."
                );

                return;

            }


            const mensaje =
                generarMensajeWhatsApp();


            if (
                !mensaje
            ) {

                mostrarError(
                    "No fue posible generar el pedido."
                );

                return;

            }


            const url =
                `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(
                    mensaje
                )}`;


            window.open(
                url,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}


/* =========================================================
   LIMPIAR ERROR AL CERRAR MODAL
   ========================================================= */

if (
    modalPedidoElement
) {

    modalPedidoElement.addEventListener(
        "hidden.bs.modal",
        () => {

            const error =
                document.getElementById(
                    "mensajeError"
                );


            if (
                error
            ) {

                error.style.display =
                    "none";

                error.textContent =
                    "";

            }

        }
    );

}


/* =========================================================
   CATEGORÍA INICIAL
   ========================================================= */

botonesCategoria.forEach(
    boton => {

        if (
            boton.dataset.categoria ===
            "arroces"
        ) {

            boton.classList.add(
                "activo"
            );

        }

    }
);


/* =========================================================
   INICIAR
   ========================================================= */

mostrarProductos(
    "arroces"
);

actualizarCarrito();

console.log(
    "🍚 Como Arroz - Menú digital iniciado correctamente."
);
