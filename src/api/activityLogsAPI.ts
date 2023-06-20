export interface ActivityLogData {
    activity: string;
    status: string;
    created: Date;
    request: Record<string, any>; // Use appropriate type for the request field
    request_id: bigint;
    event_id: bigint;
  }
  
  export interface RequestData {
    property1: string;
    property2: number;
    // Add other properties as needed
  }

  export async function fetchActivityLogs(
    siteId: string,
    numberOfPages: number,
    pageSize: number
  ): Promise<ActivityLogData[]> {
    // Implement the logic to fetch activity logs from the API
    // Return a Promise that resolves with the fetched data
    // Replace this example implementation with your actual API call
  
    // Import the mock data from a separate file
    const mockData: ActivityLogData[] = require('./mockData.json');
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 1000);
    });
  }
  