export const validateSearch = (search:string) => {
    if(search.length >= 15){
      return "City must be less than 20 characters"
    }

    let letters =  /^[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\.\ ))[a-zA-Z\u0080-\u024F]+)*$/;
    if(!letters.test(search)){
      return "You must write only characters!";
    }
  return "";
  }