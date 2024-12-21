export default async function useFetchData(url){
    try{
        const { data, error } = await useFetch(url)        
        if(error.value){
            return {data:null  , error:error.value}
        }
        else{
            return {data:data.value  , error:null}
        }
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log('end '+url);
    }
}