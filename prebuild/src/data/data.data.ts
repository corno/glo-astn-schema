import * as pd from 'pareto-core-data'

import * as gliana from "lib-liana/dist/main"

import { $ as schema } from "./models/schema.data"

export const $: gliana.T.CompileParameters<pd.SourceLocation> = {
    'outputs': pd.a([
        {
            'path': `../../pareto/src/data/glossary.generated.ts`,
            'data': {
                'settings': {
                    'datamodel': [true, {
                        'annotations': true,
                        'properties optional': false,
                        'reference mapping': ['string', null],
                    }],
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                },
                'mapped model': {
                    'model': schema,

                    'terminal mapping': pd.d({
                        "identifier": ['string', null],
                        "boolean": ['boolean', null],
                    }),
                },
            }
        }
    ])
}