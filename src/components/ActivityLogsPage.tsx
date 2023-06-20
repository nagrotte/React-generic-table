import React, { useEffect, useState } from 'react';
import { ActivityLogData } from '../components/types';
import { RequestData, fetchActivityLogs } from '../api/activityLogsAPI';
import Pager from './Pager';
import Table, { TableColumn } from './Table';




const ActivityLogsPage = () => {
  const [logs, setLogs] = useState<ActivityLogData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const siteId = 'your-site-id'; // Replace with the actual site ID
  const numberOfPages = 3; // Replace with the desired number of pages
  const pageSize = 50; // Replace with the desired page size

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const response = await fetchActivityLogs(siteId, numberOfPages, pageSize);
      setLogs(response);
    } catch (error) {
      console.error('Error fetching activity logs:', error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const columns: TableColumn<ActivityLogData>[] = [
    { accessor: 'activity', header: 'Activity' },
    { accessor: 'status', header: 'Status' },
    {
        accessor: 'request',
        header: 'Request',
        cellRenderer: (data: string | bigint | Date | Record<string, any>) => {
          if (typeof data === 'object') {
            return <pre>{JSON.stringify(data, null, 2)}</pre>;
          } else {
            return data.toString();
          }
        },
      },
    { accessor: 'request_id', header: 'Request ID' },
    { accessor: 'event_id', header: 'Event ID' },
  ];
  const totalPages = Math.ceil(logs.length / pageSize);

  const paginatedLogs = logs.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div>
      <Table data={paginatedLogs} columns={columns} />
      <Pager currentPage={currentPage} numberOfPages={totalPages} onPageChange={handlePageChange} />
      {/* Render other components */}
    </div>
  );
};

export default ActivityLogsPage;
