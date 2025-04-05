# CDRI 과제

## 프로젝트 개요

- 작성자: 안지현
- 과제 수행 약속 일정: 2025.03.31 월요일 ~ 2025.04.07 월요일 18:00

## 실행 방법 및 환경 설정

1. 메일로 전달드린 .env파일을 프로젝트 root에 붙여넣기 합니다.
2. `npm install` 을 통해 사용하는 라이브러리를 모두 설치합니다.
3. `npm run dev` 명령어를 입력하여 실행할 수 있습니다.

## 폴더 구조 및 주요 코드 설명

src/  
├── apis: axios 인스턴스나 그를 통해 만든 api들의 저장소입니다.  
├── assets: 정적 에셋. 여기에서는 주로 icon(.svg)파일을 보관하는 용도로 사용했습니다.  
├── components: 공용 컴포넌트를 생성합니다.  
├── constants  
├── features: 일반적으로 features/ 내에서 페이지별 hook, util, 해당 페이지에서만 사용되는 컴포넌트 등을 모아놓습니다.  
├── pages: 각 페이지의 root 컴포넌트입니다.  
├── routes: 라우팅과 관련된 파일들을 모아두는 디렉토리입니다.  
├── store: 전역 상태관리 스토어 디렉토리입니다.  
├── styles: 프로젝트 전반에 쓰일 스타일 관련 파일을 모아둡니다. (GlobalStyle, theme 등 정의)  
└── types

## 라이브러리 선택 이유

- prettier
  - 코드의 일관성을 가져가기 위해 사전에 설정해주었습니다.
- [@trivago/prettier-plugin-sort-imports](https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports)
  - import 정렬을 깔끔하게 유지하기 위해 사용하였습니다.
- zustand
  - 검색 기록과 내가 찜한 책 두 가지를 브라우저 재실행 시에도 유지하기 위해 localStorage를 쓰되, type-safe하게 사용하기 위해 상태관리 도구 중 하나인 zustand를 통해 사용하도록 했습니다.
  - zustand는 복잡한 설정이나 많은 양의 보일러 플레이트 없이 사용할 수 있는 장점이 있어 선택했습니다.

## 강조 하고 싶은 기능

- 공용 컴포넌트 생성 (`<Button />`, `<Typography />`, `<Stack />` 등)
- `BookListItem`컴포넌트
  - 내부적으로 분리하여 설계하여 아이템이 여닫힌 상태를 모두 유연하게 대응하고자 하였습니다.
- 전반적으로 type-safe하게 구성한 부분
