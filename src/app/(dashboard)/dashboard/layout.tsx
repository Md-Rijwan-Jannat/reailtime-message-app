import { Icon, Icons, } from '@/components/Icons'
import { authOptions } from '@/lib/auth'
import { Link } from 'lucide-react'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import { FC, ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

interface SidebarOption {
    id: number
    name: string
    href: string
    Icon: Icon
}
const sidebarOptions: SidebarOption[] = [
    {
        id: 1,
        name: 'Add friend',
        href: '/dashboard/add',
        Icon: 'UserPlus',
    }
]

const Layout = async ({ children }: LayoutProps) => {

    const session = await getServerSession(authOptions)

    if (!session) notFound()

    return (
        <div className='w-full flex h-screen'>
            <div className='flex w-full h-full max-w-xs grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white'>
                <Link href='/dashboard' className='flex h-16 shrink-0 items-center '>
                    <Icons.Logo className='h-0 w-auto text-indigo-600' />
                </Link>

                <div className='text-xs font-semibold leading-6 text-gray-400'>
                    Your chats
                </div>
                <nav className=' flex flex-1 flex-col'>
                    <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                        <li className=''>
                            <div className='text-xs font-semibold leading-6 text-gray-400'>
                                Overview
                            </div>
                            <ul className='mx-2 mt-2 space-y-2' role=' list'>
                                {sidebarOptions.map((option) => {
                                    const Icon = Icons[option.Icon]
                                    return (
                                        <li key={option.id}>
                                            <Link
                                                href={option.href}
                                                className='text-gray-700 hover:text-indigo-600 hover:bg-gray-50 block  rounded-md p-2 text-sm leading-6 font-semibold'>
                                                <span className='text-gray-400 border-gray-200 group-hover:border-indigo-600 flex flex-row group-hover:text-indigo-600  h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'>
                                                    <Icon className='h-4 w-4' />
                                                </span>

                                                <span className='truncate'>{option.name}
                                                </span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            {children}
        </div>
    )
}

export default Layout