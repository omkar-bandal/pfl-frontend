/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { useActions } from '@prime-fresh/modules';
import { toastNotificationText } from '@prime-fresh/shared/modules';
import { TableNavActionsConfig } from '../models';
import {toast} from '../../ToastProvider';

export const useTableActions = (apiRef: any, config: TableNavActionsConfig) => {
  const navigate = useNavigate();
  const { openDialog } = useActions();
  const { createPath, editPath, viewPath, tableId } = config;

  const handleCreate = () => navigate(createPath);

  const handleEdit = editPath
    ? () => {
        const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
        if (selectedRows.length === 0) {
          toast.info(toastNotificationText.EDIT_WITHOUT_SELECT);
        } else if (selectedRows.length > 1) {
          toast.info(toastNotificationText.EDIT_WITH_MULTI_SELECT);
        } else {
          const selectedId = selectedRows[0];
          navigate(`${editPath}/${selectedId}`);
        }
      }
    : undefined;

  const handleEditByDocumentId = editPath
    ? () => {
       const selectedRows: any = Array.from(apiRef.current.getSelectedRows().values());
        if (selectedRows.length === 0) {
          toast.info(toastNotificationText.EDIT_WITHOUT_SELECT);
        } else if (selectedRows.length > 1) {
          toast.info(toastNotificationText.EDIT_WITH_MULTI_SELECT);
        } else {
          const selectedId = selectedRows[0].documentId;
          navigate(`${editPath}/${selectedId}`);
        }
      }
    : undefined;

  const handleView = viewPath
    ? () => {
        const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
        if (selectedRows.length === 0) {
          toast.info(toastNotificationText.VIEW_WITHOUT_SELECT);
        } else if (selectedRows.length > 1) {
          toast.info(toastNotificationText.VIEW_WITH_MULTI_SELECT);
        } else {
          const selectedId = selectedRows[0];
          navigate(`${viewPath}/${selectedId}`);
        }
      }
    : undefined;

  const handleViewByDocumentId = () => {
    const selectedRows: any = Array.from(apiRef.current.getSelectedRows().values());
    if (selectedRows.length === 0) {
      toast.info(toastNotificationText.VIEW_WITHOUT_SELECT);
    } else if (selectedRows.length > 1) {
      toast.info(toastNotificationText.VIEW_WITH_MULTI_SELECT);
    } else {
      const selectedId = selectedRows[0].documentId;
      navigate(`${viewPath}/${selectedId}`);
    }
  };

  const handleDelete = () => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info(toastNotificationText.DELETE_WITHOUT_SELECT);
    } else {
      openDialog({ key: tableId });
    }
  };

  return {
    handleCreate,
    handleEdit,
    handleEditByDocumentId,
    handleView,
    handleViewByDocumentId,
    handleDelete,
  };
};
