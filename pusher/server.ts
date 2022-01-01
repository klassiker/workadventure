// lib/server.ts
import App from "./src/App";
import { PUSHER_HOST, PUSHER_HTTP_PORT } from "./src/Enum/EnvironmentVariable";

App.listen(PUSHER_HOST, PUSHER_HTTP_PORT, () => log.info(`WorkAdventure starting on port ${PUSHER_HTTP_PORT}!`));
