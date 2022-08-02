
# fastify-uuid

A module for Fastify to Generate RFC-compliant UUIDs


## Usage/Examples

```javascript
import fastify from 'fastify'
import fastifyUUID from 'fastify-uuid'

const app = fastify()
app.register(fastifyUUID)

app.get('/', () => {
  return app.uuid.v4()
})

app.listen({ port: 8000 }, (err, address) => {
  if (err) throw err
  console.log(`server running on ${address}`)
})
```


## API Reference

Read more at [https://github.com/uuidjs/uuid](https://github.com/uuidjs/uuid)
