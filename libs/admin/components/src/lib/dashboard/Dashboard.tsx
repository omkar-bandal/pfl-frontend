import { useGetDepartmentById } from '@prime-fresh/shared/modules';
import React from 'react'

export const DashboardAdmin = () => {
  const deptId = localStorage.getItem('department');
  const { data } = useGetDepartmentById(deptId || '');
  console.log(data?.data);
  return (
    <div>Dashboard</div>
  )
}
