import baseURL from "../Api/baseURL"; 

const usePostData = async (url, params) => {
   const res = await baseURL.post(url, params)

   return res.data
}

const usePostDataWithToken = async (url, params) => {

      const config = {
         headers: {  
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5ldG9vbGFicy5jb20vdjMvcHVibGljL2NwYW5lbC9sb2dpbiIsImlhdCI6MTcxOTUyODQ0MSwiZXhwIjoxNzE5NTMyMDQxLCJuYmYiOjE3MTk1Mjg0NDEsImp0aSI6ImJsT2kwWmd1VGxneGcxZVMiLCJzdWIiOiIxNiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ._QFajnvs7tpEPIEWA94W9ZxDyFrvRlHjE2Q21nF4w2E`
         }
      };
      const res = await baseURL.post(url, params, config)
      return res.data;

}

export {usePostData, usePostDataWithToken}