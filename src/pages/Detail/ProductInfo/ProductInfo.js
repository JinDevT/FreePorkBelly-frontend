import React, { Component } from 'react';
import './ProductInfo.scss';
import TodayTable from './Table/TodayTable';
import TomorrowTable from './Table/TomorrowTable';
class ProductInfo extends Component {
    render() {
        return (
            <div className="ProductInfo">
                    <section className="section1">
                        <div className="sectionTit">상품 기본정보</div>
                        <div className="sectionInfo">
                            <div className="sectionSubTit">
                                <ul>
                                    <li>상품명: 초신선 돼지 삼겹살</li>
                                    <li>부위 명칭: 삼겹살</li>
                                    <li>보관 방법: -2~10 냉장보관</li>
                                    <li>원재료 및 함량: 돼지고기(국내산) 100%</li>
                                </ul>
                            </div>
                            <div className="sectionSubTit">
                                <ul>
                                    <li>상품명: 초신선 돼지 삼겹살</li>
                                    <li>부위 명칭: 삼겹살</li>
                                    <li>보관 방법: -2~10 냉장보관</li>
                                    <li>원재료 및 함량: 돼지고기(국내산) 100%</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="section2">
                        <div className="sectionTit">배송 안내</div>
                        <div className="wrap">
                            <div className="arrive">오늘 도착</div>
                            <TodayTable />
                            <div className="arrive">내일 도착</div>
                            <TomorrowTable />
                            <div className="fleshInfo">
                                <div className="inner">
                                    <div className="fleshTit">신선할인</div>
                                    <div className="fleshSubTit">
                                        상품을 추가하실 때 마다 10%, 30%, 60%, 100% 비율로 할인됩니다.<br/>
                                        총 5개 이상 담으시면 뱃봉비 없이 상품을 받아보실 수 있습니다.
                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="fleshTit">신선플랜</div>
                                    <div className="fleshSubTit">한 번 배송비(3,500원)에 1달 동안 4번 무료 배송 받으실 수 있는 정육각의 배송 서비스 입니다.</div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section3">
                        <div className="sectionTit">교환/환불 안내</div>
                        <ul>
                            <li>
                                - 신석식품이기 때문에 단순 변심으로 인한 개인적인 사유로는 교환 및 환불이 불가합니다.
                            </li>
                            <li>
                                - 상품의 변질, 이물질 발견, 아이스박스 및 아이스팩이 파손되어 배송될 경우<br/>
                                    고객센터(1800-0658)로 전화주시면 곧바로 교환/환불 해드리겠습니다.
                            </li>
                            <li>
                                - 고객센터 운영 시간은 평일 오전 8시-5시이며, 운영 시간 이외에는 전화 문의가 여렵습니다.<br/>
                                    고객센터 1:1 문의 혹은 카카오톡 플러스친구 @정육각으로 사진과 함께 내용을 적어 보내주시면<br/>
                                    담담자가 확인 후 빠르게 도와드리겠습니다.
                            </li>
                        </ul>
                    </section>
                
            </div>
        );
    }
};

export default ProductInfo;