import Button from '@/components/ui/Button'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

const page = async ({}) => {

  const session = await getServerSession(authOptions)
  console.log(session)
  return <pre>{JSON.stringify(session)}</pre>
}

export default page



