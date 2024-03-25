# AmbuLib-BE

## Configuration

Edit config in .env file or config in database (username, password, database).

## Folders

```js
+-- dist // Source build
+-- src
|   +-- api // all API module
|   |   +-- Module
|   |   |   +-- dto // define object type
|   |   |   +-- validator // validate
|   |   |   +-- file.controller.ts
|   |   |   +-- file.module.ts
|   |   |   +-- file.repository.ts
|   |   |   +-- file.service.ts
|   +-- assets // all static file (font, image)
|   |   +-- font
|   |   +-- image
|   +-- common // use in anywhere
|   |   +-- constants // Constant value and Enum
|   |   +-- context // Nest context use in session of nestJS lifecycle
|   |   +-- emailTemplate // emailTemplate
|   |   +-- filters // Nest Filters
|   |   +-- guards // Nest Guards
|   |   +-- helpers // Provide support or aid to other parts of the program
|   |   +-- interfaces // TypeScript Interfaces
|   |   +-- middleware // Nest Middleware
|   |   +-- utils // use in anywhere
|   |   +-- * // models, repositories, services...
|   +-- database // database
|   |   +-- seedData // After migration:runall to create db structure, we will seed data
|   |   +-- storeProcedures // Use for all module
|   |   +-- entities // entities

```

## Documentation

```sh
yarn

yarn start:dev
```

### File/Folder Naming

```ts
file.ts; // file naming apply camelCase standard
userCommand; // folder naming apply camelCase standard
```

### Class Naming

```ts
export class PascalCaseSuffix {} //= pascalCase.suffix.ts
class FooBarNaming {}
class FooController {}
class BarQueryDto {}
```

### Interface Naming

```ts
interface User {}
interface CustomeUser extends User {}
interface ThirdCustomeUser extends CustomeUser {}
```

### Index Exporting

```diff
# It is recommended to place index.ts in each folder and export.
# Unless it's a special case, it is import from a folder instead of directly from a file.
- import { FooController } from './controllers/foo.controller';
- import { BarController } from './controllers/bar.controller';
+ import { FooController, BarController } from './controllers';
# My preferred method is to place only one fileOrFolder name at the end of the path.
- import { UtilService } from '../common/providers/util.service';
+ import { UtilService } from '../common';
```

#### Circular dependency

<https://docs.nestjs.com/fundamentals/circular-dependency>

```diff
# Do not use a path that ends with a dot.
- import { FooService } from '.';
- import { BarService } from '..';
+ import { FooService } from './foo.service';
+ import { BarService } from '../providers';
```

### Variables Naming

```ts
const user = 'user';

const userName = 'userName'; // camelCase
```

### Function Naming

```ts
export const thisFunction = async (input: string): Promise<boolean> { return true }; // camelCase
```
