'use client'

import useQueryString from "@/app/hooks/useQueryString";
import FavoriteSong from "@/app/components/FavoriteSong/FavoriteSong";

interface Props {
    entries: any[]
    favorites: any[]
    onToggle: (item: any, toggle: boolean) => any
}

export default function StrsTable({favorites = [], entries = [], onToggle}: Props) {


    const queryString = useQueryString()
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flow-root overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <table className="w-full text-left">
                        <thead className="bg-white">
                        <tr>
                            <th scope="col"
                                className="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                Favorite
                                <div
                                    className="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200"/>
                                <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200"/>
                            </th>

                            <th scope="col"
                                className="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                Name
                                <div
                                    className="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200"/>
                                <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200"/>
                            </th>

                            <th scope="col" className="relative py-3.5 pl-3"/>
                        </tr>
                        </thead>
                        <tbody>
                        {entries.map((i: any) => (
                            <tr key={i.id}>
                                <td className="relative py-4 pr-3 text-sm font-medium text-gray-900">
                                    <FavoriteSong defaultValue={favorites.includes(i.id)}
                                                  onToggle={value => onToggle(i, value)}/>
                                    <div className="absolute right-full bottom-0 h-px w-screen bg-gray-100"/>
                                    <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100"/>
                                </td>
                                <td className="relative py-4 pr-3 text-sm font-medium text-gray-900">
                                    {i.name}
                                    <div className="absolute right-full bottom-0 h-px w-screen bg-gray-100"/>
                                    <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100"/>
                                </td>
                                <td className="relative py-4 pl-3 text-right text-sm font-medium">
                                    <button onClick={() => queryString.changeAndPush('url', i.url)} type="button"
                                            className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                                        Play
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
