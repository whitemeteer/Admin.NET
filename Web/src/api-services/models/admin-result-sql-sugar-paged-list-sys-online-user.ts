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

import { SqlSugarPagedListSysOnlineUser } from './sql-sugar-paged-list-sys-online-user';
 /**
 * 全局返回结果
 *
 * @export
 * @interface AdminResultSqlSugarPagedListSysOnlineUser
 */
export interface AdminResultSqlSugarPagedListSysOnlineUser {

    /**
     * 状态码
     *
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListSysOnlineUser
     */
    code?: number;

    /**
     * 类型success、warning、error
     *
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysOnlineUser
     */
    type?: string | null;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysOnlineUser
     */
    message?: string | null;

    /**
     * @type {SqlSugarPagedListSysOnlineUser}
     * @memberof AdminResultSqlSugarPagedListSysOnlineUser
     */
    result?: SqlSugarPagedListSysOnlineUser;

    /**
     * 附加数据
     *
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListSysOnlineUser
     */
    extras?: any | null;

    /**
     * 时间
     *
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListSysOnlineUser
     */
    time?: Date;
}
