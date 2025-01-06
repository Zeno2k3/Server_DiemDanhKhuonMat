const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const SinhVien = require("../models/model");
const GiangVien = require("../models/giaovienmodel");

const register = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.send("Đăng ký thành công!");
});

const login = asyncHandler(async (req, res) => {
  const { mssv, password } = req.body;

  // Kiểm tra email tồn tại
  const existingStudent = await SinhVien.findOne({ mssv: mssv });
  if (!existingStudent) {
    res.status(403);
    throw new Error("Email không tồn tại!");
  }
  // Kiểm tra mật khẩu
  const isPasswordCorrect = await bcrypt.compare(
    password,
    existingStudent.password
  );
  if (!isPasswordCorrect) {
    res.status(403);
    throw new Error("Mật khẩu không đúng!");
  }

  // Trả về thông tin đăng nhập thành công
  res.status(200).json({
    message: "Đăng nhập thành công!",
    _id: existingStudent._id,
    name: existingStudent.name,
    email: existingStudent.email,
    mssv: existingStudent.mssv,
  });
});

const addSinhVien = asyncHandler(async (req, res) => {
  const { name, email, password, mssv } = req.body;

  if (!name || !email || !password || !mssv) {
    res.status(400);
    throw new Error("Vui lòng điền đầy đủ thông tin!");
  }

  const existingStudent = await SinhVien.findOne({ email });
  if (existingStudent) {
    res.status(400);
    throw new Error("Email đã tồn tại, vui lòng chọn email khác!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newStudent = new SinhVien({
    name,
    email,
    password: hashedPassword, 
    mssv,
    diemchuyencan: [], 
  });

  const savedStudent = await newStudent.save();

  res.status(201).json({
    message: "Thêm sinh viên thành công!",
    _id: savedStudent._id,
    name: savedStudent.name,
    email: savedStudent.email,
    mssv: savedStudent.mssv,
  });
});

const loginGV = asyncHandler(async (req, res) => {
  const { maGV, password } = req.body;

  const existingTeacher = await GiangVien.findOne({ MaGV: maGV });
  if (!existingTeacher) {
    res.status(403);
    throw new Error("Email không tồn tại!");
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    existingTeacher.Password
  );
  if (!isPasswordCorrect) {
    res.status(403);
    throw new Error("Mật khẩu không đúng!");
  }

  res.status(200).json({
    message: "Đăng nhập thành công!",
    _id: existingTeacher._id,
    name: existingTeacher.TenGv,
    email: existingTeacher.ElementInternalsmail,
    maGV: existingTeacher.MaGV,
    hocVi: existingTeacher.HocVi,
  });
});

const addGiangVien = asyncHandler(async (req, res) => {
  const { TenGv, ElementInternalsmail, HocVi, Password, MaGV, ChuNhiem } = req.body;
  if (!TenGv || !ElementInternalsmail || !Password || !MaGV) {
    console.log(TenGv + " "+ ElementInternalsmail + " "+Password +" "+ MaGV);
    res.status(400);
    throw new Error("Vui lòng điền đầy đủ thông tin bắt buộc!");
  }
  const existingGiangVien = await GiangVien.findOne({ ElementInternalsmail });
  if (existingGiangVien) {
    res.status(400);
    throw new Error("Email đã tồn tại, vui lòng chọn email khác!");
  }

  const hashedPassword = await bcrypt.hash(Password, 10);

  const newGiangVien = new GiangVien({
    TenGv,
    ElementInternalsmail,
    HocVi: HocVi || "", 
    Password: hashedPassword, 
    MaGV,
    ChuNhiem: ChuNhiem || "",
  });

  const savedGiangVien = await newGiangVien.save();

  res.status(201).json({
    message: "Thêm giảng viên thành công!",
    _id: savedGiangVien._id,
    TenGv: savedGiangVien.TenGv,
    ElementInternalsmail: savedGiangVien.ElementInternalsmail,
    HocVi: savedGiangVien.HocVi,
    MaGV: savedGiangVien.MaGV,
    ChuNhiem: savedGiangVien.ChuNhiem,
  });
});

module.exports = {
  register,
  login,
  loginGV,
  addSinhVien,
  addGiangVien,
};
