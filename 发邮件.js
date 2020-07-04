const nodemailer = require("nodemailer");

//创建发送邮件的对象
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",//发送方邮箱
    port: 465,//端口号
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'mjt.arthas@foxmail.com', // 发送方邮箱地址
      pass: 'qimlnzolhghtbfbi', // mtp验证码
    },
  });

  // 邮件信息
  let mailObj = {
    from: '"Fred Foo 👻" <mjt.arthas@foxmail.com>', // sender address
    to: "mjt.arthas@foxmail.com", // list of receivers
    subject: "邮箱验证码测试", // Subject line
    text: "您的验证码是12345678，有效期五分钟", // plain text body
    // html: "<b>Hello world?</b>", // html body
  };
transporter.sendMail(mailObj);