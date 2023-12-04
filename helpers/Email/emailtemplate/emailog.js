import Partials from "./emailpartials/emailPartial.js"


const template = async() => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    ${ Partials.getHead() }
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Agradecimiento por Registro</title>
    
        <!-- Estilos incorporados -->
        <style>
            .form-container {
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 70vh;
                flex-direction: column;
                background-color: #ffdee9;
                background-image: linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%);
            }
    
            .form-container form {
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                padding: 20px;
                background-color: #fff;
            }
    
            .form-container form .title {
                text-align: center;
                margin-bottom: 15px;
                font-weight: bold;
                font-family: "Playfair Display", serif;
            }
    
            .form-container form input {
                border: none;
                border-bottom: 1px solid #000;
                border-radius: 0;
            }
    
            .form-container form button {
                border: 1px solid black;
                border-radius: 0;
                background-color: #000;
                color: white;
                width: 250px;
            }
    
            .form-container form button:hover {
                border: 1px solid black;
                background: #000000; /* fallback for old browsers */
                background: -webkit-linear-gradient(to right, #434343, #000000); /* Chrome 10-25, Safari 5.1-6 */
                background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            }
        </style>
    
        <!-- Enlace a Bootstrap desde CDN -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    </head>
    <body>
    ${ Partials.getHeader() }
        <!-- Contenido de agradecimiento -->
        <div class="form-container">
            <div>
                <h4 class="title">¡Gracias por Registrarte!</h4>
                <p>Bienvenido a nuestro servicio. Estamos encantados de tenerte con nosotros.</p>
            </div>
        </div>
        ${ Partials.getFooter() }
    </body>
    </html>
    `
};
export default template;