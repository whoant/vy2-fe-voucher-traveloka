import React from 'react'
import { useState } from "react";
const DataCreateGift = () => {
    const [nameGift, setGift] = useState("");
    const [money, setMoney] = useState("");
    const [Percent, setPercent] = useState("");
    const [Point, setPoint] = useState("");
    const [Type, setType] = useState("");
    const [startDay, setStartDay] = useState("");
    const [startMonth, setStartMonth] = useState("");
    const [startYear, setStartYear] = useState("");
    const [endDay, setEndDay] = useState("");
    const [endMonth, setEndMonth] = useState("");
    const [endYear, setEndYear] = useState("");
    const hanleTypeChange = (e) => {
        setType(e.target.value);
    };
    const handleSDayChange = (e) => {
        setStartDay(e.target.value);
    };
    const handleSMonthChange = (e) => {
        setStartMonth(e.target.value);
    };
    const handleSYearChange = (e) => {
        setStartYear(e.target.value);
    };
    const handleEDayChange = (e) => {
        setEndDay(e.target.value);
    };
    const handleEMonthChange = (e) => {
        setEndMonth(e.target.value);
    };
    const handleEYearChange = (e) => {
        setEndYear(e.target.value);
    };
    const handePointChange = (e) => {
        setPoint(e.target.value);
    };
    const handlePercentMoneyChange = (e) => {
        setPercent(e.target.value);
    };

    const handleNameGiftChange = (e) => {
        setGift(e.target.value);
    };

    const handleMoneyChange = (e) => {
        setMoney(e.target.value);
    };

    const handleCreate = () => {
        if (nameGift === "" || Type === "" || money === "" || Percent === "" || Point === "" || startDay === "" || startMonth === "" || startYear === "" || endDay === "" || endMonth === "" || endYear === "") {
            alert("null object");
        } else {
            console.log('{  NameGift:' + nameGift, 'Type:' + Type, 'Money:' + money, 'Percent:' + Percent, 'Point:' + Point, 'SDay:' + startDay, 'SMonth:' + startMonth, 'Syear:' + startYear, 'EDay:' + endDay, 'EMonth:' + endMonth, 'EYear:' + endYear);
        }
    };
    return (
        <form> <div className="card-body">

            <div className="form-group">
                <label>Tên gift card
                    <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="Nhập tên voucher" value={nameGift} onChange={handleNameGiftChange} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleSelect1">Chọn loại
                    <span className="text-danger">*</span></label>
                <select className="form-control" id="exampleSelect1" value={Type} onChange={hanleTypeChange}>
                    <option value="Chuyenbay" onChange={hanleTypeChange}>Chuyến bay</option>
                    <option value={"Khachsan"} onChange={hanleTypeChange}>Khách sạn</option>
                    <option value={"DuaDon"} onChange={hanleTypeChange}>Đưa đón sân bay</option>
                    <option value={"BietThu"} onChange={hanleTypeChange}>Biệt thự và căn hộ</option>
                    <option value={"TraiNghiem"} onChange={hanleTypeChange}>Tour du lịch(Trải nghiệm)</option>
                    <option value={"Thuexe"} onChange={hanleTypeChange}>Thuê xe</option>
                    <option value={"NhaHan"} onChange={hanleTypeChange}>Nhà hàng</option>
                </select>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Số tiền tối đa được giảm</label>
                        <div className="input-group input-group-solid">
                            <div className="input-group-prepend">
                                <span className="input-group-text">đ</span>
                            </div>
                            <input type="text" className="form-control form-control-solid" placeholder="Nhập số tiền giảm" value={money} onChange={handleMoneyChange} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Số phần trăm được giảm</label>
                        <div className="input-group input-group-solid">
                            <div className="input-group-prepend">
                                <span className="input-group-text">%</span>
                            </div>
                            <input type="text" className="form-control form-control-solid" placeholder="Nhập số phần trăm giảm" value={Percent} onChange={handlePercentMoneyChange} />
                        </div>
                    </div>
                </div><div className="col-md-6">
                    <div className="form-group">
                        <label>Điểm để đổi gift card</label>
                        <div className="input-group input-group-solid">
                            <div className="input-group-prepend">
                                <span className="input-group-text">P</span>
                            </div>
                            <input type="text" className="form-control form-control-solid" placeholder="Nhập số điểm" value={Point} onChange={handePointChange} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-md-4">
                    <label>* Ngày bẳt đầu:</label>
                    <select className="form-control" name="billing_card_exp_month" value={startDay} onChange={handleSDayChange}>
                        <option value="">Chọn</option>
                        <option value="01" >01</option>
                        <option value="02" >02</option>
                        <option value="03" >03</option>
                        <option value="04" >04</option>
                        <option value="05" >05</option>
                        <option value="06" >06</option>
                        <option value="07" >07</option>
                        <option value="08" >08</option>
                        <option value="09" >09</option>
                        <option value="10" >10</option>
                        <option value="11" >11</option>
                        <option value="12" >12</option>
                        <option value="13" >13</option>
                        <option value="14" >14</option>
                        <option value="15" >15</option>
                        <option value="16" >16</option>
                        <option value="17" >17</option>
                        <option value="18" >18</option>
                        <option value="19" >19</option>
                        <option value="20" >20</option>
                        <option value="21" >21</option>
                        <option value="22" >22</option>
                        <option value="23" >23</option>
                        <option value="24" >24</option>
                        <option value="25" >25</option>
                        <option value="26" >26</option>
                        <option value="27" >27</option>
                        <option value="28" >28</option>
                        <option value="29" >29</option>
                        <option value="30" >30</option>
                        <option value="31" >31</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label>* Tháng bắt đầu:</label>
                    <select className="form-control" name="billing_card_exp_month" value={startMonth} onChange={handleSMonthChange}>
                        <option value="">Chọn</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label>* Năm bắt đầu:</label>
                    <select className="form-control" name="billing_card_exp_year" value={startYear} onChange={handleSYearChange}>
                        <option value="">Chọn</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                </div>

            </div>
            <div className="form-group row">
                <div className="col-md-4">
                    <label>* Ngày hết hạn:</label>
                    <select className="form-control" name="billing_card_exp_month" value={endDay} onChange={handleEDayChange}>
                        <option value="">Chọn</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label>* Tháng hết hạn:</label>
                    <select className="form-control" name="billing_card_exp_month" value={endMonth} onChange={handleEMonthChange}>
                        <option value="">Chọn</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label>* Năm hết hạn:</label>
                    <select className="form-control" name="billing_card_exp_year" value={endYear} onChange={handleEYearChange}>
                        <option value="">Chọn</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                </div>

            </div>
        </div>
            <div className="card-footer">
                <button type="reset" className="btn btn-primary mr-2" onClick={handleCreate}>Tạo Gift Card</button>
                <button type="reset" className="btn btn-secondary">Hủy</button>
            </div>
        </form>
    )
}

export default DataCreateGift