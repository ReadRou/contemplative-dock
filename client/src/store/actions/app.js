export default {
    commitPath({ commit }, path) {
        commit('handlePath', path)
    },
    commitDialogIsOpen({ commit }, { title = '', content = '', }) {
        commit('handleDialogIsOpen', {
            title,
            content
        })
    },
    async socketCommitTestData({ commit }, homeResponse) {
        await commit('socketHandleTestData', homeResponse)
    }
}
