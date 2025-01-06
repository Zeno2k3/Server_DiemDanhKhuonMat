const mongoose = require('mongoose');

const GiangVienSchema = new mongoose.Schema({
    TenGv: { type: String, required: true },
    ElementInternalsmail: { type: String, required: true, unique: true },
    HocVi: {type: String},
    Password: { type: String, required: true },
    MaGV: { type: String, required: true , unique: true},
    ChuNhiem: { type: String},
}, { collection: 'GIANGVIEN' }); 

const GiangVien = mongoose.model('GIANGVIEN', GiangVienSchema);
module.exports = GiangVien;