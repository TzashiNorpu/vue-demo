import {sm2} from 'sm-crypto';

// 加密给服务器的请求数据
const serverPublicKey = '3059301306072a8648ce3d020106082a811ccf5501822d03420004237b2d345c5ca6df0db3651cd8b90e1063e367fd6b01b11de6611ccae6a8bd5bda482ef5acd7d3d1612b516584bb0ec7d195e15520c7164eb5efa17083fd5c02';

// 解密服务器返回的响应
const clientPrivateKey = '308193020100301306072a8648ce3d020106082a811ccf5501822d047930770201010420ba8b2f2f21ef108e8660970ab8d89375258b582a470f8df297df3b6d94b5563fa00a06082a811ccf5501822da144034200042de95df1b596d0ea6468035af52a7106ff6ddef69d56fb05cfb4b7e6c90919cb0189075dfe059d7e9d36a57f1897fab1cf4d6a4d640abeeb8be22a2c854a8cd7';


export function decrypt(data) {
  return sm2.doDecrypt(data, serverPublicKey);
}


export function encrypt(data) {
  return sm2.doEncrypt(data, clientPrivateKey);
}
