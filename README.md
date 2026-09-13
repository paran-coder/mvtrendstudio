# MV Trend Studio

**현재 버전: v1.0.0-alpha.3**  
**목표 버전: v1.0.0**

K-pop MV 트렌드 데이터를 실제 제작 방향으로 연결하는 크리에이티브 인텔리전스 웹서비스입니다.

## 이번 버전에 포함된 것

- 한국어 중심 UI
- Home / Trend Radar
- Recipe Builder
- Recipe Result
- Scene Evidence Drawer / 대표 장면 타임코드
- pathname 기반 활성 상단 내비게이션
- 레시피 공유 URL 복사
- 브라우저 LocalStorage 레시피 저장 / 저장 목록
- Trend 목록
- Director DNA
- Methodology
- 정적 리포트 데이터
- Production Fit 실시간 평가
- GitHub → Vercel 배포를 전제로 한 구조

## 기술 스택

- Next.js 16.3.3
- React 19.3.0
- TypeScript 5.8
- Tailwind CSS 4.3.3
- App Router

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

## 품질 검사

```bash
npm run lint
npm run typecheck
npm run build
```

## GitHub 업로드

ZIP 압축을 해제한 뒤 **압축 안의 프로젝트 파일 전체**를 GitHub 저장소 루트에 올리면 됩니다.

권장 저장소 이름:

```text
mv-trend-studio
```

`main` 브랜치를 Vercel Production 브랜치로 사용합니다.

## Vercel 배포

1. GitHub에 프로젝트 업로드
2. Vercel에서 해당 저장소 Import
3. Framework Preset은 Next.js 자동 감지
4. 별도 Build 설정을 덮어쓰지 않음
5. 첫 배포 실행

현재 버전은 외부 DB와 필수 환경변수가 없으므로 바로 Preview/Production 빌드가 가능하도록 설계되어 있습니다. 장면 Evidence는 원본 리포트 Recipe 01–03에 명시된 대표 타임코드를 정적 데이터로 연결합니다.

## 첫 Preview 권장 시점

**Home만 완성된 시점이 아니라 Recipe Builder와 Result까지 동작하는 지금 단계에서 첫 Preview를 만드는 것을 권장합니다.**

이유는 이 서비스의 핵심 가치가 데이터 열람이 아니라 “제작 조합을 만들고 평가하는 경험”이기 때문입니다. Home만 배포하면 일반 트렌드 리포트 사이트처럼 보일 가능성이 높습니다.

## 디렉터리

```text
app/
  page.tsx                 # Home / Trend Radar
  trends/page.tsx          # 전체 트렌드
  recipes/build/page.tsx   # Recipe Builder
  recipes/result/page.tsx  # Recipe Result
  recipes/saved/page.tsx   # 저장된 레시피
  directors/page.tsx       # Director DNA
  methodology/page.tsx     # 분석 방법
components/
data/
lib/
docs/
.github/workflows/
```

## 데이터 정책

현재 MVP는 리포트에서 확인되는 집계 데이터를 Git 저장소 내부 TypeScript seed로 관리합니다. 레시피 저장은 서버 없이 브라우저 LocalStorage를 사용하며, 공유는 쿼리스트링 기반 URL로 동작합니다. 계정 간 동기화나 팀 공유가 필요해지는 시점에 Supabase/PostgreSQL 도입을 검토합니다.

## 중요

`Production Fit / 100`은 원본 리포트 공식 점수가 아니라 MV Trend Studio가 제작 의사결정을 위해 계산하는 내부 제품 점수입니다.


## alpha.2 변경점

- Recipe Result에서 장면 근거를 바로 열 수 있는 Evidence Drawer 추가
- 데스크톱은 우측 Drawer, 모바일은 Bottom Sheet 형태로 동작
- 대표 장면의 아티스트·MV·구간·타임코드·리포트 페이지 표시
- 원본 영상 프레임은 배포 권한이 확정되기 전까지 복제하지 않고 프레임 자리 표시 UI 사용
- 사용자 UI/문서는 한국어 우선, 제작 기법·고유 콘셉트 식별자는 영문 유지


## alpha.3 변경점

- 상단 메뉴의 활성 상태를 현재 pathname 기준으로 전환하도록 수정
- `/recipes/build`, `/recipes/result`, `/recipes/saved`에서는 `레시피 빌더`가 활성 상태로 표시
- 데스크톱 Header, Home hero, Builder 3열 비율, Result 점수 패널, Trend 테이블 정보 밀도 보정
- Recipe Result에서 공유 URL 복사 기능 추가
- Recipe Result에서 LocalStorage 저장/해제 기능 추가
- `/recipes/saved` 저장 레시피 목록 및 삭제 기능 추가
- 저장된 레시피를 다시 Builder에서 수정할 수 있도록 다중 query param 초기값 지원
