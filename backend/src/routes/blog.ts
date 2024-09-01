import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {updatepost ,createpost} from '@saichandra1121/common';

const blog = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	},
	Variables : {
		userId: string

	}
}>();


blog.post("/post",async(c,next)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();
    console.log(body)
    const {success}= createpost.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({message:"worong input"})
      }
    try{
        const blogpost=await prisma.post.create({
            data:{
                title:body.title,
                content:body.content,
                authorId:c.get('userId'),
            }
        })
        c.status(200);
        return c.json(blogpost)
    }catch(err){
        c.status(401)
        return c.json({err :"post Error check it out"})
    }
})

blog.put("/update", async(c,next)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body=await c.req.json();
    const {success}= updatepost.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({message:"worong input"})
      }
    try{
        const updateblog= await prisma.post.update({
            where:{
                id:body.id,
                authorId:body.authorId
            },
            data:{
                title:body.title,
                content:body.content
            }
        })
        c.status(200)
        return c.json(updateblog)
    }catch(err){
        return c.json({err:"can't update"})
    }
})

blog.get('/bulk', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const blogs = await prisma.post.findMany({
        select:{
            title:true,
            content:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    });

	return c.json({blogs});
})


blog.get('/:id', async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.post.findFirst({
            where: {
                id
            },
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
    
        return c.json({
            blog
        });
    } catch(e) {
        c.status(411); // 4
        return c.json({
            message: "Error while fetching blog post"
        });
    }
})


export default blog;