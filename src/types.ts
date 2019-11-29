export enum MappingType {
  equal = 'equal',
  eval = 'eval'
}

interface MappingResponse {
  body: any;
}

export interface Mapping {
  name: string;
  type: MappingType;
  response: MappingResponse;
}

interface EqualMappingRequest {
  url: string;
  method: string;
}

export interface EqualMapping extends Mapping {
  request: EqualMappingRequest;
}

export interface EvalMapping extends Mapping {
  function: string;
}
