import z, { number } from 'zod';

export const updatepost=z.object({
    id:z.union([z.string(),z.number()]),
    title:z.string(),
    content:z.string(),
    authorId:z.string(),
})

export type updatepostschema =z.infer<typeof updatepost>;

export const signupinput=z.object({
    email:z.string(),
    name : z.string().optional(),
    password: z.string().min(6),
})

export type signupinputschema =z.infer<typeof signupinput>;

export const signininput=z.object({
    email:z.string(),
    password:z.string()
})
export type signininputschema =z.infer<typeof signininput>;

export const createpost =z.object({
    title:z.string(),
    content:z.string(),
})
export type createpostschema=z.infer<typeof createpost>
export const getapost = z.object({
    id: z.union([z.string(), z.number()])
});
export type getpostschema=z.infer<typeof getapost>

