import { HttpsRequestOptions } from '../../../interfaces/httpsRequestOptions.interface';

export interface PollerOptions {
    name: String,
    httpsRequestOptions: HttpsRequestOptions,
    frequencyInSeconds: number
}