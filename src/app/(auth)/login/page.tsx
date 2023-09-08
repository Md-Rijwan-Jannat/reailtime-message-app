'use client'
import Button from '@/components/ui/Button'
import { FC, useState } from 'react'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'

interface pageProps {

}

const page: FC<pageProps> = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function loginWithGoogle() {
        setIsLoading(true)
        try {
            // throw new Error('no-matter')
            await signIn('google')
        } catch (error) {
            // display error message to user
            toast.error('Something went wrong with your login.')
        } finally {
            setIsLoading(false)
        }
    }


    return <>
        <div className='flex min-h-full justify-center items-start py-12 sm:px-6 px-4 lg"px-8'>
            <div className='w-full flex flex-col items-center max-w-md space-y-8' >
                <div className='flex flex-col items-center gap-10'>
                    logo
                    <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
                        Sign in to your account
                    </h2>
                </div>
                <Button
                    isLoading={isLoading}
                    type='button'
                    className='max-w-sm mx-auto w-full'
                    onClick={loginWithGoogle}>
                    {isLoading ? null : (<svg className='mr-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width='35' height="35" viewBox="0 0 48 48">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>)}
                    Google
                </Button>
            </div>
        </div>
    </>
}

export default page