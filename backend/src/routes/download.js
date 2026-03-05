const express = require("express");
const Download = require("../models/Download");
const { sendDownloadNotification } = require("../services/emailService");

const router = express.Router();

router.post("/cv", async (req, res) => {
  try {
    const userAgent = req.headers["user-agent"];

    const download = new Download({
      userAgent,
    });

    await download.save();

    await sendDownloadNotification({
      userAgent,
      downloadDate: download.date,
    });

    res.status(200).json({
      message: "Download registrado com sucesso",
      downloadId: download._id,
    });
  } catch (error) {
    console.error("Erro ao registrar download:", error);
    res.status(500).json({ error: "Erro ao processar download" });
  }
});

module.exports = router;