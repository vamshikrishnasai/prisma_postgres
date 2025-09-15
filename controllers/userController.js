const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.details.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.details.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.details.create({
      data: {
        name: name,
        email: email,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const user = await prisma.details.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: name,
        email: email,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.details.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
