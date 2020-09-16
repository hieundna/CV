import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';

function About() {
    const [user, setUser] = useState({
        ho: "", 
        ten: "", 
        tuoi: 0, 
        id_num: "", 
        job: [{
            job_title: "Phát triển Web", 
            company_name: ""
        }]
    });
    const [error, setError] = useState({
        ho: "",
        ten: "",
        id_num: ""
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }
    const updateDateJob = (e, i) => {
        const {name, value} = e.target;
        let {job} = user;
        job[i][name] = value;
        setUser(prev => ({
            ...prev,
            job
        }))
    }
    const addJob = () => {
        setUser(prev => ({
            ...prev,
            job: [...prev.job, {job_title: "Phát triển Web", company_name: ""}]
        }))
    }
    const checkValidate = () => {
        const ho = document.myForm.ho.value;
        const ten = document.myForm.ten.value;
        const idnum = document.myForm.id_num.value;
        let resl = true;
        if(ho.trim()===""){
            setError(prev => ({
                ...prev,
                ho: "*Họ không được để trống"
            }));
            resl = false;
        }else{
            setError(prev => ({
                ...prev,
                ho: ""
            }))
        }
        if(ten.trim() === ""){
            setError(prev => ({
                ...prev,
                ten: "*Tên không được để trống"
            }));
            resl = false;
        }else{
            setError(prev => ({
                ...prev,
                ten: ""
            }));
        }
        if(idnum.length!==9){
            setError(prev => ({
                ...prev,
                id_num: "*CMND phải có 9 chữ số"
            }));
            resl = false;
        }else{
            setError(prev => ({
                ...prev,
                id_num: ""
            }))
        }
        if(resl=false){
            return false;
        }else{
            return true;
        }    
    }
  return (
    <div>
        <Header />
        <div className="main-content">
        <center><h1> [Intern] Simple Webform </h1></center>
        <form name="myForm" onSubmit={(e) => {
            e.preventDefault();
            checkValidate();
            document.getElementById("preData").style.display = 'block';
            document.getElementById("spanCn").style.display = 'inline';
        }}>
            <div className="form-group">
                <label for="ho">Họ <span style={{color: "red"}}>{error.ho}</span></label>
                <input type="text" className="form-control" name="ho" 
                        value={user.ho} onChange={handleChange} placeholder="Nhập họ" />
            </div>
            <div className="form-group">
                <label for="ten">Tên <span style={{color: "red"}}>{error.ten}</span></label>
                <input type="text" className="form-control" name="ten" 
                        value={user.ten} onChange={handleChange} placeholder="Nhập tên" />
            </div>
            <div className="form-row">
            <div className="form-group col-md-5">
                <label for="tuoi">Tuổi</label>
                <input type="number" className="form-control" name="tuoi" 
                        value={user.tuoi} onChange={handleChange} placeholder="Nhập tuổi, tuổi phải lớn hơn 16" />
            </div>
            <div className="form-group col-md-7">
                <label for="id_num">Số CMND <span style={{color: "red"}}>{error.id_num}</span></label>
                <input type="text" className="form-control" name="id_num" maxlength="9" placeholder="Nhập số CMND"
                        value={user.tuoi < 16 ? "0" : user.id_num} onChange={handleChange} />
            </div>
            </div>
            {user.job.map((x,i) => {
                return (
                    <div className="form-row" key={i}>
                        <div className="form-group col-md-5">
                            <label for="job_title">Chức danh</label>
                            <select name="job_title" className="form-control" 
                                value={x.job_title}  onChange={(e) => {
                                    updateDateJob(e, i);
                                }}>
                                <option value="Phát triển Web" selected>Phát triển Web</option>
                                <option value="Phát triển IOS">Phát triển IOS</option>
                                <option value="Phát triển Android">Phát triển Android</option>
                                <option value="Khác">Khác</option>
                            </select>
                        </div>
                        <div className="form-group col-md-7">
                            <label for="company_name">
                                Tên công ty 
                                <span id="spanCn" style={{color: "red"}}>
                                    {x.company_name.trim() === "" && x.job_title !== "Khác" ? " *Không được để trống" :""}
                                </span>
                            </label>
                            <input type="text" className="form-control" name="company_name" 
                                disabled={x.job_title === "Khác" ? true : false}
                                value={x.job_title === "Khác" ? "" : x.company_name} 
                                onChange={(e) => {
                                    updateDateJob(e, i);
                                }} 
                                placeholder={x.job_title === "Khác" ? "" : "Nhập tên công ty"} />
                        </div>
                    </div>
                )}
            )}
            <button type="button" className="btn btn-link"
                    onClick={addJob} >
                    <i className="fa fa-plus-square-o" aria-hidden="true" /> Add job</button>
            <button name="btnSm" type="submit" className="btn btn-primary" disabled={user.tuoi < 16 ? true : false}>Submit</button>
        </form>
        <pre id="preData" style={{display: "none"}}> 
            {JSON.stringify(user, null, 2)}
        </pre>
        </div>
        <Footer />
    </div>
  );
}

export default About;
