const mongoose = require('mongoose');

const SinhVien = new mongoose.Schema({
    name: {
        type: String,
        require: true, 
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mssv: {
        type: String,
        required: true,
        unique: true
    },
    photoUrl: {
        type: String
    },
    diemchuyencan: {
        type: mongoose.Schema.Types.Array
    }
})

const SinhVienModel = mongoose.model('sinhvien', SinhVien);

module.exports = SinhVienModel;