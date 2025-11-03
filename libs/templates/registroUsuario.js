export function compileVerifyEmailTemplate(c_nombres, token) {
    return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verifica tu Correo</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap">
        <style>
            * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }

            body {
                font-family: 'Inter', sans-serif;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #E6F0FA 0%, #F7FAFC 100%);
                padding: 1rem;
            }

            .card {
                width: 100%;
                max-width: 32rem;
                padding: 2rem;
                background: #ffffff;
                border-radius: 0.75rem;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                text-align: center;
                margin: 0 auto;
            }

            .icon-container {
                width: 7rem;
                height: 7rem;
                border-radius: 50%;
                background: linear-gradient(135deg, #E6F0FA, #DBEAFE);
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1.5rem;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                transition: transform 0.3s ease;
            }

            .icon-container img {
                width: 60%;
                height: auto;
            }

            .icon-container:hover {
                transform: scale(1.05);
            }

            h1 {
                font-size: 1.75rem;
                font-weight: 700;
                color: #000000;
                margin-bottom: 1rem;
                line-height: 1.2;
            }

            p {
                color: #000000;
                line-height: 1.75;
                margin-bottom: 1.5rem;
                font-size: 1rem;
                font-weight: 400;
            }

            .button {
                display: inline-flex;
                align-items: center;
                background: #10B981;
                color: white;
                text-decoration: none;
                padding: 0.875rem 1.5rem;
                border-radius: 0.5rem;
                font-weight: 500;
                margin-top: 1.5rem;
                transition: background-color 0.2s ease, transform 0.2s ease;
            }

            .button:hover {
                background: #2B8CBF;
                transform: translateY(-2px);
            }

            .button svg {
                width: 1.25rem;
                height: 1.25rem;
                margin-right: 0.5rem;
            }

            .footer {
                padding-top: 1.5rem;
                border-top: 1px solid #D1D5DB;
                margin-top: 2rem;
                font-size: 0.875rem;
                color: #000000;
            }

            .resend-link {
                color: #2563EB;
                text-decoration: none;
                font-weight: 500;
                margin-left: 0.25rem;
                transition: color 0.2s ease;
            }

            .resend-link:hover {
                color: #1E40AF;
                text-decoration: underline;
            }

            @media (max-width: 640px) {
                .card {
                    padding: 1.5rem;
                    max-width: 100%;
                }

                h1 {
                    font-size: 1.5rem;
                }

                .icon-container {
                    width: 6rem;
                    height: 6rem;
                }

                .button {
                    padding: 0.75rem 1.25rem;
                    width: 100%;
                    justify-content: center;
                }

                p {
                    font-size: 0.9375rem;
                }
            }

            @media (max-width: 400px) {
                .card {
                    padding: 1rem;
                }

                h1 {
                    font-size: 1.25rem;
                }

                .icon-container {
                    width: 5rem;
                    height: 5rem;
                }
            }
        </style>
    </head>
    <body>
        <div class="card">
            <div class="icon-container">
                <img src="https://i.imgur.com/oZjWbP1.png" alt="Logo">
            </div>
            <h1>Hola, ${c_nombres}</h1>
            <p>
                Gracias por registrarte. Para confirmar tu cuenta, haz clic en el siguiente botón:
            </p>
            <!-- <a href="localhost:5004/security/geoportal/confirmar/usuario/${token}" class="button"> -->
            <a href="https://glgismpcff23b.ideasg.org/security/geoportal/confirmar/usuario/${token}" class="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Confirmar cuenta
            </a>
            <div class="footer">
                <p>
                    ¿No recibiste el email? Revisa tu carpeta de spam
                </p>
            </div>
        </div>
    </body>
    </html>
    `;
}