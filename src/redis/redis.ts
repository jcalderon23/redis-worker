import bull from "bull";

const REDIS_URL = process.env.REDIS_URL || "redis://127.0.0.1:6379";
const REDIS_QUEUE = process.env.REDIS_QUEUE || "Test";

const Queue = new bull(REDIS_QUEUE, REDIS_URL);

export default Queue;
