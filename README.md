# 1차 프로젝트: 정육각 클론

## Intro
* 세상에서 가장 신선한 정육점! 초신선 식재료는 오직 정육각에서! 신선한 음식을 판매하는 정육각을 소개 드립니다.
* Front-end 2명, Back-end 2명 총 4명으로 구성된 FreePorkBelly 팀
* 프로젝트 기간은 단 2주! (2020.05.25 ~ 2020.06.05)

## Demo
- https://www.youtube.com/watch?v=iL7fGn7tmVo&t=14s

## Skills
* Front-End: React, Router, Javascript, Sass
* Back-End: Django, MySQL
* Tools: Git, AWS

## Systems
* 매일 아침 Stand Up 미팅으로 진행 단계 공유 및 전체적인 흐름 회의
* Trello를 사용하여 진행 상황 체크

## Goal
* 기존의 정육각과 동일한 UI/기능 구현
* React의 꽃, 컴포넌트 재사용 및 Sass 변수화하여 사용
* Back-end와 API 통신
* Redux 사용 없이 state 상태 관리

## Explanation

### Login & Register
* JWT Access Token을 활용하여 Back-End와 통신
* 로그아웃 버튼 클릭 시, access_token 삭제 구현

### Main
* Back-End와 API 통신(GET)하여 소량의 상품 목록 가져오기
* slick 라이브러리를 사용하여 슬라이더 구현
* scroll 시 새로운 header 생성 및 fixed 구현
* Top button 구현하여 클릭 시, 상단으로 이동하게 구현

### Product List
* Back-End와 API 통신(GET)하여 상품 목록 가져오기
* Query parameters를 이용하여 카테고리에 해당하는 상품 목록 가져오기
* 라우트 경로에 pruduct_id 값을 넣어 해당 상품 디테일 페이지로 이동할 수 있게 동적 라우팅 구현

### Product Detail
* Back-End와 API 통신(GET)하여 해당 상품에 대한 정보 가져오기
* Back-End와 API 통신(POST)하여 해당 상품 수량 및 옵션 구현
* Back-End와 API 통신(GET)하여 해당 상품에 대한 리뷰목록 가져오기
* Tab Button 기능을 구현하여 컴포넌트를 동적으로 보여주기
* 해당 리뷰를 클릭 시, 모달 기능 구현

### Cart
* Back-End와 API 통신(GET)하여 해당 유저의 장바구니 리스트 가져오기
* Back-End와 API 통신(DELETE)하여 해당 상품 삭제 기능 구현
* 수량에 따른 해당 상품의 가격과 전체 상품의 총 가격 변경 기능 구현

### Order
* Back-End와 API 통신(GET)하여 상품 주문 목록 가져오기
* 이전 단계, 다음 단계 버튼 클릭 시, 해당 컴포넌트 동적으로 보여주기
* 결제 방법 중, 무통장 입금 체크할 때, Tooltip 기능 구현
* 주소 선택 버튼 클릭 시, 모달 기능 구현
* daum-postcode 라이브러리를 활용하여 주소 검색 기능 구현

### Mypage
* Back-End와 API 통신(GET)하여 주문 내역 가져오기

