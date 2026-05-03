const cors = require("cors");
const { env } = require("./env");

const corsPolicy = cors({
  origin: env.UI_URL,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
  credentials: true,
});

module.exports = { corsPolicy };
