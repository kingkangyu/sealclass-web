(function (win) {
  var setting = {
    lang: 'zh',
    server: 'https://server/api', // SealClass Server 地址
    im: {
      appKey: '9juuh2oijnn',
      // navi: 'https://nav.cn.ronghub.com', // navi 地址, 公有云可不填
      // api: '',
      // protobuf: '',
      reconnectUrl: 'cdn.ronghub.com/RongIMLib-2.2.6.min.js' // 重连地址
    },
    emoji: {
      size: 16 // emoji 字体大小
      // url: ''
    },
    upload: {
      url: 'https://upload.qiniu.com' // 上传文件地址, 默认七牛
    },
    rtc: {
      resolution: { // 分辨率选项
        list: [
          { width: 320, height: 240 },
          { width: 640, height: 480 },
          { width: 1280, height: 720 }
        ],
        default: { width: 640, height: 480 }
      },
      screenPluginPath: 'assets/plugin/screenshare-addon.zip' // 屏幕共享插件地址
    },
    class: {
      appleySpeechWaitTime: 30000,  // 请求框展示时间
      toastTime: 30000,  // 提示框展示时间
      maxPersonCount: 16 // 最大人数
    },
    isDebug: true
  };

  win.RongClass = win.RongClass || {
    locale: {},
    components: {},
    dialog: {},
    setting: setting
  };
  
})(window);