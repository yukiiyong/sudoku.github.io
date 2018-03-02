module.exports = {
	entry: {
		index: './js/index.js'
	},
	output: {
		filename: "[name].js"
	},
	devtool: "source-map", //跟踪源文件出错的地方
	resolve: {
		extensions: [".js"] //自动解析某些拓展，这是用户在导入时可以忽略扩展名的原因
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [{
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}]
			}
		]
	}
}