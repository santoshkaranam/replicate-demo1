// pages/api/pdf.js

import {IronPdfGlobalConfig, PdfDocument} from "@ironsoftware/ironpdf";

// Apply your IronPDF license key
IronPdfGlobalConfig.getConfig().licenseKey = "IRONSUITE.WINSWRITERSIRONSOFTWARECOM.31102-3E7C9B3308-CIHWVP2-L2A7FVEBUSFN-DP6CI32YVXIN-45HQSAZOBOCW-YCYETGS4ENQX-NZXXG4YCPAYI-EBCIJ43PNLJW-DKWC7U-TFXPQ4LKLXGPEA-DEPLOYMENT.TRIAL-G43TTA.TRIAL.EXPIRES.20.MAY.2025";


export default async function handler(req, res) {
    const htmlContent = '<html><body><h1>Hello IronPDF!</h1></body></html>';
    try {
        const url = req.query.url
        const pdf = await PdfDocument.fromUrl(url);
        const data = await pdf.saveAsBuffer();
        console.error('data PDF:', data);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=awesomeIron.pdf');
        res.send(data);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).end();
    }
}
