export default `/*
All jsxstate components and hooks are available
CSS classes available: tailwind css classes https://tailwindcss.com/
*/

const machine = Machine({
  id: "light",
  initial: "red",
  context: {
    steps: 10,
  },
  states: {
    red: {
      after: { 3000: "yellow" },
    },
    yellow: {
      after: { 1000: "green" },
    },
    green: {
      after: { 2000: "red" },
    },
    stopped: {
      on: {
        RESUME: "red",
      },
    },
  },
  on: {
    STOP: "stopped",
  },
});

function Light({ color, active }) {
  const className = classnames(
    "w-20 h-20 rounded-full flex items-center justify-center",
    color,
  );

  return <div className={className}>{active && <Value />}</div>;
}

function Component() {
  return (
    <Interpret machine={machine}>
      <div className="flex items-center space-x-10">
        <div className="inline-block p-5 space-y-10 bg-gray-800 rounded">
          <Matches value="red" fallback={<Light color="bg-red-800" />}>
            <Light color="bg-red-500" active />
          </Matches>

          <Matches value="yellow" fallback={<Light color="bg-yellow-800" />}>
            <Light color="bg-yellow-500" active />
          </Matches>

          <Matches value="green" fallback={<Light color="bg-green-800" />}>
            <Light color="bg-green-500" active />
          </Matches>
        </div>

        <Matches
          value="stopped"
          fallback={
            <Send
              as="button"
              onClick="STOP"
              className="px-3 py-2 text-white bg-blue-500 rounded"
            >
              Stop
            </Send>
          }
        >
          <Send
            as="button"
            onClick="RESUME"
            className="px-3 py-2 text-white bg-purple-500 rounded"
          >
            Resume
          </Send>
        </Matches>
      </div>
    </Interpret>
  );
}

render(Component);`
