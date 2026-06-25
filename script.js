 javascript
const informacion = {
    espana: `
        <h2>España 🇪🇸</h2>
        <h3>Lugares más visitados:</h3>
        <ul>
            <li>🏰 Sagrada Familia (Barcelona)</li>
            <li>🌳 Parque Güell</li>
            <li>🏛 Museo del Prado</li>
            <li>🏰 Alhambra de Granada</li>
            <li>🎭 Plaza Mayor de Madrid</li>
        </ul>

        <br>

        <p><strong>Mejor época:</strong> Abril - Junio</p>

        <p><strong>Precio aproximado:</strong> US$899</p>
    `,

    brasil: `
        <h2>Brasil 🇧🇷</h2>

        <h3>Lugares más visitados:</h3>

        <ul>
            <li>🗿 Cristo Redentor</li>
            <li>🏖 Playa de Copacabana</li>
            <li>⛰ Pan de Azúcar</li>
            <li>💦 Cataratas de Iguazú</li>
            <li>🌳 Amazonía</li>
        </ul>

        <br>

        <p><strong>Mejor época:</strong> Mayo - Septiembre</p>

        <p><strong>Precio aproximado:</strong> US$699</p>
    `,

    suecia: `
        <h2>Suecia 🇸🇪</h2>

        <h3>Lugares más visitados:</h3>

        <ul>
            <li>🏰 Palacio Real de Estocolmo</li>
            <li>🚢 Museo Vasa</li>
            <li>🌌 Aurora Boreal en Abisko</li>
            <li>🏘 Gamla Stan</li>
            <li>🌳 Skansen</li>
        </ul>

        <br>

        <p><strong>Mejor época:</strong> Junio - Agosto</p>

        <p><strong>Precio aproximado:</strong> US$1,150</p>
    `,

    francia: `
        <h2>Francia 🇫🇷</h2>

        <ul>
            <li>🗼 Torre Eiffel</li>
            <li>🎨 Museo del Louvre</li>
            <li>🏛 Arco del Triunfo</li>
            <li>👑 Palacio de Versalles</li>
            <li>⛪ Mont Saint-Michel</li>
        </ul>

        <br>

        <p><strong>Precio aproximado:</strong> US$1,099</p>
    `,

    italia: `
        <h2>Italia 🇮🇹</h2>

        <ul>
            <li>🏛 Coliseo Romano</li>
            <li>🚤 Canales de Venecia</li>
            <li>⛪ Vaticano</li>
            <li>🏰 Torre de Pisa</li>
            <li>🌄 Costa Amalfitana</li>
        </ul>

        <br>

        <p><strong>Precio aproximado:</strong> US$999</p>
    `,

    japon: `
        <h2>Japón 🇯🇵</h2>

        <ul>
            <li>⛰ Monte Fuji</li>
            <li>⛩ Fushimi Inari</li>
            <li>🏯 Castillo de Osaka</li>
            <li>🌆 Cruce de Shibuya</li>
            <li>🏮 Templo Senso-ji</li>
        </ul>

        <br>

        <p><strong>Precio aproximado:</strong> US$1,299</p>
    `
};

function mostrarInfo(pais){

    document.getElementById("modal").style.display = "block";

    document.getElementById("contenidoModal").innerHTML =
    informacion[pais];
}

function cerrarModal(){

    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event){

    let modal = document.getElementById("modal");

    if(event.target == modal){

        modal.style.display = "none";
    }
};