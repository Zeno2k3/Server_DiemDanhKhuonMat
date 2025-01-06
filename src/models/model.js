const mongoose = require('mongoose');

const SinhVienSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mssv: { type: String, required: true , unique: true},
    diemchuyencan: { type: Array },
}, { collection: 'sinhvien' }); 

const SinhVien = mongoose.model('sinhvien', SinhVienSchema);
module.exports = SinhVien;