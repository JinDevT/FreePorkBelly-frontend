import React, { Component } from 'react';
import './AgreeTerms.scss';

class AgreeTerms extends Component {


    render() {
        return (
            <div className="Register">                
                <div className="TermsCondition"> {/* 교환할 부분 클래스 시작 */}
                    <div className="topImg">
                        <img id="note" src="https://www.jeongyookgak.com/assets/icon_3.svg"></img>
                        <div id="letter1">01.약관동의</div>
                        <img id="bigger" src="https://www.jeongyookgak.com/assets/icon_6.svg"></img>
                        <img id="pen" src="https://www.jeongyookgak.com/assets/icon_2.svg"></img>
                        <div id="letter2">02.정보입력</div>
                    </div>
                    <div className="main1">
                        <div className="agreeTerms">
                            <div className="agreeService">
                                <div>
                                    <input 
                                        className="checkBox1" 
                                        type="checkBox" 
                                        id="cb1" 
                                        onClick={this.handleCheckBox1}>
                                    </input>
                                </div>
                                <div>
                                &nbsp;&nbsp;정육각 서비스 약관 동의
                                </div>
                            </div>
                            <div className="termsBox">
                                <div className="implDate">시행일자: 2019년 11월 18일</div>
                                <div className="detailTerms">
                                    [이용약관]

제 1장 총 칙

제1조(목적)
이 약관은 주식회사 정육각 회사(전자거래 사업자)가 운영하는 정육각 사이버 몰(이하 "몰"이라 한다)에서 제공하는 전자상거래 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 사이버몰과 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
※ 「PC통신, 스마트폰 앱, 무선등을 이용하는 전자거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다」

제2조(정의)
① "몰"이란 주식회사 정육각 회사가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 또는 용역을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.
② "이용자"란 "몰"에 접속하여 이 약관에 따라 "몰"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
③ “회원”이라 함은 "몰"에 회원등록을 한 자로서, "몰"의 정보를 지속적으로 제공받으며, "몰"이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
④ “비회원”이라 함은 회원에 가입하지 않고 "몰"이 제공하는 서비스를 이용하는 자를 말합니다.

제3조(약관등의 명시와 설명 및 개정)
① "몰"은 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호·모사전송번호·전자우편주소, 사업자등록번호, 통신판매업신고번호, 개인정보관리 책임자 등을 이용자가 쉽게 알 수 있도록 "몰"의 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.
② "몰"은 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회·배송책임·환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다.
③ "몰"은 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률, 전자문서 및전자거래기본법, 전자금융거래법, 전자서명법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 방문판매 등에 관한 법률, 소비자기본법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
④ "몰"이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 "몰“은 개정전 내용과 개정후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.
⑤ "몰"이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제4항에 의한 개정약관의 공지기간내에 "몰"에 송신하여 "몰"의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.
⑥ 회사는 제공하는 서비스 내의 개별 서비스에 대한 별도의 약관 또는 이용조건을 둘 수 있으며 개별 서비스에서 별도로 적용되는 약관에 대한 동의는 회원이 개별 서비스를 최초로 이용할 경우 별도의 동의절차를 거치게 됩니다. 이 경우 개별 서비스에 대한 이용약관 등이 이 약관에 우선합니다.
⑦ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자보호지침 및 관계법령 또는 상관례에 따릅니다.


제 2장 서비스 제공 및 이용

제4조(서비스의 제공 및 변경)
① "몰"은 다음과 같은 업무를 수행합니다.
1. 재화 또는 용역에 대한 정보 제공 및 구매계약의 체결
2. 구매계약이 체결된 재화 또는 용역의 배송
3. 기타 "몰"이 정하는 업무
② "몰"은 재화 또는 용역의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화 또는 용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 재화 또는 용역의 내용 및 제공일자를 명시하여 현재의 재화 또는 용역의 내용을 게시한 곳에 즉시 공지합니다.
③ "몰"이 제공하기로 이용자와 계약을 체결한 서비스의 내용을 재화등의 품절 또는 기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를 이용자에게 통지 가능한 방법으로 즉시 통지합니다.
④ 전항의 경우 "몰"은 이로 인하여 이용자가 입은 손해를 배상합니다. 다만, "몰"이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.

제5조(서비스의 중단)
① "몰"은 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
② "몰"은 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, "몰"이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.
③ 사업종목의 전환, 사업의 포기, 업체간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우에는 "몰"은 제8조에 정한 방법으로 이용자에게 통지하고 당초 "몰"에서 제시한 조건에 따라 이용자에게 보상합니다. 다만, "몰"이 보상기준 등을 고지하지 아니한 경우에는 이용자에게 "몰"에서 통용되는 통화가치에 상응하는 현물 또는 현금으로 지급합니다.

제6조(회원가입)
① 이용자는 "몰"이 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.
② "몰"은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각호에 해당하지 않는 한 회원으로 등록합니다.
1. 가입신청자가 이 약관 제7조 2항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조 2항에 의한 회원자격 상실 후 3년이 경과한 자로서 "몰"의 회원 재가입 승낙을 얻은 경우에는 예외로 한다.
2. 등록 내용에 허위, 기재누락, 오기가 있는 경우
3. 회원의 요청에 의하여 탈퇴한 때로부터 6개월이 지나지 아니한 경우
4. 기타 회원으로 등록하는 것이 "몰"의 기술상 현저히 지장이 있다고 판단되는 경우
5. 가입신청자가 만 14세 미만인 경우
③ 회원가입계약의 성립시기는 "몰"의 승낙이 회원에게 도달한 시점으로 합니다.
④ 회원은 회원가입 시 등록한 사항에 변경이 있는 경우, 상당한 기간 이내에 “몰”에 대하여 회원정보 수정 등의 방법으로 그 변경사항을 알려야 합니다. 회원정보 수정을 하지 않음으로써 발생하는 회원의 손해에 대하여 회사는 아무런 책임을 지지 않습니다.

제7조(회원 탈퇴 및 자격 상실 등)
① 회원은 "몰"에 언제든지 탈퇴를 요청할 수 있으며 "몰"은 회원의 요청을 받았을 경우 “몰”이 안내한 방법에 따라 신속하게 회원탈퇴를 처리합니다. 회원탈퇴 시 회원자격이 상실되며, 회사가 제공하는 각종 할인쿠폰, 이벤트 혜택 등이 소멸됩니다. 단, 회원탈퇴 시 소진되지 않은 적립금 등이 있는 경우 회원의 의사에 따라 적립금 등에 대한 권리를 포기한 것으로 간주하여, 탈퇴와 동시에 회원의 적립금 등은 전부 소멸됩니다.
② 회원이 다음 각호의 사유에 해당하는 경우, "몰"은 회원자격을 제한 또는 상실시킬 수 있으며, 회원 자격을 상실할 경우 적립금 등 회원으로서의 모든 혜택은 전부 소멸됩니다.
1. 가입 신청 시에 타인의 정보 또는 허위의 정보를 입력하거나 가입 내용에 정보의 누락, 오기가 있는 경우
2. "몰"을 이용하여 구입한 재화등의 대금, 기타 "몰"이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우
3. 다른 사람의 "몰" 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우
4. "몰"을 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우
5. 기타 다음과 같은 행위 등으로 “몰”의 건전한 운영을 해하거나 “몰”의 업무를 방해하는 경우
가. “몰”의 운영과 관련하여 근거 없는 사실 또는 허위의 사실을 적시하거나 유포하여 “몰”의 명예를 실추시키거나 “몰”의 신뢰성을 해하는 경우
나. “몰”의 이용과정에서 직원에게 폭언, 협박 또는 음란한 언행, 이에 준하는 행동 등으로 “몰”의 운영을 방해하는 경우
다. “몰”을 통하여 재화 등을 구매한 후 정당한 이유 없이 상습 또는 반복적으로 취소 또는 반품하여 “몰”의 업무를 방해하는 경우
라. “몰”을 통해 구입한 상품 또는 용역에 특별한 하자가 없는데도 불구하고 일부 사용 후 상습적인 취소, 전부 또는 일부 반품, 이의 제기 등으로 “몰”의 업무를 방해하는 경우
마. “몰”이 본인 확인 절차를 실시할 경우 본인 확인이 되지 않거나 본인이 아님이 확인된 경우
바. 이미 가입된 “몰”의 회원의 개인정보(이름, 전화번호, 주소 등)와 동일한 경우
사. 부정한 용도 또는 영리를 추구할 목적으로 서비스를 이용하는 경우
아. 동일/유사한 아이디, 전화번호, 주소 등의 회원정보를 통하여 부정한 사용을 하는 것으로 의심되는 경우
자. “몰”로부터 서비스 제한, 회원 자격 정지 조치 등을 받은 회원이 그 조치기간 중에 이용계약을 임의해지하고 재이용신청을 하는 경우
차. 무단으로 “몰”의 재화, 용역, 정보를 수집하거나 외부에 제출, 게시, 이용하여 “몰”의 저작권, 상표권 등 지식 재산권을 침해하는 경우
카. 이름, 주소, 전화번호 등 회원정보를 종합하여 실질적으로 동일인으로 인정되는 기존 회원이 다른 ID로 회원가입 또는 중복가입한 경우
③ 회원이 제2항에 해당하는 경우, “몰”은 회원에게 제공한 혜택(적립금, 쿠폰 등)을 회수하거나 서비스 이용 제한(배송 취소 등)의 조치를 취할 수 있습니다.
④ 재판매 목적 등으로 “몰”에서 재화 등을 중복 구매하는 등 “몰”의 거래질서를 방해하는 경우 “몰”은 당해 회원의 자격을 상실시킬 수 있습니다.
⑤ "몰"이 회원 자격을 제한·정지 시킨 후, 동일한 행위가 2회이상 반복되거나 30일이내에 그 사유가 시정되지 아니하는 경우 "몰"은 회원자격을 상실시킬 수 있습니다.
⑥ "몰"이 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소전에 최소한 30일 이상의 기간을 정하여 소명할 기회를 부여합니다.

제8조(회원에 대한 통지)
① "몰"이 회원에 대한 통지를 하는 경우, 회원이 "몰"과 미리 약정하여 지정한 전자우편(또는 우편), 문자, 전화, 팩스 등의 방법으로 할 수 있습니다.
② "몰"은 불특정다수 회원에 대한 통지의 경우 1주일이상 "몰" 게시판에 게시함으로서 개별 통지에 갈음할 수 있습니다. 다만, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 개별통지를 합니다.

제9조(구매신청)
"몰"이용자는 "몰"상에서 다음 또는 이와 유사한 방법에 의하여 구매를 신청하며, "몰"은 이용자가 구매신청을 함에 있어서 다음의 각 내용을 알기 쉽게 제공하여야 합니다.
1. 재화등의 검색 및 선택
2. 수취인의 성명, 주소, 휴대폰번호 등의 입력
3. 약관내용, 청약철회권이 제한되는 서비스, 배송료 등의 비용부담과 관련한 내용에 대한 확인
4. 이 약관에 동의하고 위 3.호의 사항을 확인하거나 거부하는 표시(예, 마우스 클릭)
5. 재화등의 구매신청 및 이에 관한 확인 또는 "몰"의 확인에 대한 동의
6. 결제방법의 선택

제10조(계약의 성립)
① "몰"은 제9조와 같은 구매신청에 대하여 다음 각호에 해당하면 승낙하지 않을 수 있습니다. 다만, 미성년자와 계약을 체결하는 경우에는 법정대리인의 동의를 얻지 못하면 미성년자 본인 또는 법정대리인이 계약을 취소할 수 있다는 내용을 고지하여야 합니다.
1. 신청 내용에 허위, 기재누락, 오기가 있는 경우
2. 제7조에 따라 회원 자격이 제한 또는 상실된 회원이 구매신청 한 경우
3. 구매신청 회원이 재판매의 목적으로 상품 등을 중복 구매하는 등 “몰”의 거래질서를 방해한 경우
4. 기타 구매신청에 승낙하는 것이 "몰" 기술상 현저히 지장이 있다고 판단하는 경우
② "몰"의 승낙이 제14조제1항의 수신확인통지형태로 이용자에게 도달한 시점에 계약이 성립한 것으로 봅니다.
③ "몰"의 승낙의 의사표시에는 이용자의 구매 신청에 대한 확인 및 판매가능 여부, 구매신청의 정정 취소등에 관한 정보 등을 포함하여야 합니다.

제11조(지급방법)
① "몰"에서 구매한 재화 또는 용역에 대한 대금지급방법은 다음 각호의 방법 중 가용한 방법으로 할 수 있습니다. 단, "몰"은 이용자의 지급방법에 대하여 재화 등의 대금에 어떠한 명목의 수수료도 추가하여 징수할 수 없습니다.
1. 폰뱅킹, 인터넷뱅킹, 메일 뱅킹 등의 각종 계좌이체
2. 선불카드, 직불카드, 신용카드 등의 각종 카드 결제
3. 온라인무통장입금
4. 전자화폐에 의한 결제
5. 수령 시 대금지급
6. 적립금 등 "몰"이 지급한 포인트에 의한 결제
7. "몰"과 계약을 맺었거나 "몰"이 인정한 상품권에 의한 결제
8. 기타 전자적 지급 방법에 의한 대금 지급 등
② 이용자가 구매 대금의 결제와 관련하여 입력한 정보 및 그 정보와 관련하여 발생한 책임과 불이익은 전적으로 이용자가 부담합니다.

제12조(적립금)
① “몰”은 회원의 구매활동, 이벤트 참여 등에 따라 회원에게 일정한 적립금을 부여할 수 있습니다.
② 회원은 적립금을 “몰”에서 상품 등의 구매 시 결제 수단으로 사용할 수 있으며, “몰”은 적립금의 적립기준, 사용방법, 사용기간 및 제한에 대한 사항을 사이트에 별도로 게시하거나 통지합니다. 적립금의 사용조건에 관한 사항은 “몰”의 정책에 따라 달라질 수 있습니다.
③ 무통장 추가금에 대한 환급 이외의 경우에 지급된 적립금은 현금으로 환급될 수 없습니다.
④ 회원은 적립금을 제3자에게 또는 다른 아이디로 양도할 수 없으며, 유상으로 거래하거나 현금으로 전환할 수 없습니다.
⑤ “몰”은 회원이 “몰”이 승인하지 않은 방법 또는 허위 정보 제공 등의 부정한 방법으로 적립금을 획득하거나 부정한 목적이나 용도로 적립금을 사용하는 경우 적립금의 사용을 제한하거나 적립금을 사용한 구매신청을 취소하거나 회원 자격을 정지할 수 있습니다.
⑥ 회원 탈퇴 시 미사용한 적립금은 즉시 소멸되며, 탈퇴 후 재가입하더라도 소멸된 적립금은 복구되지 아니합니다.

제13조(할인쿠폰)
① 할인쿠폰은 회원에게 무상으로 발행되는 것으로 “몰”은 회원이 할인쿠폰을 사이트에서 상품 구매 시 적용할 수 있도록 그 사용대상, 사용방법, 사용기간, 구매가 할인액 등을 정할 수 있습니다. 할인쿠폰의 종류 또는 내용은 “몰”의 정책에 따라 달라질 수 있습니다.
② “몰”은 할인쿠폰의 사용대상, 사용방법, 사용기간, 할인금액 등을 사이트에 별도로 표시하거나 통지합니다.
③ 할인쿠폰은 현금으로 환급될 수 없으며, 할인쿠폰의 사용기간이 만료되거나 구매 취소 시 또는 이용계약이 종료되면 소멸됩니다.
④ 회원은 할인쿠폰을 제3자에게 또는 다른 아이디로 양도할 수 없으며, 유상으로 거래하거나 현금으로 전환할 수 없습니다.
⑤ “몰”은 회원이 “몰”이 승인하지 않은 방법으로 할인쿠폰을 획득하거나 부정한 목적이나 용도로 할인쿠폰을 사용하는 경우 할인쿠폰의 사용을 제한하거나 할인쿠폰을 사용한 구매신청을 취소하거나 회원 자격을 정지할 수 있습니다.
⑥ 회원 탈퇴 시 “몰”로부터 발급받은 할인쿠폰 중 미사용한 할인쿠폰은 즉시 소멸되며, 탈퇴 후 재가입하더라도 소멸된 할인쿠폰은 복구되지 아니합니다.
⑦ “몰”은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제50조를 준수하여 광고성 정보 제공이 가능한 회원에게 할인쿠폰 발급 등에 관한 사항을 전자적 전송매체를 이용하여 안내할 수 있습니다.

제14조(수신확인통지·구매신청 변경 및 취소)
① "몰"은 이용자의 구매신청이 있는 경우 이용자에게 수신확인통지를 합니다.
② 수신확인통지를 받은 이용자는 의사표시의 불일치 등이 있는 경우에는 수신확인통지를 받은 후 즉시 구매신청 변경 및 취소를 요청할 수 있고 "몰"은 배송전에 이용자의 요청이 있는 경우에는 지체없이 그 요청에 따라 처리하여야 합니다. 다만 이미 대금을 지불한 경우에는 제17조의 청약철회 등에 관한 규정에 따릅니다.

제15조(재화등의 공급)
① "몰"은 이용자와 재화등의 공급시기에 관하여 별도의 약정이 없는 이상, 이용자가 청약을 한 날부터 7일 이내에 재화 등을 배송할 수 있도록 주문제작, 포장 등 기타의 필요한 조치를 취합니다. 다만, "몰"이 이미 재화 등의 대금의 전부 또는 일부를 받은 경우에는 대금의 전부 또는 일부를 받은 날부터 3영업일 이내에 조치를 취합니다. 이때 "몰"은 이용자가 재화등의 공급 절차 및 진행 사항을 확인할 수 있도록 적절한 조치를 합니다.
② "몰"은 이용자가 구매한 재화에 대해 배송수단, 수단별 배송비용 부담자, 수단별 배송기간 등을 명시합니다. 만약 "몰"이 약정 배송기간을 초과한 경우에는 그로 인한 이용자의 손해를 배상하여야 합니다. 다만 "몰"이 고의·과실이 없음을 입증한 경우에는 그러하지 아니합니다.
③ “몰”과 이용자 간에 재화등의 인도 또는 제공시기에 관하여 별도의 약정이 있는 경우에는 해당 약정이 이 약관에 우선합니다.

제16조(환급)
"몰"은 이용자가 구매신청한 재화등이 품절 등의 사유로 인도 또는 제공을 할 수 없을 때에는 지체없이 그 사유를 이용자에게 통지하고 사전에 재화 등의 대금을 받은 경우에는 대금을 받은 날부터 3영업일 이내에 환급하거나 환급에 필요한 조치를 취합니다.

제17조(청약철회 등)
① “몰”과 재화등의 구매에 관한 계약을 체결한 이용자는 [전자상거래 등에서의 소비자보호에 관한 법률] 제13조 제2항에 따른 계약내용에 관한 서면을 받은 날(그 서면을 받은 때보다 재화 등의 공급이 늦게 이루어진 경우에는 재화 등을 공급하거나 재화 등의 공급이 시작된 날을 말합니다)부터 7일 이내에는 청약의 철회를 할 수 있습니다. 다만, 청약철회에 관하여 [전자상거래 등에서의 소비자보호에 관한 법률]에 달리 정함이 있는 경우에는 동 법 규정에 따릅니다.
② 이용자는 재화등을 배송 받은 경우 다음 각호에 해당하는 경우에는 반품 및 교환을 할 수 없습니다.
1. 이용자에게 책임 있는 사유로 재화 등이 멸실 또는 훼손된 경우(다만, 재화 등의 내용을 확인하기 위하여 포장 등을 훼손한 경우에는 청약철회를 할 수 있습니다)
2. 이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가 현저히 감소한 경우
3. 시간의 경과에 의하여 재판매가 곤란할 정도로 재화등의 가치가 현저히 감소한 경우
③ 제2항제2호의 경우에 "몰"이 사전에 청약철회 등이 제한되는 사실을 소비자가 쉽게 알 수 있는 곳에 명기하거나 시용상품을 제공하는 등의 조치를 하지 않았다면 이용자의 청약철회 등이 제한되지 않습니다.
④ 이용자는 제1항 및 제2항의 규정에 불구하고 재화등의 내용이 표시·광고 내용과 다르거나 계약내용과 다르게 이행된 때에는 당해 재화등을 공급받은 날부터 3월이내, 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 청약철회 등을 할 수 있습니다.

제18조(청약철회 등의 효과)
① "몰"은 이용자로부터 재화 등을 반환 받은 경우 3영업일 이내에 이미 지급받은 재화등의 대금을 환급합니다. 이 경우 "몰"이 이용자에게 재화등의 환급을 지연한 때에는 그 지연기간에 대하여 전자상거래 등에서의 소비자보호에 관한 법률 시행령 제21조2에서 정하는 지연이자율을 곱하여 산정한 지연이자를 지급합니다.
② "몰"은 위 대금을 환급함에 있어서 이용자가 신용카드 또는 전자화폐 등의 결제수단으로 재화등의 대금을 지급한 때에는 지체없이 당해 결제수단을 제공한 사업자로 하여금 재화등의 대금의 청구를 정지 또는 취소하도록 요청합니다.
③ 청약철회등의 경우 공급받은 재화등의 반환에 필요한 비용은 이용자가 부담합니다. "몰"은 이용자에게 청약철회등을 이유로 위약금 또는 손해배상을 청구하지 않습니다. 다만 재화등의 내용이 표시·광고 내용과 다르거나 계약내용과 다르게 이행되어 청약철회등을 하는 경우 재화등의 반환에 필요한 비용은 "몰"이 부담합니다.
④ 이용자가 재화등을 제공받을 때 발송비를 부담한 경우에 "몰"은 청약철회시 그 비용을 누가 부담하는지를 이용자가 알기 쉽도록 명확하게 표시합니다.

제19조(카카오톡 상담톡 시행에 관한 내용)
"몰"은 상담업무를 카카오톡 상담톡으로 진행하며, 만약 카카오톡을 통해 안내되는 상담 내용을 Wi-Fi 나 PC가 아닌 이동통신망으로 이용할 경우, 데이터 요금이 발생할 수 있습니다. 카카오톡을 통해 상담을 원치 않으실 경우 고객센터, 게시판 문의를 이용해 주시기 바랍니다.

제20조(개인정보보호)
① “몰”은 이용자의 개인정보 수집 시 서비스제공을 위하여 필요한 범위에서 최소한의 개인정보를 수집합니다.
② “몰”은 회원가입시 구매계약이행에 필요한 정보를 미리 수집하지 않습니다. 다만, 관련 법령상 의무이행을 위하여 구매계약 이전에 본인확인이 필요한 경우로서 최소한의 특정 개인정보를 수집하는 경우에는 그러하지 아니합니다.
③ “몰”은 이용자의 개인정보를 수집/이용하는 때에는 당해 이용자에게 그 목적을 고지하고 동의를 받습니다.
④ “몰”은 수집된 개인정보를 목적 외의 용도로 이용할 수 없으며, 새로운 이용목적이 발생한 경우 또는 제3자에게 제공하는 경우에는 이용/제공단계에서 당해 이용자에게 그 목적을 고지하고 동의를 받습니다. 다만, 관련 법령에 달리 정함이 있는 경우에는 예외로 합니다.
⑤ “몰”이 제3항과 제4항에 의해 이용자의 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원(소속, 성명 및 전화번호, 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받은자, 제공목적 및 제공할 정보의 내용)등 [정보통신망 이용촉진 및 정보보호 등에 관한 법률] 제22조제2항이 규정한 사항을 미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를 철회할 수 있습니다.
⑥ 이용자는 언제든지 “몰”이 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 “몰”은 이에 대해 지체 없이 필요한 조치를 취할 의무를 집니다. 이용자가 오류의 정정을 요구한 경우에는 “몰”은 그 오류를 정정할 때까지 당해 개인정보를 이용하지 않습니다.
⑦ “몰”은 개인정보 보호를 위하여 이용자의 개인정보를 취급하는 자를 최소한으로 제한하여야 하며 신용카드, 은행계좌 등을 포함한 이용자의 개인정보의 분실, 도난, 유출, 동의 없는 제3자 제공, 변조 등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다.
⑧ “몰” 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체 없이 파기합니다.
⑨ “몰”은 개인정보의 수집/이용/제공에 관한 동의란을 미리 선택한 것으로 설정해두지 않습니다. 또한 개인정보의 수집/이용/제공에 관한 이용자의 동의거절 시 제한되는 서비스를 구체적으로 명시하고, 필수수집항목이 아닌 개인정보의 수집/이용/제공에 관한 이용자의 동의 거절을 이유로 회원가입 등 서비스 제공을 제한하거나 거절하지 않습니다.

제21조("몰"의 의무)
① "몰"은 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 재화·용역을 제공하는데 최선을 다하여야 합니다.
② "몰"은 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다.
③ "몰"이 상품이나 용역에 대하여 「표시·광고의 공정화에 관한 법률」 제3조 소정의 부당한 표시·광고행위를 함으로써 이용자가 손해를 입은 때에는 이를 배상할 책임을 집니다.
④ "몰"은 이용자가 원하지 않는 영리목적의 광고성 전자우편을 발송하지 않습니다.

제22조(회원의 ID 및 비밀번호에 대한 의무)
① 제20조의 경우를 제외한 ID와 비밀번호에 관한 관리책임은 회원에게 있습니다.
② 회원은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는 안됩니다.
③ 회원이 자신의 ID 및 비밀번호를 도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로 "몰"에 통보하고 "몰"의 안내가 있는 경우에는 그에 따라야 합니다.
④ 회원이 자신의 ID 및 비밀번호의 유출 또는 제3자의 사용에 대해 인지하고도 비밀번호를 변경하지 않은 경우 또는 이와 같은 사정을 “몰”에 통지하지 않거나 “몰”의 조치에 응하지 않은 경우 등 회원이 본조의 의무를 준수하지 않아 발생하는 모든 손실이나 손해 등 불이익에 대한 책임은 회원에게 있습니다.

제23조(이용자의 의무)
이용자는 다음 행위를 하여서는 안됩니다.
1. 신청 또는 변경 시 허위 내용의 등록
2. 타인의 정보 도용
3. "몰"에 게시된 정보의 변경
4. "몰"이 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시
5. "몰" 기타 제3자의 저작권 등 지식재산권에 대한 침해
6. "몰" 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위
7. 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 몰에 공개 또는 게시하는 행위

제24조(지식재산권의 귀속 및 이용제한)
① “몰“이 작성한 저작물에 대한 저작권 기타 지식재산권은 ”몰“에 귀속합니다.
② 이용자는 "몰"을 이용함으로써 얻은 정보 중 "몰"에게 지식재산권이 귀속된 정보를 "몰"의 사전 승낙없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.
③ "몰"은 약정에 따라 이용자에게 귀속된 저작권을 사용하는 경우 당해 이용자에게 통보하여야 합니다.

제25조(회원의 게시물)
① 회원이 “몰”에 등록 또는 게시한 게시물에 대한 모든 책임은 회원에게 있으며, “몰”은 회원의 게시물이 다음 각 항에 해당한다고 판단되는 경우에 사전통지 없이 삭제할 수 있고, 이에 대하여 “몰”은 어떠한 책임도 지지 않습니다.
1. 타인을 모욕, 비방, 비하하거나 타인의 명예를 훼손하는 게시물
2. 범죄 및 불법 행위에 악용될 수 있는 정보를 담고 있는 게시물
3. 타인의 저작권, 상표권 등 권리를 침해하는 게시물
4. 음란물 또는 일반인의 성적 굴욕감이나 수치심을 유발할 수 있는 내용의 게시물(그러한 내용이 담긴 웹사이트, 앱 등으로 연결될 수 있는 게시물을 포함)
5. 어린이와 청소년의 정신적, 신체적 건강을 해칠 우려가 있는 선정적인 내용을 담은 게시물
6. 특정인의 개인정보가 노출된 게시물
7. 특정 상품 등을 소개하여 판매하거나, 이를 구매, 사용하도록 권하거나 연락을 유도하는 등 직간접적으로 영리추구를 위한 내용을 담고 있는 게시물
8. 사이버몰의 이용 목적에 부합하지 않거나 해당 서비스의 취지와 무관한 내용의 게시물
9. 악성코드나 스파이웨어 등이 실행되어 다른 회원, 회사, 판매자 기타 제3자의 시스템 성능 저하, 개인정보 유출 등의 피해를 줄 수 있는 악의적인 코드를 담고 있는 게시물
10. 정당한 사유 없이 회사의 영업을 방해하는 내용의 게시물
11. 기타 이 약관 또는 법령에 위배되거나 공서양속에 반하는 내용의 게시물
② 회원이 탈퇴하는 경우, 탈퇴 전에 작성한 게시물(댓글 포함)은 삭제되지 않습니다. 회원 탈퇴 시 회원정보가 삭제되어 작성자 본인을 확인할 수 없게 되므로 게시물에 대한 편집 또는 삭제가 원천적으로 불가하며, 게시물의 삭제를 원하는 회원은 반드시 회원 탈퇴 이전에 해당 게시물에 대한 삭제를 요청하여야 합니다.
③ 회원이 작성한 게시물은 상품 등의 연구개발, 판촉, 홍보 등의 목적으로 “몰”이 제휴한 타사에 복제, 배포, 전송 또는 전시될 수 있으며, 본질적인 내용에 변경을 가하지 않는 범위 내에서 수정, 편집될 수 있습니다. 이 경우 “몰”은 해당 게시물로부터 회원의 개인정보가 식별되지 않도록 필요한 조치를 합니다.


제 3장 기타

제26조(면책조항)
① “몰”은 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
② “몰”은 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.
③ “몰”은 회원이 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖의 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.
④ “몰”은 회원이 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 관해서는 책임을 지지 않습니다.
⑤ “몰”은 회원 간 또는 회원과 제3자 상호간에 서비스를 매개로 하여 거래 등을 한 경우에는 책임을 지지 않습니다.
⑥ 회사는 무료로 제공되는 서비스 이용과 관련하여 관련 법령에 특별한 규정이 없는 한 책임을 지지 않습니다.


제27조(분쟁해결)
① "몰"은 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.
② "몰"은 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.
③ "몰"과 이용자간에 발생한 전자상거래 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시·도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.

제28조(재판권 및 준거법)
① "몰"과 이용자간에 발생한 전자상거래 분쟁에 관한 소송은 제소 당시의 이용자의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다. 다만, 제소 당시 이용자의 주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다.
② "몰"과 이용자간에 제기된 전자상거래 소송에는 한국법을 적용합니다.


부칙

1. 이 약관은 2019년 11월 18일부터 적용됩니다.
2. 2016년 2월 4일부터 시행되던 종전의 약관은 본 약관으로 대체합니다.


                                </div>
                            </div>          
                        </div>

                        <div className="personalInfo">
                            <div className="agreePersonal">
                                <div>
                                    <input 
                                        className="checkBox2" 
                                        type="checkBox" 
                                        id="cb2" 
                                        onClick={this.handleCheckBox2}>
                                    </input>
                                </div>
                                <div>
                                &nbsp;&nbsp;개인정보 이용 방침
                                </div>
                            </div>
                            <div className="termsBox">
                                <div className="implDate">시행일자: 2019년 11월 18일</div>
                                <div className="detailTerms">
                                    
                                [개인정보 처리방침]
주식회사 정육각은(이하"회사"는) 이용자의 개인정보보호를 매우 중요시하며, 이용자가 회사의 서비스를 이용함과 동시에 온라인상에서 회사에 제공한 개인정보가 보호받을 수 있도록 최선을 다하고 있습니다. 이에 회사는 정보통신망 이용촉진 및 정보보호에 관한 법률 제27조의2 및 개인정보보호법 제30조에 따라 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립/공개합니다.

제1조(개인정보의 처리목적)
회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 관련 법률에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
① 홈페이지 회원 가입 및 관리
회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별 및 인증, 회원자격의 유지 및 관리, 서비스 부정이용 방지, 각종 고지 및 통지, 고충처리 등을 목적으로 개인정보를 처리합니다.
② 재화 또는 서비스 제공
물품 배송, 서비스 제공, 계약서 및 청구서 발송, 콘텐츠 제공, 맞춤 서비스 제공, 본인인증, 요금 결제 및 정산, 채권추심 등을 목적으로 개인정보를 처리합니다.
③ 마케팅 및 광고
회원의 서비스 이용에 대한 통계, 이벤트 등 광고성 정보 전달 등을 목적으로 개인정보를 처리합니다.

제2조(개인정보 수집 항목 및 방법)
① 회사는 다음의 개인정보 항목을 수집하여 처리하고 있습니다.
1. 회원 가입 및 관리
이름, 휴대폰번호, 아이디(이메일주소), 비밀번호
2.재화 또는 서비스 제공
가. 회원 및 대량 주문 : 결제정보, 수취인 이름, 수취인 휴대폰번호, 수취인 주소, 주소지 출입정보(필요 시)
나. 취소 및 환불 : 예금주, 은행명, 계좌번호
② 개인정보 항목은 홈페이지, 모바일 애플리케이션, 이메일, 팩스, 고객센터를 통한 전화와 온라인 상담, 이벤트 응모를 통해 수집됩니다.
③ 회사의 서비스 이용 과정에서 서비스 이용기록, 방문기록, 불량 이용기록, IP주소, 쿠키 MAC주소, 모바일 기기정보(앱 버전, OS 버전), ADID/IDFA(광고식별자) 등의 정보가 자동으로 생성되어 수집될 수 있습니다.
④ 진행하는 이벤트에 따라 수집 항목이 상이할 수 있으므로 응모 시 별도 동의를 받으며, 목적 달성 즉시 파기합니다.

제3조(개인정보 자동 수집 장치의 설치, 운영 및 그 거부에 관한 사항)
① 회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.
② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자의 PC(컴퓨터) 내의 하드디스크에 저장되기도 합니다.
1.쿠키의 사용목적 : 이용자가 방문한 각 서비스와 웹 사이트에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.
2. 쿠키의 설치 운영 및 거부 : 웹 브라우저 상단의 도구>인터넷 옵션>개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.
3. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.

제4조(개인정보의 처리 및 보유기간)
① 회사는 법령에 따른 개인정보 보유·이용 기간 또는 이용자로부터 개인정보 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리 및 보유합니다.
② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
1. 홈페이지 회원 가입 및 관리 : 회원 탈퇴 시 부정이용 방지를 위하여 필요한 최소한의 정보를 이용약관에 명시된 기간동안 보관 후 파기하며, 재화 또는 서비스 제공에 해당하는 경우는 관련 법령에 의거하여 보유 기간 동안 보관 후 파기합니다. 다만, 다음의 사유에 해당하거나 법령에서 정한 기간이 있는 경우에는 해당 사유/기간 종료시까지 보관 후 파기합니다.
가. 관계 법령 위반에 따른 수사/조사 등이 진행중인 경우에는 해당 수사/조사 종료시까지
나. 서비스 이용에 다른 채권이나 채무관계 잔존시에는 해당 채권이나 채무관계 정산시까지
2. 개인정보 유효기간제(휴면계정 정책) : 1년 이상 서비스 이용기록이 없는 이용자의 개인정보는 정보통신망법 제29조에따라 일반 이용자의 개인정보와 분리(휴면계정으로 전환)하여 저장 및 관리됩니다. 회사는 휴면계정으로 전환되기 30일 이전, 해당 내용에 대해 이메일 등을 통해 이용자에게 사전 통지를 하며 분리 저장된 개인정보는 관련 법령에 특별한 규정이 있는 경우를 제외하고 해당 개인정보를 이용, 제공하지 않습니다.
3. 재화 또는 서비스 제공 : 재화 또는 서비스 공급완료 및 요금결제, 정산 완료시까지
다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료시까지
가. 전자상거래 등에서의 소비자 보호에 관한 법률에 따름
-계약 또는 청약철회 등에 관한 기록 : 5년
-대금결제 및 재화 등의 공급에 관한 기록 : 5년
-소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
나. 정보통신 이용촉진 및 정보보호 등에 환한 법률에 따름
-본인 확인에 대한 기록 : 6개월
다. 통신비밀보호법에 따름
-인터넷 로그기록자료, 접속지 추적자료 : 3개월

제5조(개인정보처리의 위탁)
① 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
위탁 대상자 : [NICEPAY]
위탁업무 내용 : [결제처리]

위탁 대상자 : [우체국 택배]
위탁업무 내용 : [상품배송]

위탁 대상자 : [주식회사 팀프레시]
위탁업무 내용 : [상품배송]

위탁 대상자 : [주식회사 메쉬코리아]
위탁업무 내용 : [상품배송]

위탁 대상자 : [주식회사 프레시솔루션]
위탁업무 내용 : [상품배송]

위탁 대상자 : [롯데글로벌로지스]
위탁업무 내용 : [상품배송]

위탁 대상자 : [주식회사 카카오]
위탁업무 내용 : [카카오알림톡 및 친구톡 전송 서비스]

위탁 대상자 : [누리고]
위탁업무 내용 : [문자 발송 서비스]

위탁 대상자 : [㈜인포뱅크]
위탁업무 내용 : [문자 발송 서비스]

위탁 대상자 : ㈜엘지씨엔에스
위탁업무 내용 : [스마트메시지(카카오 알림톡 및 친구톡, SMS/LMS/MMS 발송) 전송 서비스]

위탁 대상자 : [(주)루나소프트]
위탁업무 내용 : [스마트메시지(카카오 알림톡 및 친구톡, SMS/LMS/MMS 발송) 전송 서비스]

위탁 대상자 : [스티비]
위탁업무 내용 : [이메일 전송 서비스]

해외위탁 대상자 : [Google]
위탁업무 내용 : [Google Cloud Service를 통한 시스템 관리]
② 회사는 위탁계약 체결 시 위탁업무 수행목적 외 개인정보 처리금지, 기술적 관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리 감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.

제6조(이용자 및 법정대리인의 권리와 그 행사방법)
① 이용자는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
1.개인정보 열람요구
2.오류 등이 있을 경우 정정 요구
3.삭제 요구
4.처리정지 요구
② 전항에 따른 권리 행사는 회사의 홈페이지, 모바일 애플리케이션 메뉴 및 회사에 대해 서면, 전화, 우편, 모사전송 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.
③ 이용자가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사의 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.
④ 이용자에 따른 권리 행사는 이용자의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 위임장 제출이 필요합니다.
⑤ 이용자는 개인정보 보호 유관법령을 위반하여 회사가 처리하고 있는 이용자 본인이나 타인의 개인정보 및 사생활을 침해하여서는 아니됩니다.

제7조(개인정보 보호책임자에 관한 사항)
① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
[개인정보 보호책임자]
이 름 : 박준태
소속 / 직위　: 개발팀 / CTO
E - M A I L　: help@yookgak.com
전 화 번 호　: 070-7431-0659
② 이용자께서 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당자에게 문의하실 수 있습니다. 회사는 이용자의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.

제8조(만 14세 미만 이용자의 개인정보보호)
회사는 온라인 환경에서 만 14세 미만 이용자의 개인정보를 보호하는 것 역시 중요한 일이라고 생각하고 있습니다. 회사는 만 14세 미만의 이용자는 회원으로 가입할 수 없게 하고 있습니다. 즉, 만 14세 미만의 이용자는 회사에서 회원 자격의 서비스를 받을 수 없습니다.

제9조(개인정보의 안정성 확보조치)
회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
1.관리적 조치 : 내부관리계획 수립 시행, 정기적 직원 교육 등
2.기술적 조치 : 개인정보처리시스템 등의 접근권한 관리, 고유식별정보 등의 암호화, 보안프로그램 설치 등
3.물리적 조치 : 자료보관실 등의 접근통제 등

제10조(개인정보의 파기절차 및 방법)
① 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
② 이용자로부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다. 별도 보존되는 개인정보는 법률에 의한 경우가 아니라면 보존목적 이외의 다른 목적으로 이용되지 않습니다.
③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
1. 파기절차 - 회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
2. 파기방법 - 회사는 전자적 파일 형태로 기록, 저장된 개인정보는 기록을 재생할 수 없도록 로우레밸포맷 등의 방법을 이용하여 파기하며, 종이 문서에 기록 저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.

제11조(개인정보의 제3자 제공)
회사는 이용자의 개인정보를 수집 시 명시한 범위 내에서만 처리하며, 이용자의 동의가 있거나 다른 법률에 특별한 규정이 있는 경우에만 개인정보를 제3자에게 제공합니다.

제12조(모바일 앱 사용 시 광고 식별자(ADID/IDFA)수집)
회사는 이용자의 ADID/IDFA를 수집할 수 있습니다. ADID/IDFA란 모바일 앱 이용자의 광고 식별 값으로, 이용자를 위한 맞춤 서비스 제공이나 더 나은 환경의 광고를 제공하기 위한 측정을 위해 수집될 수 있습니다.
[거부방법]
-Android : 설정>구글(구글설정)>광고>광고 맞춤설정 선택 해제
-iOS : 설정>개인정보보호>광고>광고 추적 제한

제13조(온라인 맞춤형 광고 서비스)
회사는 다음과 같이 온라인 맞춤형 광고 사업자가 행태정보를 수집하도록 허용하고 있습니다.
1.행태정보를 수집 및 처리하는 광고 사업자 : 구글, 페이스북, 네이버, 카카오, 크리테오, 모비온
2.행태정보 수집 방법 : 이용자가 당사 웹사이트를 방문하거나 앱을 실행할 때 자동 수집 및 전송

제14조(개인정보처리방침의 개정과 그 공지)
본 개인정보 처리방침을 개정할 경우에는 최소 7일전에 홈페이지 또는 이메일을 통해 변경 및 내용 등을 공지하도록 하겠습니다. 다만 이용자의 소중한 권리 또는 의무에 중요한 내용 변경이 발생하는 경우 시행일로부터 최소 30일 전에 공지하도록 하겠습니다.

-공고일자 : 2019년 10월 18일
-시행일자 : 2019년 11월 18일
                                    
                                </div>
                            </div>          
                        </div>
                    
                    <div className="bottomBtn">
                        <button 
                            className="backBtn">
                            이전으로
                        </button>
                        <button 
                            className="agreeBtn" 
                            onClick={this.props.stageChange}
                            >
                            동의하기
                        </button>
                    </div>
                </div>

                </div> {/* 교환할 부분 클래스 끝 */}
            </div>


        );
    }
}

export default AgreeTerms;