declare module '@apiverve/counter' {
  export interface counterOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface counterResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class counterWrapper {
    constructor(options: counterOptions);

    execute(callback: (error: any, data: counterResponse | null) => void): Promise<counterResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: counterResponse | null) => void): Promise<counterResponse>;
    execute(query?: Record<string, any>): Promise<counterResponse>;
  }
}
