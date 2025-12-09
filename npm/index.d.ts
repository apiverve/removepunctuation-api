declare module '@apiverve/removepunctuation' {
  export interface removepunctuationOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface removepunctuationResponse {
    status: string;
    error: string | null;
    data: RemovePunctuationData;
    code?: number;
  }


  interface RemovePunctuationData {
      original:     string;
      cleaned:      string;
      removed:      string[];
      removedCount: number;
  }

  export default class removepunctuationWrapper {
    constructor(options: removepunctuationOptions);

    execute(callback: (error: any, data: removepunctuationResponse | null) => void): Promise<removepunctuationResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: removepunctuationResponse | null) => void): Promise<removepunctuationResponse>;
    execute(query?: Record<string, any>): Promise<removepunctuationResponse>;
  }
}
