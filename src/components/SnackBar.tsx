
type snackBar = {
    message : string;
    onClose : ()=>void;
}

const ErrorSnackbar = ({ message, onClose } : snackBar) => {

  return (
    <>
       <div className="fixed top-1 left-1 rounded-md bg-red-500 text-white py-2 px-6 text-center">
        <button onClick={onClose} className="absolute top-0 right-2">x</button>
          {message}
        </div>
    </>
  );
};

export default ErrorSnackbar;
