"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const baseURL_1 = require("./baseURL");
const getAllSubscribers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.default.get(`${baseURL_1.baseURL}/subscribers`);
    return result.data.map((res) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        };
    });
});
const news = {
    title: "Homem morde cachorro",
    content: "Homem raivoso morde cachorro tranquilo",
    date: Date.now()
};
const createNews = (news) => __awaiter(void 0, void 0, void 0, function* () {
    yield axios_1.default.put(`${baseURL_1.baseURL}/news`), news;
});
createNews(news)
    .then(getAllSubscribers);
//  .then( getSubscribersIds ) 
//  .then( notifyAllSubscribers )
