import Layout from "@/components/layout"
import Nav from "@/components/nav"
import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession()

  if(!session) {
    return (

        <div className=' bg-blue-900 w-screen h-screen flex items-center'>
          <div className="text-center w-full">
            <button onClick={() => signIn('google')} className="bg-white px-4 p-2 rounded-lg text-black">Login with Google</button>
          </div>
        </div>
    )
  }

  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b> 
        </h2>
        <div  className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden p-1">
          <img src={session?.user?.image} alt="" className="w-6 h-6 rounded-full "/>
          <span className="py-1 px-2"></span>
          {session?.user?.name}
        </div>
      </div>
    </Layout>
)

}
