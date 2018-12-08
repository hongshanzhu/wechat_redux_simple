//app.js
import { createStore, applyMiddleware, combineReducers, compose } from './lib/redux.min'
import thunk from './lib/redux-thunk';
import composeWithDevTools from './lib/remote-redux-devtool';
import reduxlogger from './lib/redux-logger/index';

import { appReducer} from './reducers'
// combineReducers 参数是object，如果多个 则逗号分隔
const Store = createStore(combineReducers({ appReducer}), compose(
  applyMiddleware(thunk, reduxlogger),
  //composeWithDevTools({ hostname: '127.0.0.1', port: 8080, secure: false })
))

App({
  Store,
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})
