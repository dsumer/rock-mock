import React from 'react';
// TODO send mappings from server
import mappings from './mappings.json';
import { Mapping, MappingType, EqualMapping, EvalMapping } from './types';

const Mappings: Mapping[] = mappings;

interface EqualMappingProps {
  mapping: EqualMapping;
}

const EqualMappingEditor = (props: EqualMappingProps) => {
  const { mapping } = props;

  return <div>Eq: {mapping.name}</div>;
};

interface EvalMappingProps {
  mapping: EvalMapping;
}

const EvalMappingEditor = (props: EvalMappingProps) => {
  const { mapping } = props;

  return <div>Ev: {mapping.name}</div>;
};

const App = () => {
  return (
    <div>
      {Mappings.map(mapping => {
        switch (mapping.type) {
          case MappingType.equal:
            return <EqualMappingEditor mapping={mapping as EqualMapping} />;
          case MappingType.eval:
            return <EvalMappingEditor mapping={mapping as EvalMapping} />;
        }
        return <>Unkown mapping type: {mapping.type}</>;
      })}
    </div>
  );
};

export default App;
