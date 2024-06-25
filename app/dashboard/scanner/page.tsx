const Scanner = () => {
    return (
      <div className="flex flex-col items-center justify-center m-5">
        <h1 className="font-bold text-3xl mb-5">
          Deep Fake Scanner
        </h1>
        <iframe 
          src="/face.html" 
          className="w-full min-h-screen mx-auto flex"
          style={{ maxWidth: '640px' }} // Optional: limit the max width
        ></iframe>
      </div>
    );
  }
  
  export default Scanner;
  