import HomePage    from "@/pages/home/index";
import TodayPage   from "@/pages/home/today";
import WeekPage    from "@/pages/home/week";
import MonthPage   from "@/pages/home/month";
import CompanyPage from "@/pages/home/company";

export default {
    path     : '/home',
    component: HomePage,
    redirect : '/home/today',
    children : [
        {
            path     : 'today',
            component: TodayPage,
        },
        {
            path     : 'week',
            component: WeekPage,
        },
        {
            path     : 'month',
            component: MonthPage,
        },
        {
            path     : 'company',
            component: CompanyPage,
        },
    ]
}
