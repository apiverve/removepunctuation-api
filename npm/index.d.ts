declare module '@apiverve/removepunctuation' {
  export interface removepunctuationOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface removepunctuationResponse {
    status: string;
    error: string | null;
    data: RemovePunctuationData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface RemovePunctuationData {
      cleaned:            null | string;
      punctuationRemoved: (null | string)[];
      count:              number | null;
  }

  export default class removepunctuationWrapper {
    constructor(options: removepunctuationOptions);

    execute(callback: (error: any, data: removepunctuationResponse | null) => void): Promise<removepunctuationResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: removepunctuationResponse | null) => void): Promise<removepunctuationResponse>;
    execute(query?: Record<string, any>): Promise<removepunctuationResponse>;
  }
}
