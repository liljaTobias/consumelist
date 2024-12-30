import prisma from "@/lib/prisma"
import CreateChat from "./ui/CreateChat"

export default async function Home() {
  // const chat = await prisma.chat.findUnique({
  //   where: {
  //     id: "1",
  //   },
  // })

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Chat</h1>
      <CreateChat />
      <code>{JSON.stringify("chat")}</code>
    </div>
  )
}
