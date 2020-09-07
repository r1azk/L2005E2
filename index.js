app.get("san-pham/:id", async function (reg,res)) {
    let SanPhamID= reg.params.id;
    const sql_text = "select * from DanhMuc;select * from ThuongHieu; "+
        "select * from SanPham where ID="+SanPhamID;
    let data = {
        danhmucs: [],
        thuonghieus: [],
        sanpham: {}
    }
    try{
        const rows = await db.query(sql_text);
        data.danhmucs = rows.recordsets[0];
        data.thuonghieus = rows.recordsets[1];
        data.sanpham = rows.recordsets[2].length>0?rows.recordsets[2][0]:{};
    }catch (e) {

    }
    res.render("Sanpham",data);
}