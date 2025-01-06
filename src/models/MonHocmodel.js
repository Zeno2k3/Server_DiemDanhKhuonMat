const {default: mongoose} = require('mongoose');


const MonHoc = new mongoose.Schema({
    MaMon: {
        type: String,
        require: true, 
        unique: true
    },
    TenMon: {
        type: String,
        require: true,
    },
    SoTC: {
        type: Number,
        required: true,
    },
    GioHoc: {
        type: String,
        required: true,
    },
    GioKetThuc: {
        type: String,
        required: true,
    },
    GVPhuTrach: {
        type: String,
        required: true,
        unique: true
    },
    HocKy:{
        type: mongoose.Schema.ObjectId,
        ref: "SinhVienModel"
    },
    SinhVienHoc: {
        type: mongoose.Schema.ObjectId,
        ref: "SinhVienModel"
    }
})
const model_MonHoc = mongoose.model('monhoc', MonHoc);
module.exports = {model_MonHoc}