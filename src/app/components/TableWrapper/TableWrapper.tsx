import React from 'react'
import {useSearchParams} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import StrsTable from "@/app/components/StrsTable/StrsTable";
import useFavorites from "@/app/hooks/useFavorites";
import useToggleFavorites from "@/app/hooks/useToggleFavorites";

const TableWrapper = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('search')

    const query = useQuery({
        queryKey: ['search', search], queryFn: async () => {
            try {
                const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`, {
                    params: {search}
                })
                return data
            } catch (error: any) {
                alert(error.message)
            }
        }
    })

    const entries = query.data || []

    const favorites = useFavorites()


    const toggleFavorites = useToggleFavorites()

    const toggle = (item: any) => {
        toggleFavorites.mutate({
            songId: item.id
        }, {
            onSuccess: favorites.refetch
        })
    }


    return <StrsTable entries={entries} onToggle={toggle} favorites={favorites.data}/>
}

export default TableWrapper