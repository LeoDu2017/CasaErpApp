import {COAchievementScreen, CUAchievementScreen, QUAchievementScreen} from "./pages/Achievement";
import LoginScreen from "./pages/Login";
import {ADtails, DAftersale, MAftersale} from "./pages/Aftersale";
import {ModifyPasswordScreen, ModifyPhoneScreen} from "./pages/Ucenter";
import {
    DeDayReport, DeWeekReport,
    MyDayReport,
    MyDayReportDetail,
    MyDayReportNew,
    MyWeekReport,
    MyWeekReportDetail
} from "./pages/Report";
import MainScreen from "./_Tabbar";

const StackRouteConfigs = {

    LoginScreen: {screen: LoginScreen},
    'AftersaleSystem/My': { screen: MAftersale },
    'AftersaleSystem/Details': { screen: ADtails },
    'AftersaleSystem/Department': { screen: DAftersale },
    'Ucenter/ModifyPassword': { screen: ModifyPasswordScreen },
    'Ucenter/ModifyPhone': { screen: ModifyPhoneScreen },
    'ReportSystem/Day/MyReport': { screen: MyDayReport },
    'ReportSystem/Day/DeReport': { screen: DeDayReport },
    'ReportSystem/Day/MyReportDetail': { screen: MyDayReportDetail },
    'ReportSystem/Day/New/MyReport': { screen: MyDayReportNew },
    'ReportSystem/Week/MyReport': { screen: MyWeekReport },
    'ReportSystem/Week/MyReportDetail': { screen: MyWeekReportDetail },
    'ReportSystem/Week/DeReport': { screen: DeWeekReport },
    'AchievementSystem/Comprehensive': { screen: COAchievementScreen },
    'AchievementSystem/Customer': { screen: CUAchievementScreen },
    'AchievementSystem/Quotation': { screen: QUAchievementScreen },

    MainScreen: {screen: MainScreen}
};

export default StackRouteConfigs