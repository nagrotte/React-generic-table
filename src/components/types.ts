export type ActivityLogData = {
    activity: string;
    status: string;
    created: Date;
    request: Record<string, any>; // Use appropriate type for the request field
    request_id: bigint;
    event_id: bigint;
  };