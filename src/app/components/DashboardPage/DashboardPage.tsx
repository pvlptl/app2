'use client'

import {Disclosure, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import Link from "next/link";
import Filters from "@/app/components/Filters/Filters";
import TableWrapper from "@/app/components/TableWrapper/TableWrapper";
import PlayerModal from "@/app/components/PlayerModal/PlayerModal";
import useUser from "@/app/hooks/useUser";

export default function DashboardPage() {
    const user = useUser()


    return (
        <>
            <Disclosure as="nav" className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-stretch justify-start">
                            <Link className="flex shrink-0 items-center" href="/">
                                <img
                                    alt="Your Company"
                                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                    className="h-8 w-8 cursor-pointer"
                                />
                            </Link>
                        </div>
                        <div
                            className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <MenuButton
                                        className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden cursor-pointer">
                                        <span className="absolute -inset-1.5"/>
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            alt=""
                                            src={user.avatar}
                                            className="h-8 w-8 rounded-full object-cover"
                                        />
                                    </MenuButton>
                                </div>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                >
                                    <MenuItem>
                                        <a
                                            href="/logout"
                                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                        >
                                            Sign out
                                        </a>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>
            </Disclosure>

            <div className="my-6">
                <Filters/>
            </div>

            <TableWrapper/>

            <PlayerModal/>
        </>
    )
}
