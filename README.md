## Why
Taro 关闭 pxtransform 时，跨平台样式注释失效，https://github.com/NervJS/taro/issues/11296

## Install
```js
yarn add postcss-crossplatformcomments
```

## Usage
```js
postcss: {
    pxtransform: {
        enable: false,
        config: {}
    },
    'postcss-crossplatformcomments': {
        enable: true,
        config: {
          platform: process.env.TARO_ENV // rn|h5|weapp
        }
    }
     
}
```
