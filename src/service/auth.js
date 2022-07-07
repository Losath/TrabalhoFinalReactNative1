export const login = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: {
            name: "Aluno",
            email: "oi@gmail",
            senha: "123"
          },
         
        });
      }, 2000);
    });
  };