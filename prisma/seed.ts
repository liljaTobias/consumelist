import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      email: "user1@example.com",
      name: "User One",
      password: "password1",
    },
  })

  const user2 = await prisma.user.create({
    data: {
      email: "user2@example.com",
      name: "User Two",
      password: "password2",
    },
  })

  // Create a chat
  const chat = await prisma.chat.create({
    data: {
      users: {
        connect: [{ id: user1.id }, { id: user2.id }],
      },
    },
  })

  // Create messages
  await prisma.message.createMany({
    data: [
      {
        chatId: chat.id,
        senderId: user1.id,
        content: "Hello from User One!",
      },
      {
        chatId: chat.id,
        senderId: user2.id,
        content: "Hello from User Two!",
      },
    ],
  })

  console.log("Seed data created successfully")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
