'use client'

import React from 'react'
import useUser from "@/app/hooks/useUser";

interface Props {
    children: React.ReactNode
}


const Auth = ({children}: Props) => {
    const authorization = localStorage.getItem("auth");

    const user = useUser()


    if (!authorization) window.location.href = '/logout'


    if (!user) return null

    return children
}

export default Auth