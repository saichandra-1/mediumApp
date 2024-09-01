import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify, } from 'hono/jwt'
import {signininput, signupinput} from '@saichandra1121/common'
const user = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	},
	Variables : {
		userId: string

	}
}>();


user.post('/signup',async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
    const body =await c.req.json();
    const {success}= signupinput.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({message:"worong input"})
    }

    try{
      const result= await prisma.user.create({
        data:{
          email:body.email,
          name : body.name,
          password:body.password
        }
      })
      const token = await sign({id:result.id},c.env.JWT_SECRET)
      return c.text(token)
    }catch(err){
      return c.text(err+" plz give valid input")
    }
    
  })

  user.post('/signin', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
      const body= await c.req.json()
      const {success}= signininput.safeParse(body);
      if(!success){
        c.status(411)
        return c.json({message:"invalid input"})
      }
     const user= await prisma.user.findFirst({
      where:{
        email:body.email,
        password:body.password
      }
     })
      if(user){
        const sigintoken=await sign({id:user.id},c.env.JWT_SECRET)
        return c.json({sigintoken})
      }
      c.status(403)
      return c.text('user does not exit')
    })
  
export default user;