import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className=' justify-center items-center flex'>
      <SignIn />
    </div>
  )
}