'use client'

import {useEffect} from "react";

const Page = () => {
    useEffect(() => {
        localStorage.removeItem('auth');
        window.location.href = '/'
    }, [])

    return <div/>
}

export default Page