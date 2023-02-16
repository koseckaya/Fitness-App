declare interface Error {
  name: string
  message: string
  stack?: string
  code?: number | string
}

declare module '*.mp4' {
  const src: string;
  export default src;
}