const Development = false;
const server = Development ?'http://app.casaerp.cn':'https://app.casaerp.com';

const API = {
    Login: `${server}/Login/login`,
    Achievement:{
        fetch_years: `${server}/Statistics/getStatisticsYear`,
        fetch_sales: `${server}/Statistics/comprehensiveStatistics`,
        fetch_customs: `${server}/Statistics/customerStatistics`,
        fetch_quotations: `${server}/Statistics/quoteStatistics`,
    },
    Aftersale:{
        fetch_mine:`${server}/Aftersale/getMyProcessOrderAfterSaleList`
    }
};

export default API