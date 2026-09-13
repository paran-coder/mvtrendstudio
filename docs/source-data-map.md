# 리포트 데이터 매핑

기준 문서: `mv-production-trend-report.pdf`

현재 MVP는 PDF에 명시적으로 노출된 집계값만 사용합니다. PDF에 없는 장면 단위 원천 레코드나 조합 확률을 임의로 생성하지 않습니다.

## Home / Trend Radar

- Pan: 2025 26.0% → 2026 50.0%, +24.0%p — p.2
- Match Cut: 4.1% → 26.1%, +22.0%p — p.2
- High Saturation: 17.8% → 30.4%, +12.6%p — p.2
- Slow Zoom: 15.1% → 26.1%, +11.0%p — p.2
- Cyan Dominant: 58.9% → 37.0%, -21.9%p — p.2

## 콘셉트 모멘텀

- 로맨스·내러티브: 11.0% → 26.1%, +15.1%p — p.3
- 디스토피아·인더스트리얼: 28.8% → 34.8%, +6.0%p — p.3
- 사이버·디지털: 13.7% → 19.6%, +5.9%p — p.3

## 컬러

- 모노크롬·무채색 100.0% — p.5
- 블루 84.8% — p.5
- 오렌지 76.1% — p.5
- 레드 71.7% — p.5

## Recipe seed

- Neon Y2K Cyber Romance × Handheld Tracking × Slow Motion — p.14
- Existential Museum of Human History × Pan × Whip Pan — p.16
- Surreal Industrial Dystopia × Rack Focus × Dolly Push-in — p.18

## 감독 DNA

- YVNG WING — p.8, p.11
- HANBAGO (Hangyeol Lee) — p.8, p.12
- Bang Jae Yeob — p.8, p.13
- Tanu Muino — p.8

## 제품 내부 파생값

다음 값은 원본 리포트의 공식 데이터가 아니라 서비스 설계를 위해 추가한 내부 값입니다.

- Production Fit / 100
- Evidence 내부 점수
- Novelty 내부 점수
- Coherence 내부 점수
- Saturation Risk 내부 점수
- Safe / Trending / Experimental 분류 로직

UI에서는 원본 리포트 수치와 이 내부 파생값을 서로 다른 레이어로 표시합니다.
