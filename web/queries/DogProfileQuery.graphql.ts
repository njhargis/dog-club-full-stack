/**
 * @generated SignedSource<<500269faff0f49098157e7f5bfad70d7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DogProfileQuery$variables = {
  name: string;
};
export type DogProfileQuery$data = {
  readonly dog: {
    readonly id: string;
    readonly name: string | null;
  } | null;
};
export type DogProfileQuery = {
  variables: DogProfileQuery$variables;
  response: DogProfileQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "concreteType": "Dog",
    "kind": "LinkedField",
    "name": "dog",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DogProfileQuery",
    "selections": (v1/*: any*/),
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DogProfileQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f9bbe6698cd508940ed45fccc35de685",
    "id": null,
    "metadata": {},
    "name": "DogProfileQuery",
    "operationKind": "query",
    "text": "query DogProfileQuery(\n  $name: String!\n) {\n  dog(name: $name) {\n    id\n    name\n   }\n}\n"
  }
};
})();

(node as any).hash = "a5ccee5ad3f62c9ab9cce575c77e3c66";

export default node;
