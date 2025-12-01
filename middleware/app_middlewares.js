import cors from 'cors';
import { json, urlencoded } from 'express';

/**
 * 配置应用级中间件
 * @param {Object} app - Express应用实例
 */
function setupAppMiddlewares(app) {
    // 添加CORS中间件，允许所有来源
    app.use(cors());
    
    // 添加JSON解析中间件
    app.use(json());
    
    // 添加URL编码解析中间件
    app.use(urlencoded({ extended: true }));
}

export { setupAppMiddlewares };