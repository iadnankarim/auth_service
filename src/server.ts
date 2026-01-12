import app from "./app.js";
import { Config } from "./config/index.js";
import logger from "./config/logger.js";

const startServer = () => {
  const PORT = Config.PORT ?? 5000;

  try {
    app.listen(PORT, () => {
      // logger.warn("test");
      // logger.error("trstassd.......");
      logger.info(`Listening on port ${PORT}`);
    });
  } catch (error) {
    logger.error("Failed to start server", error);
    process.exit(1);
  }
};

startServer();
