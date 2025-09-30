const Koa = require('koa')
const app = new Koa()

app.use(async (ctx)=>{  
 ctx.body={
    msg:'hello koa',
    date: new Date().toLocaleDateString()
 }
})
app.listen(3000)