import { FC, PropsWithChildren } from 'react';

import { useStoreApi } from '../../hooks/useStore';
import ReactFlowProvider from '../../components/ReactFlowProvider';

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  let isWrapped = true;

  try {
    useStoreApi();
  } catch (e) {
    isWrapped = false;
  }

  if (isWrapped) {
    // we need to wrap it with a fragment because it's not allowed for children to be a ReactNode
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051
    return <>{children}</>;
  }

  return <ReactFlowProvider>{children}</ReactFlowProvider>;
};

Wrapper.displayName = 'ReactFlowWrapper';

export default Wrapper;
