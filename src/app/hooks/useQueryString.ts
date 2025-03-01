import {usePathname, useRouter, useSearchParams} from 'next/navigation';

function useQueryString() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const changeAndPush = (name: string, value: string) => {
        const params = new URLSearchParams(searchParams);

        if (value.length) {
            params.set(name, value);
        } else {
            params.delete(name);
        }


        router.push(`${pathname}?${params.toString()}`, {scroll: false});
    };

    return {changeAndPush};
}

export default useQueryString;
