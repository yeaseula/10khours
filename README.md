# 📌 1만시간의 법칙 - 훈련시간 계산기

***

### 목차
1. 프로젝트 소개
2. 개발 환경 및 배포
3. 프로젝트 구조
4. 기여도
5. 주요 개발 포인트
6. 어려웠던 점 및 해결법
7. 앞으로의 계획
8. 부록: 로고 쉐이킹 애니메이션 예시 코드

***

### 프로젝트 소개
- **목표** <br />
학습자에게 동기를 부여하는 랜딩 페이지 제작

- **기능**<br />
하루 학습 시간을 입력하면 목표인 1만 시간까지 걸리는 기간 계산 (추후 개발 예정)
- **특징**<br />
반응형 디자인 적용, 접근성과 SEO를 고려한 퍼블리싱

***

### 개발 환경 및 배포
- HTML, CSS를 활용한 정적 웹사이트
- Figma를 이용해 디자인 확인
- GitHub Pages를 통한 배포
- 배포 URL: 🕑 [1만시간의 법칙 보러가기](https://yeaseula.github.io/10khours/)

***

### 기술 스택

- HTML5, CSS3 (Flexbox)
- 웹 접근성 (ARIA, 스크린리더, 키보드 대응)
- SEO 기본 원칙 적용 (메타 태그, 시멘틱 태그)

***

### 프로젝트 구조

```
.
└── 10KHOURS/
    ├── assets/
    ├── fonts/
    ├── css/
    │   ├── fonts.css
    │   ├── reset.css
    │   └── page.css
    ├── js/
    │   └── main.js
    └── index.html
```

- CSS 파일을 기능별로 분리해 유지보수와 가독성 향상에 집중
- 이미지와 폰트 파일을 분리

***

### 기여도

1인 퍼블리싱 100%


***

### 주요 개발 포인트

#### HTML & 접근성
- 시멘틱 태그(header, main, section, footer) 활용해 SEO와 가독성 개선
- alt 속성 작성 및 스크린리더 호환성 고려
- 키보드 사용자를 위한 outline 유지
- 의미 없는 이미지는 배경 이미지로 처리해 스크린리더 혼란 최소화
- 버튼과 앵커 태그의 역할을 명확히 구분해 추후 JS 기능 적용 용이

#### CSS & 성능
- 중복과 공백을 줄이고 변수화하여 코드 효율성 및 성능 극대화
- 주요 폰트 스타일은 CSS 변수로 관리해 일괄 변경 가능하도록 설계
- 폰트는 CDN 대신 로컬에 저장해 로딩 속도와 레이아웃 시프트 최소화
- 버튼 및 flex 스타일 컴포넌트화로 재사용성 향상

#### UX 개선
- 모바일 환경에서 편리한 입력을 위해 적절한 input 타입 지정
- 클릭 가능한 요소에 cursor: pointer 적용
- 로고에 쉐이킹 애니메이션 효과 추가해 방문자 관심 유도

***
### 문제 개선 방법

#### 디자인 툴과 실제 적용 차이
- 피그마 디자인과 실제 브라우저 렌더링 차이를 개발자 도구와 병행하여 꼼꼼히 조정

#### 버튼과 앵커 태그 여백 차이
- height 직접 지정, 내부 텍스트 span 감싸기, flex 정렬과 position 조정으로 해결

#### 다양한 뷰포트 대응
- PC, 태블릿, 모바일 각각에 맞춘 반응형 디자인을 구현하며 우선순위와 중복 CSS 관리에 주의

#### 레이아웃 시프트
- 외부 CDN 폰트 로딩 지연 문제로 로컬 폰트 파일 저장 및 불러오기 방식 전환

***

### 🔖 부록 : 쉐이킹 애니메이션 예시 코드

``` css
header .title-logo-box img {
  display: inline-block;
  animation: shakeLogo 0.4s linear 0s 2 alternate both;
  will-change: transform;
}

@keyframes shakeLogo {
  0%   { transform: rotate(0deg); }
  20%  { transform: rotate(-8deg); }
  40%  { transform: rotate(8deg); }
  60%  { transform: rotate(-6deg); }
  80%  { transform: rotate(6deg); }
  100% { transform: rotate(0deg); }
}

```
