//导入express
const express = require('express')
const multer = require('multer') //第三方中间件
//创建服务器的实例对象
const app = express()
app.use(express.static('./uploads/')) //暴露靜態資源，内置中间件

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/')
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '_' + file.originalname)
	}
})
const upload = multer({
	storage,
	// 设置文件大小限制为2MB
	limits: { fileSize: 2000000 }
})
//1.应用级别的中间件
app.use((req, res, next) => {
	res.set('Access-Control-Allow-Origin', '*')
	res.set('Access-Control-Allow-Headers', '*')
	next()
})

// 上传到服务器地址
const BaseURL = 'http://localhost:8001/'
// 上传到服务器的目录
app.post('/upload', upload.single('avatar'), (req, res) => {
	// 处理上传的文件
	const avatarPath = BaseURL + req.file.filename // 上传文件的路径
	res.json({ code: 200, message: '上传头像成功~', avatarPath: avatarPath })
})

// 错误中间件
app.use(function (err, req, res, next) {
	// 捕获身份认证失败的错误
	if (err.name === 'UnauthorizedError') return res.send(new Umsg(1, '身份认证失败！', null))

	// 未知错误...
	res.send(err)
})

//启动服务器
app.listen(8001, () => {
	console.log('app is running at http://127.0.0.1:8001')
})
