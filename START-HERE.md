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

현재 alpha.3는 외부 DB나 필수 환경변수가 없습니다.


## alpha.3에서 확인할 화면

`/trends`, `/recipes/build`, `/directors`, `/methodology`로 이동할 때 상단 활성 메뉴가 현재 페이지에 맞게 바뀌는지 먼저 확인합니다. `/recipes/result`에서는 `레시피 저장`, `공유 링크 복사`, `저장 목록` 기능도 확인할 수 있습니다.

이번 버전은 데스크톱 UI 보정을 우선 적용했습니다. Vercel 재배포 후 데스크톱 화면을 먼저 확인하고, 그 다음 모바일 breakpoint와 Bottom Sheet 높이를 조정합니다.
