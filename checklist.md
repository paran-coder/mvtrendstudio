# MV Trend Studio — Checklist

버전: **v1.0.0-alpha.4**

## Phase 0 — 기반 정의
- [x] 프로젝트 명칭 확정: MV Trend Studio
- [x] 주 사용자 정의
- [x] GitHub → Vercel 배포 전제 정의
- [x] 원본 리포트 지표와 제품 점수 분리

## Phase 1 — 정보 구조 / 데이터 모델
- [x] 핵심 사용자 흐름 정의
- [x] Trend / Recipe / Director / Evidence 구조 정의
- [x] 정적 리포트 데이터 모델 정의

## Phase 2 — UI 구조
- [x] Home / Trend Radar 구조
- [x] Recipe Builder 3열 구조
- [x] Recipe Result 구조
- [x] Director DNA 구조
- [x] 모바일 결과 고정 바 정의

## Phase 3 — 디자인 시스템
- [x] Obsidian / Gold 토큰
- [x] 공통 헤더·푸터
- [x] Signal badge
- [x] Score panel
- [x] 접근성 focus 상태
- [x] reduced motion

## Phase 4 — Next.js 구현
- [x] Next.js App Router scaffold
- [x] TypeScript strict
- [x] Tailwind CSS
- [x] Home 구현
- [x] Recipe Builder 구현
- [x] Recipe Result 구현
- [x] Trends 구현
- [x] Directors 구현
- [x] Methodology 구현
- [x] 한국어 UI 전환

## Phase 5 — QA
- [ ] npm install 후 실제 빌드 검증
- [ ] ESLint 검증
- [ ] TypeScript 검증
- [ ] 375px / 768px / 1440px 시각 검증
- [ ] 키보드 탐색 검증
- [ ] Lighthouse 성능/접근성 확인

## Phase 6 — 첫 Vercel Preview
- [ ] GitHub 저장소에 ZIP 내용 업로드
- [ ] Vercel 프로젝트 연결
- [ ] Preview Build 성공 확인
- [ ] 모바일 실기기 확인

## Phase 7 — MVP 확장
- [x] 장면 단위 Evidence Drawer
- [ ] 감독 상세 페이지
- [x] 레시피 URL 저장/공유
- [~] 원본 장면 이미지 사용 정책 확정 — alpha.2에서는 프레임 미포함, 공개 배포 전 권한 검토 필요
- [ ] 필요 시 Supabase 도입


## alpha.2 자체 점검
- [x] Result → Evidence Drawer 진입점 추가
- [x] 기법별 대표 타임코드 필터링
- [x] Escape 닫기 / backdrop 닫기 / 초기 focus 처리
- [x] 모바일 Bottom Sheet 대응
- [x] PDF에 없는 장면 데이터 임의 생성 방지
- [ ] Vercel Preview에서 실제 브라우저 시각 QA


## v1.0.0-alpha.3
- [x] pathname 기반 활성 내비게이션
- [x] Recipe 하위 경로(`/recipes/build`, `/recipes/result`, `/recipes/saved`)를 하나의 활성 메뉴로 처리
- [x] 데스크톱 Header / Hero / Builder / Result / Trend 테이블 밀도 보정
- [x] 결과 페이지 공유 링크 복사
- [x] 레시피 LocalStorage 저장/삭제
- [x] 저장된 레시피 목록 페이지
- [x] 키보드/포커스/aria-current 코드 점검
- [x] TypeScript/TSX syntax 점검
- [x] ZIP 패키징


## alpha.3 자체 점검
- [x] Header의 기존 hard-coded `레시피 빌더` 강조 제거
- [x] pathname별 `aria-current=page` 적용
- [x] Result → Builder 수정 시 전체 5축 query 유지
- [x] 공유 URL canonical query 생성
- [x] LocalStorage JSON 오류 시 안전하게 빈 목록 처리
- [x] 저장 목록 초기 hydration 상태 분리
- [x] TS/TSX 20개 파일 syntax transpile 검사 통과
- [x] `@/` 로컬 import 대상 존재 여부 검사 통과
- [ ] Vercel Production Build 재검증
- [ ] 실제 1440px 데스크톱 시각 QA

## v1.0.0-alpha.4 — 온보딩 / 사용자 가이드
- [x] `/guide` 라우트 추가
- [x] 상단 내비게이션에 `사용자 가이드` 추가
- [x] Home Hero 목적 설명 강화
- [x] Home 첫 방문 4단계 흐름 추가
- [x] Guide 5단계 Quick Start 추가
- [x] Recipe 01–03 인터랙티브 샘플 추가
- [x] Guide에서 샘플 → Builder query 전달
- [x] Production Fit 4개 지표 설명
- [x] `포화도 안전성` 용어 정리
- [x] SAFE / TRENDING / EXPERIMENTAL 설명
- [x] Evidence 읽는 법 추가
- [x] LocalStorage 저장 / 공유 URL 설명
- [x] Builder 인라인 온보딩 추가
- [x] Score Panel 가이드 진입점 추가
- [ ] Vercel 재배포 후 `/guide` 실제 1440px 시각 QA
- [ ] 가이드 → 샘플 → 결과 전체 클릭 플로우 QA

## alpha.4 자체 점검
- [x] TS/TSX 22개 파일 syntax transpile 검사 통과
- [x] `@/` 로컬 alias import 대상 존재 여부 검사 통과
- [x] 샘플 3종 등급 검증: Safe 79 / Trending 84 / Experimental 80
- [x] `/guide`, `#demo`, `#score`, `#evidence`, `#share` 진입 경로 확인
- [x] Header 일반 메뉴와 Recipe CTA 분리 확인
- [x] `포화 리스크` 사용자-facing 표기를 `포화도 안전성`으로 정리
- [ ] Vercel Production Build 재검증
- [ ] 실제 1440px 데스크톱 시각 QA

### 자체 평가
**9.7 / 10** — 처음 방문자의 이해 흐름과 실습 경로는 크게 개선되었습니다. 남은 점수는 Vercel 실제 렌더링에서의 타이포그래피·여백·헤더 폭과 브라우저별 빌드 검증에 해당합니다.
