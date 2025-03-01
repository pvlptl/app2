import {Dialog, DialogBackdrop, DialogPanel} from '@headlessui/react'
import {Suspense, useEffect, useState} from 'react'
import {useSearchParams} from "next/navigation";
import ReactPlayer from "react-player";
import useQueryString from "@/app/hooks/useQueryString";

export default function PlayerModal() {
    const queryString = useQueryString()
    const [isOpen, setIsOpen] = useState(false)

    const searchParams = useSearchParams()
    const url = searchParams.get('url')

    useEffect(() => {
        if (url) {
            setIsOpen(true)
        }
    }, [url])

    const close = () => {
        setIsOpen(false)
        setTimeout(() => queryString.changeAndPush('url', ''), 600)
    }

    return (
        <Dialog open={isOpen} onClose={close} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div>
                            {url && <Suspense fallback={<div/>}>
                                <div style={{position: 'relative', paddingTop: '56.25%'}}>
                                    <ReactPlayer
                                        style={{position: 'absolute', top: 0, left: 0}}
                                        width="100%"
                                        height="100%"
                                        controls
                                        url={url}
                                        playing
                                    />
                                </div>
                            </Suspense>}
                        </div>
                        <div className="mt-5 sm:mt-6">
                            <button
                                type="button"
                                onClick={close}
                                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                            >
                                Close
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}