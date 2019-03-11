const Koa = require('koa')
const KoaStatic = require('koa-static')

const app = new Koa()

app.use(KoaStatic('./public'))

app.listen(8888, () => {
  console.info('app is start at 8888!')
})
