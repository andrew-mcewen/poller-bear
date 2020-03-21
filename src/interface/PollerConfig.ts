export interface PollerConfig {
    name: string,
    endpoint: {
        hostname: string,
        port: number,
        path: string,
        method: string,
        headers: any
    },
    frequencyInSeconds: number
}