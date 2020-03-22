import { HttpsRequestOptions } from './HttpsRequestOptions.interface';

export interface PollerOptions {
    name: string,
    httpsRequestOptions: HttpsRequestOptions,
    frequencyInSeconds: number
}