import React from 'react';
import { Helmet } from 'react-helmet';
import { withQueryParams, StringParam, BooleanParam, JsonParam, withDefault } from 'use-query-params';
import ExampleRunnerResult from '../components/example-runner/ExampleRunnerResult';
import { useExampleFileNodes } from '../components/example-runner/use-example-file-nodes';
import { getExampleInfo } from '../components/example-runner/helpers';

const ExampleRunnerPage = ({ query: { pageName, library, framework, useFunctionalReact, importType, name, title, type, options } }) => {
    const nodes = useExampleFileNodes();
    const exampleInfo = getExampleInfo(nodes, library, pageName, name, title, type, options, framework, importType, useFunctionalReact);

    return <div style={{ height: '100vh', width: '100%' }}>
        <Helmet title={title} />
        <ExampleRunnerResult isVisible={true} exampleInfo={exampleInfo} />
    </div>;
};

export const ParameterConfig = {
    pageName: StringParam,
    library: StringParam,
    framework: StringParam,
    useFunctionalReact: BooleanParam,
    importType: StringParam,
    name: StringParam,
    title: StringParam,
    type: StringParam,
    options: withDefault(JsonParam, {}),
};

export default withQueryParams(ParameterConfig, ExampleRunnerPage);