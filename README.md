# 서울시 공영주차장 가격 검색, 비교, 추천 서비스 

서울특별시의 공영주차장에 대한 주차 가격 검색, 비교, 추천 서비스입니다. 

## 기획 및 개발 의도 

- 공영 주차장에 대한 가격 정보를 모아서 확인할 수 있는 플랫폼의 부재
- 기본 요금 + 분 당 추가 요금으로 가격이 책정되는 구조로 운전자가 예상 주차 요금을 쉽게 파악하기 어려움
- 월 정기권 판매 여부를 확인하려면 주차장 별로 따로 검색을 해야 하는 불편함이 있었음 

## 주요 기능 

- 지역, 예상 주차 시간, 유료 / 무료 정보를 선택하면 단위 시간 별 예상 가격을 계산하여 가장 저렴한 주차장 순으로 1위 ~ 5위까지의 주차장을 추천
  (총 주차 시간에 따른 총 주차 가격과 1분당 가격을 제공함 )
- 월 정기권을 선택하면 정기권을 판매하고 있는 공영 주차장과 금액을 안내 (저렴한 순)

## 개발 과정에서 새로 공부하여 적용한 내용 

- 서울시 제공 공공 데이터 API를 활용 
  (Axios 라이브러리를 활용하여 GET)
- 공공 데이터 API의 중복된 컬럼을 reduce 메서드를 사용하여 필터링 후 활용함 
- Redux를 사용하여 전역 상태 관리를 수행함 


## 사용 언어 및 프레임워크 

JavaScript / React / Redux / HTML / Styled-components

## 폴더 구조 및 파일 설명 

### `public`

이미지, 폰트 등의 파일을 저장 및 관리하는 폴더 

### `src/components`

페이지 및 공통 컴포넌트를 구현 및 관리하는 폴더 

### `src/css`

CSS 파일을 모아서 관리하는 폴더 

### `src/modules`

Reducer와 store를 구현 및 관리하는 폴더 

### `src/components/fistPage.js`

유저가 처음 페이지에 접속했을 때 보여주는 첫번째 페이지 
- 사이트에 대한 preview를 볼 수 있고 '시작하기' 버튼을 클릭하면 서비스에 접속할 수 있음 

### `src/components/header.js`

페이지에서 공통으로 사용되는 header를 컴포넌트로 분리하여 구현함 

### `src/components/intro.js`

### `src/components/mainPage.js`

서비스의 메인 페이지 
- 지역구 선택, 예상 주차시간 선택, 유료/무료 여부 선택, 월 정기권 선택 등의 기능을 구현함 
- 카카오 map API를 통해 주차장의 위치를 볼 수 있게 함 
- 유저가 선택한 조건에 맞는 주차장을 저렴한 순으로 볼 수 있음 

### `src/components/rankingModal.js`

- 유저가 선택한 조건에 맞는 주차장을 랭킹 순으로 보여줌 
- 변동이 많기 때문에 유지 보수에 용이하도록 컴포넌트로 분리하여 구현함 

### `src/components/selectDong.js`

지역구를 선택할 때 노출되는 드롭다운 박스를 컴포넌트로 분리하여 구현함 

### `src/modules/combineReducer.js`

구현한 reducer들을 하나의 reducer로 합치는 코드 

### `src/modules/dStore.js`

### `src/modules/dongStore.js`

유저가 선택한 '동'을 전역 상태로 관리하기 위한 코드 (Redux)

### `src/modules/guStore.js`

유저가 선택한 '구'를 전역 상태로 관리하기 위한 코드 (Redux)

### `src/modules/ticketStore.js`

유저가 월 정기권을 선택했는지 그 여부를 전역 상태로 관리하기 위한 코드 (Redux)

### `src/modules/timeStore.js`

유저가 선택한 예상 주차 시간을 전역 상태로 관리하기 위한 코드 (Redux)


