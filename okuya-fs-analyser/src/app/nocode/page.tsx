export default function Page() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl mb-2">
          This site has been accessed in an unexpected way.
        </h1>
        <p className="text-gray-500">
          Please contact Joris Lodewijks at{" "}
          <a
            href="mailto:a.j.lodewijks@student.tue.nl"
            className="text-blue-500"
          >
            a.j.lodewijks@student.tue.nl
          </a>{" "}
          if you think this is an error.
        </p>
      </div>
    </div>
  );
}
