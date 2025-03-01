'use client'

import {useMutation} from "@tanstack/react-query";
import axios from "axios";

const useToggleFavorites = () => {
    const authorization = localStorage.getItem("auth");

    return useMutation({
        mutationFn: async (input) => {
            try {
                const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/favorites`, input, {
                    headers: {
                        authorization
                    },
                })
                return data
            } catch (error: any) {
                alert(error.message)
            }
        },
    })
}

export default useToggleFavorites