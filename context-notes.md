# MV Trend Studio — Context Notes

버전: **v1.0.0-alpha.2**  
목표 릴리스: **v1.0.0**

## 제품 정의

MV Trend Studio는 K-pop 뮤직비디오의 콘셉트·컬러·카메라·모션·편집 트렌드를 제작 의사결정으로 연결하는 크리에이티브 인텔리전스 서비스입니다.

핵심 질문은 하나입니다.

> 다음 뮤직비디오를 무엇으로 만들 것인가?

## 주요 사용자

1. MV 감독 / 연출팀
2. 프로덕션 / 프리프로덕션 팀
3. 기획사 비주얼·크리에이티브 팀

## 제품 원칙

- 보고서를 웹으로 그대로 복제하지 않습니다.
- 신호(Signal), 의사결정(Decision), 근거(Evidence)를 분리합니다.
- 원본 리포트의 수치와 서비스 내부 점수를 혼동하지 않습니다.
- 한국어를 기본 UI 언어로 사용합니다.
- 업계에서 널리 쓰이는 기법명과 고유 콘셉트명은 영문을 유지할 수 있습니다.
- 애니메이션은 상태 변화 설명에만 사용하며 `prefers-reduced-motion`을 지원합니다.

## 현재 구현 범위

- Home / Trend Radar
- Recipe Builder
- Recipe Result
- Trends
- Director DNA
- Methodology
- 정적 리포트 기반 데이터
- 클라이언트 사이드 Production Fit 평가
- Recipe Result 장면 Evidence Drawer
- PDF Recipe 01–03 대표 타임코드 연결

## 배포 전제

- GitHub에 사용자가 직접 업로드
- Vercel에서 GitHub 저장소 연결
- `main` → Production
- feature branch / PR → Preview
- 런타임 로컬 파일 쓰기 없음
- 현재 버전에서는 DB/인증 없음

## UI 방향

- Obsidian Black 기반
- Warm Gold 포인트
- 큰 데이터 숫자와 타이포그래피 대비
- 얇은 보더, 절제된 글로우
- 데스크톱은 제작 콘솔, 모바일은 단일 컬럼 + 고정 결과 바

## 언어 정책

사용자-facing 문구는 한국어 우선입니다. `Pan`, `Match Cut`, `Controlled Saturation`, `Neon Y2K Cyber Romance` 등 원문 분석 용어는 데이터 식별성을 위해 영문을 유지합니다. 기술 문서의 코드 경로·타입명·변수명은 영어로 유지합니다.


## Evidence 정책 — alpha.2

- 현재 PDF에서 직접 확인 가능한 대표 장면/타임코드만 서비스 데이터로 사용합니다.
- 리포트에 없는 전체 장면 목록을 추정해 채우지 않습니다.
- 장면 이미지/영상 프레임은 사용 권한 정책 확정 전까지 placeholder로 유지합니다.
- Evidence Drawer는 데스크톱 우측 Drawer, 모바일 Bottom Sheet로 동작합니다.
