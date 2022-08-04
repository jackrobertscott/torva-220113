# torva

TypeScript validation library.

```ts
import {io, TypeIoValue} from 'torva'
/**
 *
 */
export const ioUser = io.object({
  id: io.string(),
  created: io.date(),
  updated: io.date(),
  admin: io.optional(io.boolean()),
  firstName: io.string(),
  lastName: io.string(),
  email: io.string(),
  password: io.optional(io.string()),
  avatarUrl: io.optional(io.string().trim()),
  bio: io.optional(io.string().emptyok().trim()),
  termsAccepted: io.boolean(),
})
/**
 *
 */
export type TypeUser = TypeIoValue<typeof ioUser>
```

Made By Jack