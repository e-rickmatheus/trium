import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 1. Basic Validation
    if (!data.name || !data.email || !data.phone || !data.company) {
      return NextResponse.json(
        { error: "Campos obrigatórios ausentes" },
        { status: 400 }
      );
    }

    // 2. Integration A: Send Email via Resend HTTP API (No library weight)
    const resendApiKey = process.env.RESEND_API_KEY || "re_cKgdyJNs_CysFAGci6ukoS8uhADicBhQF";
    const targetEmail = "triumlab@gmail.com";

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #121417; color: #F4F4F6; margin: 0; padding: 40px 20px; }
          .container { max-width: 600px; margin: 0 auto; background-color: #1E2229; border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.08); padding: 40px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3); }
          .header { border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 24px; margin-bottom: 32px; text-align: center; }
          .tag { font-size: 11px; font-weight: 700; letter-spacing: 0.15em; color: #3B82F6; text-transform: uppercase; margin-bottom: 8px; display: block; }
          h2 { font-size: 24px; font-weight: 700; color: #F9F9FB; margin: 0; }
          .lead-table { width: 100%; border-collapse: collapse; margin-bottom: 32px; }
          .lead-table td { padding: 14px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.04); font-size: 14px; }
          .lead-table td.label { font-weight: 700; color: #9CA3AF; width: 35%; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em; }
          .lead-table td.value { color: #F9F9FB; font-weight: 500; }
          .bottleneck-box { background-color: rgba(10, 59, 194, 0.15); border-left: 3px solid #3B82F6; padding: 20px; border-radius: 0 16px 16px 0; margin-bottom: 32px; }
          .bottleneck-title { font-size: 11px; font-weight: 700; color: #3B82F6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
          .bottleneck-text { font-size: 14px; font-weight: 500; color: #F9F9FB; margin: 0; line-height: 1.5; }
          .footer { text-align: center; font-size: 11px; color: #6B7280; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 24px; margin-top: 40px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="tag">Novo Lead Qualificado</span>
            <h2>Aplicação de Consultoria</h2>
          </div>
          <table class="lead-table">
            <tr>
              <td class="label">Nome</td>
              <td class="value">${data.name}</td>
            </tr>
            <tr>
              <td class="label">Cargo</td>
              <td class="value">${data.role}</td>
            </tr>
            <tr>
              <td class="label">Empresa</td>
              <td class="value">${data.company}</td>
            </tr>
            <tr>
              <td class="label">E-mail</td>
              <td class="value">${data.email}</td>
            </tr>
            <tr>
              <td class="label">WhatsApp</td>
              <td class="value">${data.phone}</td>
            </tr>
            <tr>
              <td class="label">Website / Social</td>
              <td class="value">${data.website || "Não informado"}</td>
            </tr>
            <tr>
              <td class="label">Faturamento</td>
              <td class="value">${data.revenue}</td>
            </tr>
          </table>
          <div class="bottleneck-box">
            <div class="bottleneck-title">Maior Desafio / Gargalo</div>
            <p class="bottleneck-text">"${data.bottleneck}"</p>
          </div>
          <div class="footer">
            Este lead foi qualificado e capturado pelo seu Ecossistema Digital da TRIUM Lab.
          </div>
        </div>
      </body>
      </html>
    `;

    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "TRIUM Lab Lead <onboarding@resend.dev>",
          to: [targetEmail],
          subject: `Nova Aplicação: ${data.name} - ${data.company}`,
          html: emailHtml,
        }),
      });
    } catch (emailErr) {
      console.error("Resend Email error:", emailErr);
    }

    // 3. Integration C: Send to Google Sheets Webhook (if URL configured)
    const sheetsWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (sheetsWebhookUrl) {
      try {
        await fetch(sheetsWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            name: data.name,
            role: data.role,
            company: data.company,
            email: data.email,
            phone: data.phone,
            website: data.website || "Não informado",
            revenue: data.revenue,
            bottleneck: data.bottleneck,
          }),
        });
      } catch (sheetsErr) {
        console.error("Google Sheets webhook error:", sheetsErr);
      }
    } else {
      console.warn("GOOGLE_SHEET_WEBHOOK_URL não configurada nas variáveis de ambiente.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact Form API Handler error:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
