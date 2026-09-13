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

현재 alpha.2는 외부 DB나 필수 환경변수가 없습니다.


## alpha.2에서 확인할 화면

`/recipes/result`에서 기본 예시 조합이 표시됩니다. `장면 근거 보기`를 누르면 데스크톱에서는 우측 Drawer, 모바일에서는 Bottom Sheet가 열립니다.

Vercel 첫 배포 후 URL 또는 화면 캡처를 전달하면 실제 렌더링 기준으로 간격, 타이포그래피, 모바일 breakpoint, Drawer 높이를 추가 조정합니다.
