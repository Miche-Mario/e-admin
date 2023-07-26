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
    <div className="bg-blue-900 min-h-screen flex">
      <Nav/>
      <div className="bg-white flex-grow mt-2 rounded-lg p-4 mb-0 mr-1">
        loggged in { session.user.email}
        <button onClick={() => signOut('google')} className="bg-white px-4 p-2 rounded-lg text-black">Sign Out</button>
      </div>
    </div>
)

}