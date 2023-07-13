const loginUser = (email, password, onSuccess, onError) => {
  setTimeout(() => {

    const error = false;

    if(error)
    {
        return onError(new Error('Error in login'));
    }

    console.log(`Usuario logado`);
    onSuccess({ email });

  }, 1500);
  console.log("After setTimeout");
};

const user = loginUser("ricardo@gmail.com", "1234567", (user) => {
    console.log(user)
}, (error) =>{
    console.log(error)
});

console.log({ user });
