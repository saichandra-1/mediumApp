"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getapost = exports.createpost = exports.signininput = exports.signupinput = exports.updatepost = void 0;
const zod_1 = __importDefault(require("zod"));
exports.updatepost = zod_1.default.object({
    id: zod_1.default.union([zod_1.default.string(), zod_1.default.number()]),
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    authorId: zod_1.default.string(),
});
exports.signupinput = zod_1.default.object({
    email: zod_1.default.string(),
    name: zod_1.default.string().optional(),
    password: zod_1.default.string().min(6),
});
exports.signininput = zod_1.default.object({
    email: zod_1.default.string(),
    password: zod_1.default.string()
});
exports.createpost = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
});
exports.getapost = zod_1.default.object({
    id: zod_1.default.union([zod_1.default.string(), zod_1.default.number()])
});
