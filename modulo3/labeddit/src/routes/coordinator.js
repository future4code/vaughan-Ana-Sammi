export const goToLogin = (navigate) => {
  navigate("/login");
};

export const goToFeed = (navigate) => {
  navigate("/");
};

export const goToSignUp = (navigate) => {
  navigate("/cadastrar");
};

export const goToPost = (navigate, id) => {
  navigate(`/post/${id}`);
};
