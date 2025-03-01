'use client'

import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const useFavorites = () => {
    const authorization = localStorage.getItem("auth");

    return useQuery({
        queryKey: ['favorites'], queryFn: async () => {
            try {
                const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/favorites`, {
                    headers: {
                        authorization
                    },
                })
                return data
            } catch (error: any) {
                alert(error.message)
                window.location.href = '/logout'
            }
        }
    })
}

export default useFavorites