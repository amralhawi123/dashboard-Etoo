import baseURL from "../Api/baseURL"; 

const usePostData = async (url, params) => {
   const res = await baseURL.post(url, params)

   return res.data
}

const usePostDataWithToken = async (url, params) => {

      const config = {
         headers: {  
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5ldG9vbGFicy5jb20vdjMvcHVibGljL2NwYW5lbC9sb2dpbiIsImlhdCI6MTcyMDQzNTEyOSwiZXhwIjoxNzIwNDM4NzI5LCJuYmYiOjE3MjA0MzUxMjksImp0aSI6IjdsY0dUdjUweEhtNHljcEgiLCJzdWIiOiIxNiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.oSRhUesbG0nY9d7AuOIv2YgZycvogl3zNLNayTOIuro`
         }
      };
      const res = await baseURL.post(url, params, config)
      return res.data;

}

export {usePostData, usePostDataWithToken}