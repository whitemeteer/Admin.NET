/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET 通用权限开发平台
 * 让 .NET 开发更简单、更通用、更流行。前后端分离架构(.NET6/Vue3)，开箱即用紧随前沿技术。<br/><a href='https://gitee.com/zuohuaijun/Admin.NET/'>https://gitee.com/zuohuaijun/Admin.NET</a>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

 /**
 * 系统在线用户表
 *
 * @export
 * @interface SysOnlineUser
 */
export interface SysOnlineUser {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof SysOnlineUser
     */
    id?: number;

    /**
     * 租户Id
     *
     * @type {number}
     * @memberof SysOnlineUser
     */
    tenantId?: number | null;

    /**
     * 连接Id
     *
     * @type {string}
     * @memberof SysOnlineUser
     */
    connectionId?: string | null;

    /**
     * 用户Id
     *
     * @type {number}
     * @memberof SysOnlineUser
     */
    userId?: number;

    /**
     * 账号
     *
     * @type {string}
     * @memberof SysOnlineUser
     */
    userName: string;

    /**
     * 真实姓名
     *
     * @type {string}
     * @memberof SysOnlineUser
     */
    realName?: string | null;

    /**
     * 连接时间
     *
     * @type {Date}
     * @memberof SysOnlineUser
     */
    time?: Date | null;

    /**
     * 连接IP
     *
     * @type {string}
     * @memberof SysOnlineUser
     */
    ip?: string | null;

    /**
     * 浏览器
     *
     * @type {string}
     * @memberof SysOnlineUser
     */
    browser?: string | null;

    /**
     * 操作系统
     *
     * @type {string}
     * @memberof SysOnlineUser
     */
    os?: string | null;
}
