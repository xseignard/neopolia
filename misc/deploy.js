const dotenv = require('dotenv');
const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

dotenv.config();

var config = {
	username: process.env.FTP_USERNAME,
	password: process.env.FTP_PASSWORD,
	host: process.env.FTP_HOST,
	port: process.env.FTP_PORT,
	localRoot: __dirname + '/../dist',
	remoteRoot: '/www',
	include: ['*.*'],
};

ftpDeploy.deploy(config, function(err) {
	if (err) console.log(err);
	else console.log('finished');
});
