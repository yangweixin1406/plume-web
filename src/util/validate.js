/**
 * Created by jiachenpan on 16/11/18.
 */

export function isvalidUsername(str) {
    const valid_map = ['admin', 'editor']
    return valid_map.indexOf(str.trim()) >= 0
}

/**
 * 邮箱
 * @param {*} s
 */
export function isEmail(s) {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/* 小写字母*/
export function validateLowerCase(str) {
    const reg = /^[a-z]+$/
    return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
    const reg = /^[A-Z]+$/
    return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
}

/**
 * 判断手机号码是否正确
 */
export function isvalidatemobile(phone) {
    let list = [];
    let result = true;
    let msg = '';
    const isPhone = /^0\d{2,3}-?\d{7,8}$/;
    //增加134 减少|1349[0-9]{7}，增加181,增加145，增加17[678]  
    if (!validatenull(phone)) {
        if (phone.length == 11) {
            if (isPhone.test(phone)) {
                msg = '手机号码格式不正确';
            } else {
                result = false;
            }
        } else {
            msg = '手机号码长度不为11位';
        }
    } else {
        msg = '手机号码不能为空';
    }
    list.push(result);
    list.push(msg);
    return list;
}

/**
 * 判断是否为整数
 */
export function validatenum(num, type) {
    let regName = /[^\d.]/g;
    if (type == 1) {
        if (!regName.test(num)) return false;
    } else if (type == 2) {
        regName = /[^\d]/g;
        if (!regName.test(num)) return false;
    }
    return true;
}

/**
 * 判断是否为空
 */
export function validatenull(val) {
    if (typeof val == 'boolean') {
        return false;
    }
    if (typeof val == 'number') {
        return false;
    }
    if (val instanceof Array) {
        if (val.length == 0) return true;
    } else if (val instanceof Object) {
        if (JSON.stringify(val) === '{}') return true;
    } else {
        return val == 'null' || val == null || val == 'undefined' || val == undefined || val == ''
    }
    return false;
}

export const phoneReg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/