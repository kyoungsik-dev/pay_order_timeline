# NAVER PAY - Timeline

### 개요

- 온라인의 다양한 쇼핑이나 페이 서비스들은 사용자의 이용내역을 잘 관리할 수 있도록 직관적인 타임라인 형식의 노출 방식을 많이 사용하고 있으며 (예, [https://order.pay.naver.com/home](https://order.pay.naver.com/home)) 이런 타임라인 서비스의 일부를 직접 설계하고 구현해 보면서 서비스의 특징들을 이해할 수 있도록 한다.

### 기술 스택

- Node.js, Express, Webpack, Babel, React, SASS

### 내가 한 것

- DB/Back-End
    - 스키마
    - 더미 데이터 가공 및 INSERT
    - MySQL 세팅
    - API
- Front-End
    - Webpack, Babel 세팅 (without CRA)
    - SPA
    - 서버 통신 모듈의 분리 (URI, HTTP Method ⇒ API.js)
    - SASS 세팅
    - 다국어지원 (with HOC) ⇒ LocalStorage에 기록
    - 가격, 날짜 포맷팅
    - Infinite Scroll

     

### 하지 못했던 것 && 하고 싶은 것

- Redux
    - 아키텍쳐는 이해했지만, 실제 적용에는 실패
    - 기술문서를 다시 꼼꼼히 읽어보고 꼭 적용하기
- SSR
- 배포 자동화
    - CI...?
    - Travis, Docker
