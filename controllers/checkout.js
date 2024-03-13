// const mailer = require('../../mailer')

const Carts = require("../models/Carts");
const Histories = require("../models/History");

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "bacphfx16330@funix.edu.vn",
    pass: "BunDau2210",
  },
});

module.exports.checkout = async (req, res) => {
  try {
    const fullname = req.query.fullname;
    const email = req.query.email;
    const phone = req.query.phone;
    const address = req.query.address;
    const userId = req.query.userId;
    const status = req.query.status || false;

    // get user cat
    const cartsUser = await Carts.find({ userId: userId });

    if (!cartsUser) {
      const error = new Error("Could not find carts of user");
      error.statusCode = 404;
      throw error;
    }

    let total = 0;

    cartsUser.map((value) => {
      return (total += parseInt(value.priceProduct) * parseInt(value.count));
    });

    const htmlHead =
      '<table style="width:50%">' +
      '<tr style="border: 1px solid black;"><th style="border: 1px solid black;">Tên Sản Phẩm</th><th style="border: 1px solid black;">Hình Ảnh</th><th style="border: 1px solid black;">Giá</th><th style="border: 1px solid black;">Số Lượng</th><th style="border: 1px solid black;">Thành Tiền</th>';

    let htmlContent = "";

    for (let i = 0; i < cartsUser.length; i++) {
      htmlContent +=
        "<tr>" +
        '<td style="border: 1px solid black; font-size: 1.2rem; text-align: center;">' +
        cartsUser[i].nameProduct +
        "</td>" +
        '<td style="border: 1px solid black; font-size: 1.2rem; text-align: center;"><img src="' +
        cartsUser[i].img +
        '" width="80" height="80"></td>' +
        '<td style="border: 1px solid black; font-size: 1.2rem; text-align: center;">' +
        new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(cartsUser[i].priceProduct) +
        "</td>" +
        '<td style="border: 1px solid black; font-size: 1.2rem; text-align: center;">' +
        cartsUser[i].count +
        "</td>" +
        '<td style="border: 1px solid black; font-size: 1.2rem; text-align: center;">' +
        new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(
          parseInt(cartsUser[i].priceProduct) * parseInt(cartsUser[i].count)
        ) +
        "</td><tr>";
    }

    const htmlResult =
      "<h1>Xin Chào " +
      fullname +
      "</h1>" +
      "<h3>Phone: " +
      phone +
      "</h3>" +
      "<h3>Address:" +
      address +
      "</h3>" +
      htmlHead +
      htmlContent +
      "<h1>Tổng Thanh Toán: " +
      new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(total) +
      "</br>" +
      "<p>Cảm ơn bạn!</p>";

    // Thực hiện gửi email
    await transporter.sendMail({
      to: email,
      from: "bacphfx16330@funix.edu.vn",
      subject: "Thông tin đơn đặt hàng",
      html: htmlResult,
    });

    // xóa cart và tạo history
    let carts = [];

    cartsUser.map((value) => {
      return carts.push(value);
    });

    const data = {
      userId: userId,
      fullname: fullname,
      phone: phone,
      address: address,
      cart: carts,
      total: total,
      status: status,
    };

    // //Insert data vào Bảng History
    await Histories.insertMany(data);

    // //Xóa những sản phẩm trong Bảng Cart
    await Carts.deleteMany({ userId: userId });

    res.status(200).json({ message: "Checkout successfully!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
