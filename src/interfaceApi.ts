export interface ApiResponse {
  data: string | any; // 假设 token 是字符串类型，若有其他类型可修改为 any
  code: number;
  message: string;
}