const dotenv = require('dotenv');
const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

dotenv.config();

var config = {
	username: process.env.USERNAME,
	password: process.env.PASSWORD,
	host: process.env.HOST,
	port: process.env.PORT,
	localRoot: __dirname + '/../dist',
	remoteRoot: '/www',
	include: ['*.*'],
};

ftpDeploy.deploy(config, function(err) {
	if (err) console.log(err);
	else console.log('finished');
});
