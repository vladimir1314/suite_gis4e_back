export const errorTemplate = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Página de Error</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: Arial, sans-serif;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(to bottom right, #F3F4F6, #E5E7EB); /* Gris claro */
                padding: 1rem;
            }

            .modal {
                background: #FFFFFF; /* Fondo blanco para el modal */
                max-width: 28rem;
                width: 100%;
                padding: 2rem;
                border-radius: 0.75rem;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                text-align: center;
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }

            .icon-container {
                width: 8rem;
                height: 8rem;
                margin: 0 auto;
                border-radius: 9999px;
                background: linear-gradient(to bottom right, #E5E7EB, #D1D5DB); /* Gris suave */
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                transition: transform 0.3s ease;
            }

            .icon {
                width: 4rem;
                height: 4rem;
                color: #DC2626; /* Rojo solo en el ícono */
            }

            .text-content {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            h1 {
                font-size: 1.875rem;
                font-weight: 700;
                color: #1F2937; /* Gris oscuro */
            }

            p {
                color: #4B5563; /* Gris medio */
                font-size: 1.125rem;
                line-height: 1.5;
            }

            .error-box {
                background-color: #F3F4F6; /* Gris claro */
                border: 1px solid #E5E7EB; /* Borde gris */
                border-radius: 0.5rem;
                padding: 1rem;
                max-width: 18rem;
                margin: 0 auto;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: #DC2626; /* Rojo en el texto del error */
            }

            .error-box svg {
                width: 1.25rem;
                height: 1.25rem;
            }

            .error-box p {
                font-size: 0.875rem;
                font-weight: 500;
                color: #DC2626;
                margin: 0;
            }

            .button-container {
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
                margin-top: 2rem;
            }

            .button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 1rem 2rem;
                border-radius: 0.375rem;
                text-decoration: none;
                font-weight: 600;
                font-size: 1rem;
                transition: background-color 0.2s ease, transform 0.2s ease;
                background-color: #DC2626; /* Rojo en el botón */
                color: white;
            }

            .button:hover {
                background-color: #B91C1C; /* Rojo más oscuro al hover */
                transform: translateY(-2px);
            }

            .button svg {
                width: 1.25rem;
                height: 1.25rem;
                margin-right: 0.5rem;
            }

            /* Media Queries para responsividad */
            @media (max-width: 640px) {
                .modal {
                    max-width: 100%;
                    padding: 1.5rem;
                }

                h1 {
                    font-size: 1.5rem;
                }

                p {
                    font-size: 1rem;
                }

                .icon-container {
                    width: 6rem;
                    height: 6rem;
                }

                .icon {
                    width: 3rem;
                    height: 3rem;
                }

                .error-box {
                    max-width: 100%;
                    padding: 0.75rem;
                }

                .button {
                    width: 100%;
                    padding: 0.875rem 1.5rem;
                }
            }

            @media (max-width: 400px) {
                .modal {
                    padding: 1rem;
                }

                h1 {
                    font-size: 1.25rem;
                }

                p {
                    font-size: 0.875rem;
                }

                .icon-container {
                    width: 5rem;
                    height: 5rem;
                }

                .icon {
                    width: 2.5rem;
                    height: 2.5rem;
                }

                .error-box p {
                    font-size: 0.75rem;
                }
            }
        </style>
    </head>
    <body>
        <div class="modal">
            <div class="icon-container">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                </svg>
            </div>

            <div class="text-content">
                <h1>¡Verificación Fallida!</h1>
                <p>
                    No pudimos verificar su cuenta. El enlace de verificación podría estar expirado o ser inválido.
                </p>
            </div>

            <div class="error-box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 0 0 0 1.71-3L13.71 3.86a2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <p>Código de error: LINK_EXPIRED</p>
            </div>

            <div class="button-container">
                <a href="#" class="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 12a8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8"></path>
                        <path d="M9 12l3 3 3-3"></path>
                    </svg>
                    Solicitar Nuevo Enlace de Verificación
                </a>
            </div>
        </div>
    </body>
    </html>
`;
