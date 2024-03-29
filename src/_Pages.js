// 业绩系统
import {COAchievementScreen, CUAchievementScreen, QUAchievementScreen} from "./pages/Achievement";
import LoginScreen from "./pages/Login";
// 售后系统
import {ADtails, DAftersale, MAftersale} from "./pages/Aftersale";
// 物流系统
import {LDtails, DLogistics, MLogistics} from "./pages/Logistics";
// 个人中心
import {ModifyPasswordScreen, ModifyPhoneScreen} from "./pages/Ucenter";
// 日报系统
import {
    DeDayReport,
    DeWeekReport,
    MyDayReport,
    MyDayReportDetail,
    MyWeekReport,
    MyWeekReportDetail
} from "./pages/Report";
import MainScreen from "./_Tabbar";
// 待审核
import {
    OrderReview,
    OrderReviewDetails,
    OrderChange,
    OrderChangeDetails,
    Invoice,
    InvoiceDetails,
    ContractApproval,
    ContractApprovalDetails,
    Review
} from './pages/Review';
// 客户系统
import {
    MyFollow,
    MyFollowDetails,
    DepartmentFollow,
    DepartmentFollowDetails,
    DepartmentClient,
    DeClientDetails,
    MyClient,
    MyClientDetails,
    ClientEdit,
    FollowList,
    ADDFollow,
    UpdataImg
} from './pages/client';
// 订单与报价
import {
    MyQuota,
    MyQuotaDetails,
    DepartmentQuota,
    DepartmentQuotaDetails,
    MyOrder,
    MyOrderDetails,
    DepartmentOrder,
    DepartmentOrderDetails,
    MyContractApproval,
    MyContractApprovalDetails,
    DepartmentContractApproval,
    DepartmentContractApprovalDetails,
    MyChangeOrder,
    MyChangeOrderDetails,
    DepartmentChangeOrder,
    DepartmentChangeOrderDetails
} from './pages/OrderQuota';
import search from './pages/Search'


const StackRouteConfigs = {
    LoginScreen: {screen: LoginScreen},
    'Search': {screen: search},
    'AftersaleSystem/My': { screen: MAftersale },
    'AftersaleSystem/Details': { screen: ADtails },
    'AftersaleSystem/Department': { screen: DAftersale },

    'LogisticsSystem/My': { screen: MLogistics },
    'LogisticsSystem/Details': { screen: LDtails },
    'LogisticsSystem/Department': { screen: DLogistics },

    'Ucenter/ModifyPassword': { screen: ModifyPasswordScreen },
    'Ucenter/ModifyPhone': { screen: ModifyPhoneScreen },

    'ReportSystem/Day/MyReport': { screen: MyDayReport },
    'ReportSystem/Day/DeReport': { screen: DeDayReport },
    'ReportSystem/Day/MyReportDetail': { screen: MyDayReportDetail },

    'ReportSystem/Week/MyReport': { screen: MyWeekReport },
    'ReportSystem/Week/MyReportDetail': { screen: MyWeekReportDetail },
    'ReportSystem/Week/DeReport': { screen: DeWeekReport },

    'AchievementSystem/Comprehensive': { screen: COAchievementScreen },
    'AchievementSystem/Customer': { screen: CUAchievementScreen },
    'AchievementSystem/Quotation': { screen: QUAchievementScreen },

    'Review/Order':{ screen: OrderReview },
    'Review/Order/Details':{ screen: OrderReviewDetails },
    'Review/OrderChange':{ screen: OrderChange },
    'Review/OrderChange/Details':{ screen: OrderChangeDetails },
    'Review/Invoice':{ screen: Invoice },
    'Review/Invoice/Details':{ screen: InvoiceDetails },
    'Review/ContractApproval':{ screen: ContractApproval },
    'Review/ContractApproval/Details':{ screen: ContractApprovalDetails },
    'Review/Order/Review':{ screen: Review },

    'Client/MyFollow':{ screen: MyFollow },
    'Client/MyFollow/Details':{ screen: MyFollowDetails },
    'Client/DepartmentFollow':{ screen: DepartmentFollow },
    'Client/DepartmentFollow/Details':{ screen: DepartmentFollowDetails },
    'Client/DepartmentClient':{ screen: DepartmentClient },
    'Client/DeClient/Details':{ screen: DeClientDetails },
    'Client/MyClient':{ screen: MyClient },
    'Client/MyClient/Details':{ screen: MyClientDetails },
    'Client/MyClient/Edit':{ screen: ClientEdit },
    'Client/MyClient/FollowList':{ screen: FollowList },
    'Client/MyClient/ADDFollow':{ screen: ADDFollow },
    'Client/MyClient/UpdataImg':{ screen: UpdataImg },

    'OrderQuota/MyQuota':{ screen: MyQuota },
    'OrderQuota/MyQuota/Details':{ screen: MyQuotaDetails },
    'OrderQuota/DepartmentQuota':{ screen: DepartmentQuota },
    'OrderQuota/DepartmentQuota/Details':{ screen: DepartmentQuotaDetails },
    'OrderQuota/MyOrder':{ screen: MyOrder },
    'OrderQuota/MyOrder/Details':{ screen: MyOrderDetails },
    'OrderQuota/DepartmentOrder':{ screen: DepartmentOrder },
    'OrderQuota/DepartmentOrder/Details':{ screen: DepartmentOrderDetails },
    'OrderQuota/MyContractApproval':{ screen: MyContractApproval },
    'OrderQuota/MyContractApproval/Details':{ screen: MyContractApprovalDetails },
    'OrderQuota/DepartmentContractApproval':{ screen: DepartmentContractApproval },
    'OrderQuota/DepartmentContractApproval/Details':{ screen: DepartmentContractApprovalDetails },
    'OrderQuota/MyChangeOrder':{ screen: MyChangeOrder },
    'OrderQuota/MyChangeOrder/Details':{ screen: MyChangeOrderDetails },
    'OrderQuota/DepartmentChangeOrder':{ screen: DepartmentChangeOrder },
    'OrderQuota/DepartmentChangeOrder/Details':{ screen: DepartmentChangeOrderDetails },

    MainScreen: {screen: MainScreen}
};

export default StackRouteConfigs