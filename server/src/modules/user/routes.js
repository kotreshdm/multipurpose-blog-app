import {
  getUsersHandler,
  createUserHandler,
  getUserByIdHandler,
} from "./controller.js";

async function userRoutes(fastify) {
  fastify.get("/users", getUsersHandler);
  fastify.post("/users", createUserHandler);
  fastify.get("/users/:id", getUserByIdHandler);
}

export default userRoutes;
