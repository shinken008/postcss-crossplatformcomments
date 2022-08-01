## Why
Taro 关闭 pxtransform 时，跨平台样式注释失效，https://github.com/NervJS/taro/issues/11296

## Install
```js
yarn add postcss-crossplatformcomments
```

## Usage
### taro build
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

### postcss plugin
```js
postcss([
    // autoprefixer({
    //     overrideBrowserslist: 'iOS >= 10, Chrome >= 49'
    // }),
    crossplatformcomments({ platform: ['h5'] }) // or platform: 'h5'
])
```

## options
- `platform` can be a string or array. If you want config mutiple platforms then `platform` option must be a array like `platform: ['h5', 'weapp']`.