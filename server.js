/* eslint no-console:0 */

const http = require('http');
const AV = require('leanengine');

const createApp = require('./server/app');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY,
});

// 如果不希望使用 masterKey 权限，可以将下面一行删除
AV.Cloud.useMasterKey();

const isDev = process.env.NODE_ENV !== 'production';
// 端口一定要从环境变量 `LEANCLOUD_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
const port = parseInt(process.env.LEANCLOUD_APP_PORT || process.env.PORT || 3000, 10);

createApp()
  .then((app) => { http.createServer(app.callback()).listen(port); })
  .then(() => {
    if (isDev) {
      // eslint-disable-next-line
      console.log(`> Ready on http://localhost:${port}`);
    } else {
      // eslint-disable-next-line
      console.log('server is starting port ' + port);
    }
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
