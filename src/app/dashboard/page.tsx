'use client'
import DashboardPage from "@/app/components/DashboardPage/DashboardPage";
import Auth from "@/app/components/Auth/Auth";

const Page = () => {
    return <Auth><DashboardPage/></Auth>
}

export default Page