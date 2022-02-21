import { Pagination, PaginationProps } from '@/components/pagination';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = ({ pageCount, actualPage, handlePageChange }) => (
  <Pagination pageCount={pageCount} actualPage={actualPage} handlePageChange={handlePageChange} />
);

export const FirstPageSelected = Template.bind({});
FirstPageSelected.args = {
  actualPage: 1,
  pageCount: 30,
  handlePageChange: (page) => console.log(`Selected page ${page}`),
};

export const LastPageSelected = Template.bind({});
LastPageSelected.args = {
  actualPage: 50,
  pageCount: 50,
  handlePageChange: (page) => console.log(`Selected page ${page}`),
};

export const MiddlePageSelected = Template.bind({});
MiddlePageSelected.args = {
  actualPage: 22,
  pageCount: 50,
  handlePageChange: (page) => console.log(`Selected page ${page}`),
};
