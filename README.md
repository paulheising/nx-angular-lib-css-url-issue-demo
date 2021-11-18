Steps to reproduce the issue:

- `nx build demo-lib`
- Inspect built lib-bundle (search for "background-image") => you'll find a data url (inlined svg)
- `nx build demo-app`
- Inspect built app-bundle (search for "background-image") => you'll find the image actually referenced via file name. The svg file is also inside the dist directory. But the `cssUrl: "inline"` switch inside the lib's ng-package.json was obviously not respected.
