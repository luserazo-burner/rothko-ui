import { ArrowCircleUp } from '@rothko-ui/icons';
import { Button, Container, MaxWidth, Modal } from '@rothko-ui/ui';
import { useReducer, useState } from 'react';
import { useIsMobileOrTablet } from '../../../hooks/useIsMobileOrTablet';
import Card from '../Card';
import { CodeLanguage } from '../CodeExample';
import ModalCustomizations, { customizationsReducer } from './Customizations';
import modalCopy from './copy';
import modalProps from './props';

const EXAMPLE_LOOKUP: Record<CodeLanguage, string> = {
  [CodeLanguage.TS]: `
  import { BreadCrumbs, BreadCrumbItem } from '@rothko-ui/ui';

  const Example = () => {
    return (
      <BreadCrumbs>
        <BreadCrumbItem to="ok">One</BreadCrumbItem>
        <BreadCrumbItem onClick={() => console.log('two clicked!')}>Two</BreadCrumbItem>
        <BreadCrumbItem>Three</BreadCrumbItem>
      </BreadCrumbs> 
    );
  }
`,
  [CodeLanguage.JS]: `
  import { BreadCrumbs, BreadCrumbItem } from '@rothko-ui/ui';

  const Example = () => {
    return (
      <BreadCrumbs>
        <BreadCrumbItem to="ok">One</BreadCrumbItem>
        <BreadCrumbItem onClick={() => console.log('two clicked!')}>Two</BreadCrumbItem>
        <BreadCrumbItem>Three</BreadCrumbItem>
      </BreadCrumbs> 
    );
  }
`,
};

const ModalCard = () => {
  const [open, setOpen] = useState(false);
  const isMobileOrTablet = useIsMobileOrTablet();
  const [state, dispatch] = useReducer(customizationsReducer, {
    size: 'm',
    title: 'Testing',
    body: 'Modal',
  });
  const { size, body, title } = state;
  return (
    <Card
      copy={modalCopy}
      codeSnippet={{ examplesLookup: EXAMPLE_LOOKUP }}
      propsMeta={{ meta: modalProps }}
    >
      <MaxWidth maxW="26rem">
        <ModalCustomizations state={state} dispatch={dispatch} />
      </MaxWidth>
      <Container maxWidth={isMobileOrTablet ? undefined : '26rem'} marginTop="2rem">
        <Button
          accessoryLeft={({ size, color }) => (
            <ArrowCircleUp
              style={{ marginRight: '0.5rem' }}
              width={size}
              height={size}
              fill={color}
            />
          )}
          kind="danger"
          onClick={() => setOpen(true)}
        >
          Open modal
        </Button>
      </Container>
      <Modal size={size} title={title} isOpen={open} onClose={() => setOpen(false)}>
        {body}
      </Modal>
    </Card>
  );
};

export default ModalCard;
