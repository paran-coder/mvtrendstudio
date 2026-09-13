# GitHub / Vercel 배포 구조

## 저장소

권장 저장소명: `mv-trend-studio`

```text
main          Vercel Production
feature/*     Vercel Preview
```

사용자가 GitHub에 파일을 직접 업로드하는 운영 방식을 전제로 합니다.

## 데이터

첫 MVP는 `data/report.ts`에 정적 리포트 파생 데이터를 둡니다.

장점:
- DB 자격증명 불필요
- Preview 배포가 단순함
- 원본 리포트와 수치 대조가 쉬움
- 초기 UX 검증 전 인프라 과투자를 피할 수 있음

## Vercel 제약 대응

- 런타임 로컬 파일 쓰기 없음
- 별도 Docker 없음
- 불필요한 `vercel.json` 없음
- 환경변수 없이 첫 배포 가능
- 서버 컴포넌트를 기본으로 하고 상호작용 화면만 Client Component 사용

## 추후 DB 전환 조건

다음 기능이 필요해질 때 Supabase/PostgreSQL을 추가합니다.

- 사용자 로그인
- 레시피 저장
- 프로젝트 공유
- 정기 데이터 업데이트
- 팀별 즐겨찾기 / 코멘트
