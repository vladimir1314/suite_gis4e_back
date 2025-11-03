export function compileReceiptTemplate(ingreso) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Recibo de Pago - VillaClub</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; border: 1px solid #e4e4e7; border-radius: 8px; overflow: hidden; }
          .header { background-color: #A5C5EA; padding: 20px; color: white; }
          .header-content { display: flex; align-items: center; gap: 16px; }
          .logo-text h1 { margin: 0; font-size: 24px; }
          .logo-text p { margin: 0; font-size: 12px; opacity: 0.8; }
          .content { padding: 24px; background-color: white; }
          .details { background-color: #f8f9fa; padding: 16px; border-radius: 8px; margin: 16px 0; }
          .details h3 { margin-top: 0; margin-bottom: 8px; font-size: 18px; }
          .details ul { list-style-type: none; padding: 0; margin: 0; }
          .details li { padding: 4px 0; display: flex; align-items: center; gap: 8px; }
          .attachment { background-color: #eef4fc; border: 1px solid #cce3fd; border-radius: 8px; padding: 16px; margin: 16px 0; display: flex; align-items: flex-start; gap: 12px; }
          .attachment-icon { color: #A5C5EA; font-size: 24px; }
          .attachment-info p { margin: 0; }
          .attachment-info .filename { font-weight: 500; color: #214166; }
          .attachment-info .description { font-size: 14px; color: #6383a8; }
          .contact { margin: 16px 0; }
          .contact p { margin: 8px 0; display: flex; align-items: center; gap: 8px; }
          .footer { background-color: #f4f4f5; padding: 16px; text-align: center; font-size: 12px; color: #71717a; }
          .social { display: flex; justify-content: center; gap: 16px; margin: 8px 0; }
          .social-icon { color: #A5C5EA; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="header-content">
              <div class="logo-icon"> <!-- Butterfly icon would be here --> 🦋 </div>
              <div class="logo-text">
                <h1>VillaClub</h1>
                <p>EL MEJOR LUGAR PARA VIVIR Y CRECER</p>
              </div>
            </div>
          </div>
          <div class="content">
            <p>Estimado(a) <strong>{{nombre}} {{apellido}}</strong>,</p>
            <p>A continuación se le envía su recibo. Se le adjunta mediante PDF.</p>
            <div class="details">
              <h3>Detalles del pago:</h3>
              <ul>
                <li> <!-- Receipt icon would be here --> 📝 Recibo N°: <strong>{{nro_recibo}}</strong> </li>
                <li> <!-- Calendar icon would be here --> 📅 Fecha: <strong>{{fecha_comprobante}}</strong> </li>
                <li> <!-- Home icon would be here --> 🏠 Vivienda: <strong>{{vivienda}}</strong> </li>
                <li> <!-- Credit card icon would be here --> 💳 Monto: <strong>S/ {{monto}}</strong> </li>
                <li> <!-- File text icon would be here --> 📄 Concepto: <strong>{{descripcion}}</strong> </li>
              </ul>
            </div>
            <p>Si tiene alguna consulta o requiere información adicional, no dude en comunicarse con nosotros a través de los siguientes canales:</p>
            <div class="contact">
              <p> <!-- Mail icon would be here --> ✉️ gestor.vc4@gmail.com </p>
              <p> <!-- Phone icon would be here --> 📱 926 487 304 </p>
            </div>
            <p>Agradecemos su puntualidad en el pago de sus obligaciones.</p>
            <p>Atentamente,</p>
            <p><strong>Administración Villa Club 4</strong></p>
          </div>
          <div class="footer">
            <p>Este correo fue enviado automáticamente. Por favor no responda a este mensaje.</p>
            <div class="social"> <!-- Social media icons would be here -->
              <span class="social-icon">f</span>
              <span class="social-icon">📷</span>
              <span class="social-icon">🌐</span>
            </div>
            <p>© 2024 Villa Club 4. Todos los derechos reservados.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}



// export function compileReceiptTemplate(ingreso) {
//   return `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <meta charset="utf-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Recibo de Pago - VillaClub</title>
//         <style>
//           body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
//           .container { max-width: 600px; margin: 0 auto; border: 1px solid #e4e4e7; border-radius: 8px; overflow: hidden; }
//           .header { background-color: #A5C5EA; padding: 20px; color: white; }
//           .header-content { display: flex; align-items: center; gap: 16px; }
//           .logo-text h1 { margin: 0; font-size: 24px; }
//           .logo-text p { margin: 0; font-size: 12px; opacity: 0.8; }
//           .content { padding: 24px; background-color: white; }
//           .details { background-color: #f8f9fa; padding: 16px; border-radius: 8px; margin: 16px 0; }
//           .details h3 { margin-top: 0; margin-bottom: 8px; font-size: 18px; }
//           .details ul { list-style-type: none; padding: 0; margin: 0; }
//           .details li { padding: 4px 0; display: flex; align-items: center; gap: 8px; }
//           .attachment { background-color: #eef4fc; border: 1px solid #cce3fd; border-radius: 8px; padding: 16px; margin: 16px 0; display: flex; align-items: flex-start; gap: 12px; }
//           .attachment-icon { color: #A5C5EA; font-size: 24px; }
//           .attachment-info p { margin: 0; }
//           .attachment-info .filename { font-weight: 500; color: #214166; }
//           .attachment-info .description { font-size: 14px; color: #6383a8; }
//           .contact { margin: 16px 0; }
//           .contact p { margin: 8px 0; display: flex; align-items: center; gap: 8px; }
//           .footer { background-color: #f4f4f5; padding: 16px; text-align: center; font-size: 12px; color: #71717a; }
//           .social { display: flex; justify-content: center; gap: 16px; margin: 8px 0; }
//           .social-icon { color: #A5C5EA; }
//         </style>
//       </head>
//       <body>
//         <div class="container">
//           <div class="header">
//             <div class="header-content">
//               <div class="logo-icon"> <!-- Butterfly icon would be here --> 🦋 </div>
//               <div class="logo-text">
//                 <h1>VillaClub</h1>
//                 <p>EL MEJOR LUGAR PARA VIVIR Y CRECER</p>
//               </div>
//             </div>
//           </div>
//           <div class="content">
//             <p>Estimado(a) <strong>{{nombre}} {{apellido}}</strong>,</p>
//             <p>A continuación se le envía su recibo. Se le adjunta mediante PDF.</p>
//             <div class="details">
//               <h3>Detalles del pago:</h3>
//               <ul>
//                 <li> <!-- Receipt icon would be here --> 📝 Recibo N°: <strong>{{nro_recibo}}</strong> </li>
//                 <li> <!-- Calendar icon would be here --> 📅 Fecha: <strong>{{fecha_comprobante}}</strong> </li>
//                 <li> <!-- Home icon would be here --> 🏠 Vivienda: <strong>{{vivienda}}</strong> </li>
//                 <li> <!-- Credit card icon would be here --> 💳 Monto: <strong>S/ {{monto}}</strong> </li>
//                 <li> <!-- File text icon would be here --> 📄 Concepto: <strong>{{descripcion}}</strong> </li>
//               </ul>
//             </div>
//             <div class="attachment">
//               <div class="attachment-icon"> <!-- File attachment icon would be here --> 📎 </div>
//               <div class="attachment-info">
//                 <p class="filename">{{c_archivo}}.pdf</p>
//                 <p class="description">Haga clic para descargar el recibo adjunto</p>
//               </div>
//             </div>
//             <p>Si tiene alguna consulta o requiere información adicional, no dude en comunicarse con nosotros a través de los siguientes canales:</p>
//             <div class="contact">
//               <p> <!-- Mail icon would be here --> ✉️ gestor.vc4@gmail.com </p>
//               <p> <!-- Phone icon would be here --> 📱 926 487 304 </p>
//             </div>
//             <p>Agradecemos su puntualidad en el pago de sus obligaciones.</p>
//             <p>Atentamente,</p>
//             <p><strong>Administración Villa Club 4</strong></p>
//           </div>
//           <div class="footer">
//             <p>Este correo fue enviado automáticamente. Por favor no responda a este mensaje.</p>
//             <div class="social"> <!-- Social media icons would be here -->
//               <span class="social-icon">f</span>
//               <span class="social-icon">📷</span>
//               <span class="social-icon">🌐</span>
//             </div>
//             <p>© 2024 Villa Club 4. Todos los derechos reservados.</p>
//           </div>
//         </div>
//       </body>
//     </html>
//   `;
// }

