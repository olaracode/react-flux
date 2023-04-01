const getState = ({ getStore, getActions, setStore }) => {
  // getStore, getActions, setStore
  // El getStore nos permite conseguir el valor del store
  // setStore nos permite modificar el store
  // el getActions nos permite conseguir el valor de las acciones
  return {
    store: {
      // Key user: Value "octavio"
      user: "Octavio",
      algo: "agregado",
      lastname: "Lara",
      todoList: ["Tarea de prueba"],
      // -> declaramos el lugar donde vamos a guardar la informacion
      characters: [],
    },
    actions: {
      funcionDemo: () => console.log("Me ejecuto en el flux"),
      // declaramos nuestra funcion asincrona
      // Esta funcion la ejecutamos en appContext
      fetchCharacters: async () => {
        try {
          const store = getStore();
          const response = await fetch(
            "https://rickandmortyapi.com/api/character"
          );
          const data = await response.json();
          setStore({ ...store, characters: data.results });
        } catch (error) {
          console.log(error);
        }
      },
      // Para definir un accion
      // hacemos: key nombreFuncion: (parametros) => {}
      addTodo: (nuevaTarea) => {
        // Se busca dentro del store el valor de todoList

        // Busco la informacion del store
        const store = getStore();

        // Con la informacion del store creo una lista de tareas nueva
        const newTareas = [...store.todoList, nuevaTarea];

        // Con la funcion setStore actualizo el valor del store
        // la funcion setStore reemplaza el valor anterior del store con uno nuevo
        // { ...store, todoList: newTareas }
        setStore({ ...store, todoList: newTareas });
      },
    },
  };
};

export default getState;
