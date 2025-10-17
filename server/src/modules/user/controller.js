import * as userService from "./service.js";

export async function getUsersHandler(req, reply) {
  try {
    //  const users = await userService.getAllUsers();
    reply.send({ users: "user - route" });
  } catch (error) {
    reply.status(500).send({ message: error.message });
  }
}

export async function createUserHandler(req, reply) {
  try {
    const user = await userService.createUser(req.body);
    reply.status(201).send(user);
  } catch (error) {
    reply.status(400).send({ message: error.message });
  }
}

export async function getUserByIdHandler(req, reply) {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return reply.status(404).send({ message: "User not found" });
    reply.send(user);
  } catch (error) {
    reply.status(500).send({ message: error.message });
  }
}
