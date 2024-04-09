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
