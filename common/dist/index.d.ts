import z from 'zod';
export declare const updatepost: z.ZodObject<{
    id: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    title: z.ZodString;
    content: z.ZodString;
    authorId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string | number;
    title: string;
    content: string;
    authorId: string;
}, {
    id: string | number;
    title: string;
    content: string;
    authorId: string;
}>;
export type updatepostschema = z.infer<typeof updatepost>;
export declare const signupinput: z.ZodObject<{
    email: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export type signupinputschema = z.infer<typeof signupinput>;
export declare const signininput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type signininputschema = z.infer<typeof signininput>;
export declare const createpost: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export type createpostschema = z.infer<typeof createpost>;
export declare const getapost: z.ZodObject<{
    id: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
}, "strip", z.ZodTypeAny, {
    id: string | number;
}, {
    id: string | number;
}>;
export type getpostschema = z.infer<typeof getapost>;
