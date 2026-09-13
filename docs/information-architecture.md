# 정보 구조

버전: **v1.0.0-alpha.4**

## 핵심 흐름

```text
Home / 첫 방문 온보딩
      ↓
Guide (선택: 3분 학습 / 샘플 실습)
      ↓
Trend Radar
      ↓
Recipe Builder
      ↓
Recipe Result
      ├─ Evidence Drawer
      ├─ Saved Recipes
      └─ Director DNA / Methodology
```

## 현재 라우트

```text
/                       홈 / Trend Radar
/guide                  3분 사용자 가이드 + 샘플 Recipe
/trends                 트렌드 전체
/recipes/build          레시피 빌더
/recipes/result         생성 결과
/recipes/saved          브라우저에 저장된 레시피
/directors              감독 DNA
/methodology            분석 방법
```

## 주요 딥링크

```text
/guide#demo             샘플 Recipe 실습
/guide#score            Production Fit 읽는 법
/guide#evidence         장면 근거 읽는 법
/guide#share            저장·공유 설명
```

## 추후 라우트

```text
/directors/[slug]       감독 상세
/evidence/[id]          근거 장면 상세 또는 Drawer 기반 표현
```
