import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

import { decode, sign, verify, } from 'hono/jwt'
import user from './routes/user';
import blog from './routes/blog';
import { cors } from 'hono/cors';




const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	},
	Variables : {
		userId: string
		
	}
}>();

app.use(cors()) ;
app.route("/api/v1/user",user)

//Middleware
app.use('/*', async(c, next)=> {
const jwt = c.req.header('Authorization');
  if (!jwt) {
	  c.status(401);
	  return c.json({ error: "unauthorized jwt" });
  }
  const token = jwt.split(' ')[1];
  const payload = await verify(token, c.env.JWT_SECRET);
  if (!payload) {
	  c.status(401);
	  return c.json({ error: "unauthorized" });
  }
  c.set('userId', payload.id as string);
  await next()
})


app.route('/api/v1/blog',blog)


export default app
