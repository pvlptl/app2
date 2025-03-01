'use client'

import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const useUser = () => {
    const authorization = localStorage.getItem("auth");

    const query = useQuery({
        queryKey: ['user'], queryFn: async () => {
            try {
                const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
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

    return query.data
}

export default useUser