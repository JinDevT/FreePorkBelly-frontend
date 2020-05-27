import React, { Component } from 'react';
import './Explicate.scss';

class Explicate extends Component {
    render() {
        return (
            <div className="Explicate"> 
                <div className="cont2Img">
                    <img src="" alt="cont2Img"/>
                </div>
                <div className="dateBox">
                    <div className="dateTit">
                        <p>수요일에 받으실 삼겹살의 도축일을 확인하세요!</p>
                    </div>
                    <div className="dateSubTit">
                        <div className="SubTit">
                            <div className="dateNum">0</div>
                            <div className="dateNum">5</div>
                            <div className="dateString">월</div>
                            <div className="dateNum">2</div>
                            <div className="dateNum">2</div>
                            <div className="dateString">일</div>
                        </div>
                    </div>
                </div>
                <div className="contBox cont3Img">
                    <img src="" alt="cont3Img" />
                </div>
                <div className="contBox cont4Img">
                    <img src="" alt="cont4Img" />
                </div>
            </div>
        );
    }
}

export default Explicate;