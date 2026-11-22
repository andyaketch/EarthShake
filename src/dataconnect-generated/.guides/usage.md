# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { listEarthquakes, upsertMember, upsertEarthquake } from '@dataconnect/generated';


// Operation ListEarthquakes: 
const { data } = await ListEarthquakes(dataConnect);

// Operation UpsertMember:  For variables, look at type UpsertMemberVars in ../index.d.ts
const { data } = await UpsertMember(dataConnect, upsertMemberVars);

// Operation UpsertEarthquake:  For variables, look at type UpsertEarthquakeVars in ../index.d.ts
const { data } = await UpsertEarthquake(dataConnect, upsertEarthquakeVars);


```