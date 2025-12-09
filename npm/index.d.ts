declare module '@apiverve/counter' {
  export interface counterOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface counterResponse {
    status: string;
    error: string | null;
    data: CloudCounterData;
    code?: number;
  }


  interface CloudCounterData {
      created:        Date;
      id:             string;
      lastAction:     string;
      lastRead:       Date;
      lastUpdated:    Date;
      numberOfDigits: number;
      ordinal:        string;
      value:          number;
      words:          string;
  }

  export default class counterWrapper {
    constructor(options: counterOptions);

    execute(callback: (error: any, data: counterResponse | null) => void): Promise<counterResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: counterResponse | null) => void): Promise<counterResponse>;
    execute(query?: Record<string, any>): Promise<counterResponse>;
  }
}
