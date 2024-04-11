## Route Group
- () 로 네이밍한 폴더는 URL에 포함되지 않는다.
- 하지만 컴포넌트를 그룹으로 묶을 수 있다.

## Metadata
- 페이지의 <head>에 들어갈 내용을 지정할 수 있다.
- metadata는 url 루트로 올라가면서 모두 적용되지만, 각 metadat는 하나의 객체로 병합된다.
- template (%s) 을 사용해서 어떻게 merge될지 결정할 수 있다.
```javascript
title: {
    template: "title is %s | Home",
    default: "Next Movies"
}
```
- Page나 Layout에서만 메타데이터를 지정할 수 있다.
- Server Component에서만 메타데이터를 지정할 수 있다.

## Dynamic Routes
- '[id]' 로 폴더 이름을 만들고, page.tsx 파일을 넣으면 다이나믹 루트가 된다.
- 페이지에서는 props 으로 id 자리에 들어간 데이터를 얻을 수 있다.
- props 안에는 url의 데이터가 들어간 params와, 쿼리 파라미터가 들어있는 search params이 있다.
