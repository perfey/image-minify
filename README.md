# image-minify

图片压缩  
Base on [Imagine@0.4.0](https://github.com/meowtec/Imagine "Imagine@0.4.0")  

## 安装
```shell
npm install image-minify --save-dev
```

## 使用
代码示例

```javascript
const minify = require('image-minify')

// const imgSpawn = minify.pngSpawn(
//   './xxx.png',
//   './xxx.min.png'
// )

// const imgSpawn = minify.pngSpawn(
//   './xxx.png',
//   './xxx.min.webp'
// )

const imgSpawn = minify.jpgSpawn(
  './xxx.jpg',
  './xxx.min.jpg'
)

imgSpawn.stdout.on('data', function (data) {
  console.info('imgSpawn stdout: ', String(data))
})
imgSpawn.stderr.on('data', function (data) {
  console.error('imgSpawn stderr: ', String(data))
})
imgSpawn.on('close', function (code) {
  console.error('imgSpawn code: ', code)
})
```


参数说明

```javascript
pngSpawn(
	input, // 源文件地址
	output, // 生成文件地址
	options // 配置项 对象，默认值 { color: 256 }
)
```

```javascript
jpgSpawn(
	input, // 源文件地址
	output, // 生成文件地址
	options // 配置项 对象，默认值 { quality: 70 }
)
```

```javascript
webpSpawn(
	input, // 源文件地址
	output, // 生成文件地址
	options // 配置项 对象，默认值 { quality: 80 }
)
```
