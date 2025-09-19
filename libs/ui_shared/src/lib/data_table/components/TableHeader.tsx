import { FC, memo, useMemo } from 'react';
import { Grid2 } from '@mui/material';
import { BtnSmall } from '../../buttons';
import { KeyboardArrowDown } from '@mui/icons-material';
import { ActionMenu } from '../action-menu';
import { PageTitle, SearchBox } from '../../ui';
import { TableButtonConfig } from '../models';

type TableHeaderProps = {
  isMobile: boolean;
  pageTitle: string;
  buttonConfig: TableButtonConfig[];
  searchText: string | null;
  setSearchText: any;
  actionMenu: HTMLElement | null;
  openActionMenu: boolean;
  onOpenActionMenu: any;
  onCloseActionMenu: any;
};
export const TableHeader: FC<TableHeaderProps> = memo(
  ({
    isMobile = false,
    pageTitle,
    buttonConfig,
    actionMenu = null,
    openActionMenu = false,
    onOpenActionMenu,
    onCloseActionMenu,
    searchText = null,
    setSearchText,
  }: TableHeaderProps) => {
    const filteredButtonConfigs = useMemo(
      () => buttonConfig.filter((config) => config.visible === true),
      [buttonConfig]
    );
    return (
      <Grid2 container spacing={2} marginY={1}>
        <Grid2 size={{ xs: isMobile ? 8 : 12, md: 6 }}>
          <PageTitle pagetitle={pageTitle} />
        </Grid2>
        {isMobile && (
          <Grid2 size={{ xs: 4 }}>
            <BtnSmall label="Actions" color="info" icon={<KeyboardArrowDown />} onClick={onOpenActionMenu} />
            <ActionMenu
              menuConfig={filteredButtonConfigs}
              anchorEl={actionMenu}
              open={openActionMenu}
              onClose={onCloseActionMenu}
            />
          </Grid2>
        )}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <SearchBox name="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        </Grid2>
        {!isMobile && (
          <Grid2
            size={{ xs: 12, md: 12 }}
            sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start', alignItems: 'center' }}
          >
            {filteredButtonConfigs.map((button, index) => (
              <BtnSmall
                key={index}
                label={button.label}
                icon={button.icon}
                color={button.color as any}
                onClick={button.onClick}
                toolTipText={button.toolTipText}
                sx={{ marginRight: 1 }}
              />
            ))}
          </Grid2>
        )}
      </Grid2>
    );
  }
);
