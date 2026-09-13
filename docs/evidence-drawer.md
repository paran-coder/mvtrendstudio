# Evidence Drawer 사양

버전: v1.0.0-alpha.3

## 목적

Recipe Result의 점수와 추천을 “왜 그런가?”까지 추적할 수 있도록 원본 리포트에 명시된 대표 장면·타임코드를 연결합니다.

## 데이터 범위

현재 버전은 `MV Production Trend Report`의 Recipe 01–03에 직접 표기된 대표 장면만 사용합니다. 전체 364개 장면 데이터가 서비스에 들어온 것으로 간주하지 않습니다.

## UI

### Desktop

- 오른쪽에서 최대 620px Drawer
- 배경 dim + 가벼운 blur
- 기법별 그룹
- 장면 카드: 아티스트 / MV / 구간 / 타임코드 / 리포트 페이지

### Mobile

- 하단 Bottom Sheet
- 최대 높이 88dvh
- 내부 스크롤
- 닫기 버튼과 backdrop 클릭, Escape 지원

## 이미지 정책

현재는 원본 영상 프레임을 프로젝트에 복제하지 않습니다. `FRAME 01` 형태의 시각 placeholder를 사용합니다. 향후 썸네일/프레임을 실제 서비스에 포함하려면 사용 권한, 출처 표시, 저장 방식 정책을 먼저 확정합니다.

## 언어 정책

버튼, 설명, 상태 설명은 한국어를 기본으로 합니다. `Match Cut`, `Rack Focus`, `Neon Y2K Cyber Romance`처럼 원본 리포트의 제작 식별자는 영문을 유지합니다.
