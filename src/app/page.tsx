'use client'

import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useState} from "react";

const defaultData = {
    email: '',
    password: '',
}

export default function Page() {
    const [data, setData] = useState(defaultData)

    const mutation = useMutation({
        mutationFn: () => axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, data),
        onSuccess: (res: any) => {
            if (res.data) {
                localStorage.setItem('auth', res.data);
                window.location.href = '/dashboard'
            }
        },
        onError: (error) => {
            alert(error.message)
        }
    })

    const submit = (e: any) => {
        e.preventDefault()
        mutation.mutate()
    }

    const change = (e: any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <>
            <div className="flex min-h-full flex-1">
                <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div>
                            <img
                                alt="Your Company"
                                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-10 w-auto"
                            />
                            <h2 className="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your
                                account</h2>
                        </div>

                        <div className="mt-10">
                            <div>
                                <form onSubmit={submit} className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                autoComplete="email"
                                                value={data.email}
                                                onChange={change}
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                            Password
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                autoComplete="current-password"
                                                value={data.password}
                                                onChange={change}
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>


                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="relative hidden w-0 flex-1 lg:block">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                        className="absolute inset-0 size-full object-cover"
                    />
                </div>
            </div>
        </>
    )
}
