# 온보딩 / 사용자 가이드 설계

버전: **v1.0.0-alpha.4**

## 목표

처음 방문한 사용자가 5초 안에 서비스 목적을 이해하고, 3분 안에 첫 Recipe Result까지 도달하도록 한다.

## 5초 메시지

- 입력: 2025 대비 2026 YTD K-pop MV 트렌드
- 행동: 콘셉트·컬러·카메라·모션·편집 조합
- 출력: Production Fit + 전략 등급 + 실제 장면 타임코드

## 3분 흐름

1. 트렌드 확인
2. 5개 제작 축 조합
3. Production Fit 확인
4. Evidence 타임코드 검증
5. 저장 또는 공유

## 인라인 온보딩

- Home: `처음 사용하시나요? 3분 가이드 보기`
- Builder: `5가지만 선택하세요`
- Score Panel: `?` → `/guide#score`
- Footer: 사용자 가이드 상시 링크

## 샘플 학습

원본 리포트 Recipe 01–03의 방향을 제품 데이터셋 안에서 표현 가능한 기법으로 구성한다.

- 안전한 조합: Neon Y2K Cyber Romance / Controlled Saturation / Handheld Tracking / Slow Motion / Match Cut
- 지금 뜨는 조합: Existential Museum of Human History / Controlled Saturation / Pan / Whip Pan / Match Cut
- 차별화 조합: Surreal Industrial Dystopia / Controlled Saturation / Rack Focus / Dolly Push-in / Screen in Screen

샘플 선택 시 Production Fit을 실시간 계산하고, CTA로 동일 query를 Recipe Builder에 전달한다.
