export default {
    homeCommitPath({ commit }, path) {
        commit('homeHandlePath', path)
    },
    /**
     * today
     */
    async homeTodayCommitListData({ commit }, data) {
        commit('homeTodayHandleListRefreshing');
        commit('homeTodayHandleListData', data);
        commit('homeTodayHandleListRefreshing')
    },
    async homeTodayCommitSwiperData({ commit }, data) {
        commit('homeTodayHandleSwiperData', data)
    },
    /**
     * week
     */
    async homeWeekCommitListData({ commit }, data) {
        commit('homeWeekHandleListRefreshing');
        commit('homeWeekHandleListRefresh', data);
        commit('homeWeekHandleListRefreshing')
    },
    /**
     * Month
     */
    async homeMonthCommitListRefresh({ commit }) {
        commit('homeMonthHandleListRefreshing');
        let data = await Axios.get('http://localhost:8080/今日头条.json').then(res => {
            return res.data.slice(0, 2)
        });
        commit('homeMonthHandleListRefresh', data);
        commit('homeMonthHandleListRefreshing')
    },
    async homeMonthCommitListData({ commit },data) {
        commit('homeMonthHandleListLoading');
        commit('homeMonthHandleListLoad', data);
        commit('homeMonthHandleListLoading')
    },
}
