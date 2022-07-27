export const helpHttp = () => {
    const customFetch = (endpoint,options,token) => {
        const defaultHeader = {
            'Content-Type':'application/json'
        }

        console.log(localStorage)
        options.method = options.method || "GET";
        options.headers = options.headers
          ? { ...defaultHeader, ...options.headers }
          : defaultHeader;
    
        options.body = JSON.stringify(options.body) || false;
        if (!options.body) delete options.body;


        console.log(endpoint,options)
        return fetch(endpoint,options)
        .then(res =>
            res.ok ? res.json() : res.json()).catch(err => console.log(err))
        
    }

    let get = (url, options = {}) => customFetch(url,options)

    let post = (url,options={}) => {
        options.method = "POST";
        console.log(url,options)
        return customFetch(url,options)
    }

    let put = (url,options={}) => {
        options.method = "PUT";

        return customFetch(url,options)
    }

    let del = (url,options={}) => {
        options.method = "DEL";

        return customFetch(url,options)
    }

    return{
        get,
        post,
        put,
        del
    }
}