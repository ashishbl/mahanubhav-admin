import React from 'react';
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Select,
  Input,
  Card,
  CardBody,
  Pagination,
} from '@windmill/react-ui';

import useAsync from '../../../hooks/useAsync';
import useFilter from '../../../hooks/useFilter';
import NotFound from '../../table/NotFound';
import OrderServices from '../../../services/OrderServices';
import Loading from '../../preloader/Loading';
import MahuratTable from './MahuratTable';

const VivahMahurat = ({ category }) => {
  return (
    <TableContainer className="mb-8">
      <Table>
        <TableHeader>
          <tr>
            <TableCell>तारीख</TableCell>
            <TableCell>सुरवातीची वेळ</TableCell>
            <TableCell>समाप्तीचा कालावधी</TableCell>
            <TableCell ></TableCell>
          </tr>
        </TableHeader>
        <MahuratTable category={category} />
      </Table>
    </TableContainer>
  );
};

export default VivahMahurat;
