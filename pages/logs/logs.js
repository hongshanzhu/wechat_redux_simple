//logs.js
const app = getApp()
const Store = app.Store
const dispatch = Store.dispatch

Page({
  data: {
    foo: ''
  },
  onLoad() {
    console.log(Store.getState());
    const updateDate = () => {
      const foo = Store.getState().appReducer
      this.setData({ foo })
    }

    updateDate();
    this.unsubStore = Store.subscribe(() => updateDate())
  },
  onUnload() {
    this.unsubStore()
  }
})
