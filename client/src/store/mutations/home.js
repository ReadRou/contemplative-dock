export default {
    /**
     * home
     * @param {*} state
     * @param {*} path
     */
    homeHandlePath(state, path) {
        state.home.path = path
    },

    /**
     * today list
     * @param {} state
     * @param {} data
     */
    homeTodayHandleListRefreshing(state) {
        state.home.today.list.refreshing = !state.home.today.list.refreshing
    },
    homeTodayHandleListData(state, data) {
        state.home.today.list.data = data
    },
    homeTodayHandleListLoad(state, data) {
        data.forEach(element => {
            state.home.today.list.data.push(element)
        });
    },

    /**
     * week list
     * @param {*} state
     * @param {*} data
     */
    homeWeekHandleListRefreshing(state) {
        state.home.week.list.refreshing = !state.home.week.list.refreshing
    },
    homeWeekHandleListLoading(state) {
        state.home.week.list.loading = !state.home.week.list.loading
    },
    homeWeekHandleListRefresh(state, data) {
        state.home.week.list.data = data
    },
    homeWeekHandleListLoad(state, data) {
        data.forEach(element => {
            state.home.week.list.data.push(element)
        });
    },

    /**
     * month list
     * @param {*} state
     * @param {*} data
     */
    homeMonthHandleListRefreshing(state) {
        state.home.month.list.refreshing = !state.home.month.list.refreshing
    },
    homeMonthHandleListLoading(state) {
        state.home.month.list.loading = !state.home.month.list.loading
    },
    homeMonthHandleListRefresh(state, data) {
        state.home.month.list.data = data
    },
    homeMonthHandleListLoad(state, data) {
        data.forEach(element => {
            state.home.month.list.data.push(element)
        });
    },

    /**
     * Swiper
     * @param {} state
     * @param {} data
     */
    homeTodayHandleSwiperData(state, data) {
        state.home.today.swiper.data = data
    },
}
