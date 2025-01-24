"use client";

const ErrorPage = ({ statusCode }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-6">
      <h1 className="text-4xl font-bold mb-4">
        {statusCode
          ? `An error ${statusCode} occurred on the server`
          : "An error occurred on the client"}
      </h1>
      <p className="text-lg">
        Something went wrong. Please try again later.
      </p>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;