export function compileCredentialsUserTemplate(usuario, contrasena) {
    return `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Credenciales de Acceso</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    min-height: 100vh;
                    background-color: #f8fafc;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                    font-family: Arial, sans-serif;
                }

                .card {
                    width: 100%;
                    max-width: 32rem;
                    background: #ffffff;
                    border: none;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    border-radius: 0.5rem;
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    background-color: #1a5f7a;
                    color: white;
                    padding: 1.5rem;
                    border-top-left-radius: 0.5rem;
                    border-top-right-radius: 0.5rem;
                }

                .card-header img {
                    width: 3rem;
                    height: 3rem;
                    object-fit: contain;
                }

                .header-text {
                    display: flex;
                    flex-direction: column;
                }

                .header-text p:first-child {
                    font-size: 1.125rem;
                    font-weight: 600;
                }

                .header-text p:last-child {
                    font-size: 0.875rem;
                    color: rgba(255, 255, 255, 0.8);
                }

                .divider {
                    height: 1px;
                    background-color: #e5e7eb;
                    margin: 0;
                }

                .card-body {
                    padding: 1.5rem;
                }

                .content {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .credentials-box {
                    background-color: #f1f5f9;
                    padding: 1.25rem;
                    border-radius: 0.5rem;
                    border: 1px solid #e2e8f0;
                }

                .credentials-box h2 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #1a5f7a;
                    margin-bottom: 1rem;
                }

                .credentials-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .credentials-item p:first-child {
                    font-size: 0.875rem;
                    color: #64748b;
                }

                .credentials-item p:last-child {
                    font-weight: 500;
                    color: #334155;
                }

                .credentials-item p.font-mono {
                    font-family: monospace;
                }

                .credentials-item a {
                    color: #1a5f7a;
                    text-decoration: none;
                }

                .credentials-item a:hover {
                    text-decoration: underline;
                }

                .info-text {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .info-text p {
                    color: #475569;
                }

                .buttons {
                    display: flex;
                    gap: 0.75rem;
                }

                .button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.75rem 1.5rem;
                    border-radius: 0.375rem;
                    text-decoration: none;
                    font-weight: 500;
                    transition: background-color 0.2s ease;
                }

                .button-primary {
                    background-color: #1a5f7a;
                    color: white;
                }

                .button-primary:hover {
                    background-color: #134557;
                }

                .button-bordered {
                    border: 1px solid #1a5f7a;
                    color: #1a5f7a;
                    background-color: transparent;
                }

                .button svg {
                    width: 1.25rem;
                    height: 1.25rem;
                    margin-right: 0.5rem;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <div class="card-header">
                    <img src="https://i.imgur.com/oZjWbP1.png" alt="Logo de la Empresa">
                    <div class="header-text">
                        <p>Bienvenido al Portal Municipal</p>
                        <p>Tus credenciales de acceso</p>
                    </div>
                </div>
                <hr class="divider">
                <div class="card-body">
                    <div class="content">
                        <div class="info-text">
                            <p>
                                ¡Gracias por registrarte! Aquí tienes tus credenciales de acceso.
                            </p>
                        </div>
                        <div class="credentials-box">
                            <h2>Información de Acceso</h2>
                            <div class="credentials-list">
                                <div class="credentials-item">
                                    <p>Usuario</p>
                                    <p>${usuario}</p>
                                </div>
                                <div class="credentials-item">
                                    <p>Contraseña</p>
                                    <p class="font-mono">${contrasena}</p>
                                </div>
                                <div class="credentials-item">
                                    <p>URL del Portal</p>
                                    <a href="https://glgismpcff.ideasg.org/sistema/mpcff">https://glgismpcff.ideasg.org/sistema/mpcff</a>
                                </div>
                            </div>
                        </div>
                        <div class="info-text">
                            <p>Por favor, mantén estas credenciales seguras y cambia tu contraseña al iniciar sesión por primera vez.</p>
                            <div class="buttons">
                                <a href="https://glgismpcff.ideasg.org/sistema/mpcff" class="button button-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                    Acceder al Portal
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;
}