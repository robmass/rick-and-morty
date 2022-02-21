import { Error, ErrorProps } from '@/components/error';
import type { Meta, Story } from '@storybook/react';

export default { title: 'Components/Error', component: Error } as Meta;

export const ErrorStory: Story<ErrorProps> = ({ error }) => <Error error={error} />;
ErrorStory.args = {
  error: 'errore',
};
