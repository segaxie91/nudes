import { AsyncStorage } from 'react-native';

export function setStorageAsync(key, value) {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(key, value, err => {
      if (err) {
        console.log(`设置${key} 失败${err}`);
        reject(`设置${key} 失败${err}`)
      } else {
        console.log(`设置${key} 成功`);
        resolve(true);
      }
    });
  });
}

export function getStorageAsync(key) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key, (err, result) => {
      if (err) {
        console.log(`读取${key} 失败${err}`);
        reject(`读取${key} 失败${err}`)
      } else {
        console.log(`读取${key} 成功`);
        resolve(result);
      }
    });
  });
}

export default {
  setStorageAsync,
  getStorageAsync,
}