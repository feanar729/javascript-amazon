# javascript-amazon
- [데모 페이지](https://feanar729.github.io/javascript-amazon/)
- Amazon prime UI 및 기능 replica project
- [module Javascript](https://github.com/feanar729/javascript-amazon/tree/master/js)
- 진행과정(상-하순)
  - HTML, CSS 제작[https://trello.com/c/bsB7c7bs]
  - Plan Layer 제작[https://trello.com/c/KT03uwnu]
  - 복잡한 UI 개발 Mega drop down menu [https://trello.com/c/fL14BWR6] => 비동기 debounce 기능에 대한 생소함과 이해도 부족의 문제가 컸음
  - 무한 Carousel 제작 [https://trello.com/c/kM8HCEax]
  - 검색자동완성 제작[https://trello.com/c/sS5oXwDL]

## 주요 기능 
   1. Hidden Plan Layer
    - 스크롤시 일정 지점에 도달하게 되면 숨겨진 Layer 표시  
   2. 무한 Carousel 기능
    - 일정 시간(3초) 마다 우측 이동.
    - 좌/우 버튼 클릭시 좌/우 이동.
    - 일정시간(설정 3.5초)뒤 다시 우측으로 자동 이동 
   3. 자동 검색 완성
    - j.a.v.a.s.c.r.i.p.t, i.p.h.o.n.e, b.. 등등 API 데이터에 따라 검색 시 자동검색 완성창 표시 
    - 자동검색완성 창 상/하단 화살표 이동시 마다 색상 표시 및 검색창에 매칭 된 단어값 입력
    - 마우스 호버(hover)시 색상 변경 기능 
    - 엔터키 입력시 검색완성창이 사라지고, 검색창에 엔터친 입력값 검색창 기입
   4. Mega Drop Down Menu(기능 보완 중)


## Carousel Slide [STEP 4] 
- Debounce 적용 경험 블로그 기록
> - https://medium.com/@feanar729/debounce%EB%9E%80-%EB%AD%98%EA%B9%8C%EC%9A%94-82204c8b953f 

## 메가 드롭 다운 메뉴 [STEP 7]
- 마우스에 상위 메뉴에 있는 각 content 메뉴를(outer-layer > content-layer) hover시 하위 메뉴 open 
- 마우스에 content 메뉴에 일정시간(300ms) 머무를시 마우스 위치값 저장
- content 메뉴에서 하위 메뉴(inner-layer)로 대각선 이동시 확인(대각선 값 확인)
  - 이동 각도 라면 삼각형 범위 계산 event 정지
  - 아니라면 삼각형 마우스 값 초기화 [=> 삼각형 마우스 계산시 초기화 값(x:0 ,y:0)일 시 예외 처리(return false)]

### 버그 및 수정 사항
  1. 중간 상품영역 대각선 이동시 삼각형 알고리즘 on상태에 해당 상하상품 영역 hover기능 작동 X 버그 
  2. 서브메뉴 영역(inner-layer) hover 이후 완전히 나갈시(department 탐색 중단의 경우) 서브메뉴 display : none 초기화 필요