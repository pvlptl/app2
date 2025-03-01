'use client'
import {useState} from "react";
import {useDebouncedCallback} from "use-debounce";
import {useSearchParams} from "next/navigation";
import useQueryString from "@/app/hooks/useQueryString";

export default function Filters() {
    const queryString = useQueryString()
    const searchParams = useSearchParams()
    const defaultValue = searchParams.get('search')
    const [value, setValue] = useState(defaultValue || '');

    const debounced = useDebouncedCallback(
        (v) => {
            queryString.changeAndPush('search', v)
        },
        1000
    );

    const change = (e: any) => {
        setValue(e.target.value);
        debounced(e.target.value)
    }

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <label htmlFor="search" className="block text-sm/6 font-medium text-gray-900">
                Quick search
            </label>
            <div className="mt-2">
                <div
                    className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                        value={value}
                        placeholder="Song name..."
                        id="search"
                        name="search"
                        type="text"
                        onChange={change}
                        className="block min-w-0 grow px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                    <div className="flex py-1.5 pr-1.5">
                        <kbd
                            className="inline-flex items-center rounded-sm border border-gray-200 px-1 font-sans text-xs text-gray-400">
                            ⌘K
                        </kbd>
                    </div>
                </div>
            </div>
        </div>
    )
}
