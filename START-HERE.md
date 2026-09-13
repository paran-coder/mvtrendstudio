# START HERE

## 가장 빠른 확인 방법

빌드 없이 화면 방향만 확인하려면:

```text
preview/index.html
```

을 브라우저에서 엽니다. 홈 화면과 레시피 빌더 미리보기를 클릭해서 전환할 수 있습니다.

## 실제 Next.js 실행

```bash
npm install
npm run dev
```

## GitHub → Vercel

1. 이 ZIP의 압축을 풉니다.
2. 폴더 안의 전체 파일을 GitHub 저장소 루트에 업로드합니다.
3. Vercel에서 저장소를 Import합니다.
4. Next.js 자동 설정을 그대로 사용해 배포합니다.

현재 alpha.4는 외부 DB나 필수 환경변수가 없습니다.


## alpha.4에서 먼저 확인할 화면

1. `/` — Hero에서 서비스 목적이 바로 이해되는지, `3분 가이드` 진입점이 보이는지
2. `/guide` — 5단계 설명과 샘플 Recipe 전환이 자연스러운지
3. `/guide#score` — Production Fit 4개 지표 설명이 이해되는지
4. `/recipes/build` — `5가지만 선택하세요` 온보딩과 3열 Builder가 자연스러운지
5. `/recipes/result` — Score Panel의 `?`가 `/guide#score`로 연결되는지

이번 버전은 모바일 폴리싱 전에 **데스크톱 온보딩과 사용법 완성**을 우선합니다. `/guide`를 확인한 뒤 샘플 레시피를 Builder로 넘기고 Result까지 한 번의 흐름으로 테스트하는 것을 권장합니다.
