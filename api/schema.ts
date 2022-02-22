import { makeSchema } from "nexus";
import { join } from 'path';

import * as types from './graphql';

export const schema = makeSchema({
    types,
    outputs: {
        schema: join(process.cwd(), "schema.graphql"), //nexus generated, defining our API structure
        typegen: join(process.cwd(), "nexus-typegen.ts"), //TypeScript type definitios for graphql schema
    },
    contextType: {
        module: join(process.cwd(), "./context.ts"),
        export: "Context",
    },
})