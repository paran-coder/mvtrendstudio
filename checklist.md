# MV Trend Studio — Checklist

버전: **v1.0.0-alpha.1**

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
- [ ] 장면 단위 Evidence Drawer
- [ ] 감독 상세 페이지
- [ ] 레시피 URL 저장/공유
- [ ] 원본 장면 이미지 사용 정책 확정
- [ ] 필요 시 Supabase 도입
