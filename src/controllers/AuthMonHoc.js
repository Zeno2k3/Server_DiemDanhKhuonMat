const { MonHocModel } = require('../models/MonHocmodel');
const addMonHoc = async (req, res) => {
    console.log('Received Data Mon Hoc:', req.body);
    const { MaMon, TenMon, SoTC, GioHoc, GioKetThuc, GVPhuTrach } = req.body
    try {
        const newMonHoc = new MonHocModel({
            MaMon,
            TenMon,
            SoTC,
            GioHoc,
            GioKetThuc,
            GVPhuTrach,
        });
        await newMonHoc.save();
        res.status(201).json({ message: 'MonHoc added successfully', data: newMonHoc });
    } catch (error) {
        console.error('Error adding MonHoc:', error.message);
        res.status(500).json({ error: error.message });
    }
};
module.exports = { addMonHoc };