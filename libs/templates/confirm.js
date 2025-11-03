export const confirmTemplate = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Página de Éxito</title>
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
                    background: linear-gradient(to bottom right, #F0FDF4, #D1FAE5);
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
                background: linear-gradient(to bottom right, #DCFCE7, #A7F3D0);
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                transition: transform 0.3s ease;
            }

            .icon {
                width: 4rem;
                height: 4rem;
                color: #16A34A;
            }

            .text-content {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            h1 {
                font-size: 1.875rem;
                font-weight: 700;
                color: #1F2937;
            }

            p {
                color: #4B5563;
                font-size: 1.125rem;
                line-height: 1.5;
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
                padding: 0.75rem 1.5rem;
                border-radius: 0.375rem;
                text-decoration: none;
                font-weight: 600;
                font-size: 1rem;
                transition: background-color 0.2s ease, transform 0.2s ease;
            }

            .button-success {
                background-color: #10B981;
                color: white;
                padding: 1rem 2rem;
            }

            .button-success:hover {
                background-color: #059669;
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

                .button {
                    width: 100%;
                    padding: 0.75rem 1rem;
                }

                .button-success {
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
            }
        </style>
    </head>
    <body>
        <div class="modal">
            <div class="icon-container">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            </div>

            <div class="text-content">
                <h1>¡Correo Verificado Exitosamente!</h1>
                <p>
                    Tu cuenta ha sido verificada. Puedes comenzar a usar nuestros servicios.
                </p>
            </div>
            <div class="button-container">
                <a href="https://glgismpcff.ideasg.org/sistema/mpcff" class="button button-success">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="7" height="9"></rect>
                        <rect x="14" y="3" width="7" height="5"></rect>
                        <rect x="14" y="12" width="7" height="9"></rect>
                        <rect x="3" y="16" width="7" height="5"></rect>
                    </svg>
                    Ir al SIG Municipal
                </a>
            </div>
        </div>
    </body>
    </html>
`;