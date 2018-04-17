# TS Boilerplate

TypeScript + TSlint + Prettier + [TypeStrict](https://github.com/krzkaczor/TypeStrict)

## Using

```
yarn test:fix   # to run all possible checks (linter, formatter, tests) and try autofix errors
```

Boilerplate comes with `tslint-language-service` plugin which allows you to see linter problems that would likely
produce bugs directly in the IDE. To use it make sure to
[switch](https://github.com/angelozerr/tslint-language-service#editors-support) project's typescript compiler in you
IDE.
