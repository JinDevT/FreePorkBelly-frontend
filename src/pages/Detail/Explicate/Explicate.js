import React, { Component } from 'react';
import './Explicate.scss';
class Explicate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            explicate : []
        }
    }
    componentDidMount() {
        fetch("http://10.58.2.176:8000/product/detail/1",  {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        })
        .then(res => res.json())
        .then(res => this.setState({
            explicate :  res.product_detail
        }))
    }

    render() {
        const { explicate } = this.state
        
        let firstMon;
        let secondMon;
        let firstDay;
        let secondDay;
       if(explicate.produced_date) {
            firstMon = explicate.produced_date.substr(5,1);
            secondMon = explicate.produced_date.substr(6,1);
            firstDay = explicate.produced_date.substr(8,1);
            secondDay = explicate.produced_date.substr(9.1);
       }

        return (
            <div className="Explicate">
                <div className="dateBox">
                    <div className="dateTit">
                        <p>{explicate.fresh_comment}</p>
                    </div>
                    <div className="dateSubTit">
                        <div className="SubTit">
                            <div className="dateNum">{firstMon}</div>
                            <div className="dateNum">{secondMon}</div>
                            <div className="dateString">월</div>
                            <div className="dateNum">{firstDay}</div>
                            <div className="dateNum">{secondDay}</div>
                            <div className="dateString">일</div>
                        </div>
                    </div>
                </div>
                {
                    explicate.desc_img_list && explicate.desc_img_list.map((data,idx) => {
                        return (
                            <div className="contImg" key={idx}>
                                <img src={data} alt="cont2Img"/>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Explicate;