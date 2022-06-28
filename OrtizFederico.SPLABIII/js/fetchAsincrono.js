const URL = "http://localhost:3000/anuncios";

export const getAnunciosFetchAsync = async () => {
    let data;
    try {
      const res = await fetch(URL);
  
      if (!res.ok) {
        throw new Error("Se ha producido un error");
      }
  
      data = await res.json();
      return data;
  
    } catch (error) {
      console.error(error);
    }
  };
  
  export const deleteAnunciosFetchAsync = async (id) => {
      try {
        const res = await fetch(`${URL}/${id}`, {method: "DELETE"});
      
        if (!res.ok) {
          throw new Error("Se ha producido un error");
        }
      }
      catch (error) {
          console.error(error);
      }
    };