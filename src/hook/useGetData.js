import baseURL from "../Api/baseURL"; 

const useGetData = async (url, params) => {
   const res = await baseURL.get(url, params)

   return res.data
}

const useGetDataWithToken = async (url, params) => {

      const config = {
         headers: {  
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5ldG9vbGFicy5jb20vdjMvcHVibGljL2NwYW5lbC9sb2dpbiIsImlhdCI6MTcxOTM0ODgzMSwiZXhwIjoxNzE5MzUyNDMxLCJuYmYiOjE3MTkzNDg4MzEsImp0aSI6IlBhOVNHWHV6bkVpaHB1ZksiLCJzdWIiOiIxNiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.uChdnfPH87lqgYs7w35sms_qzSykgG3aAaR7JtF0z_E`
         }
      };
      const res = await baseURL.get(url, config);
      return res.data;

}

export {useGetData, useGetDataWithToken}