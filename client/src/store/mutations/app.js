export default {
    handlePath(state, path) {
        state.app.path = path
    },
    handleDialogIsOpen(state, { title, content }) {
        state.app.dialog.isOpen  = !state.app.dialog.isOpen;
        state.app.dialog.title   = title;
        state.app.dialog.content = content
    },
    socketHandleTestData(state, homeResponse) {
        state.app.io.homeResponse = homeResponse
    }
}
