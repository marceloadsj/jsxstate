export default `/*
Components available: Interpret, Send, Value, Matches
Hooks available: useContextMachine, useValue, useMatches
CSS classes available: default utility tailwind css
*/

const machine = Machine({
  id: "light",
  initial: "red",
  context: {
    steps: 10,
  },
  states: {
    green: {
      after: { 2000: "yellow" },
    },
    yellow: {
      after: { 1000: "red" },
    },
    red: {
      after: { 3000: "green" },
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
    active && "bg-" + color + "-400",
    !active && "bg-" + color + "-900"
  );

  return <div className={className}>{active && <Value />}</div>;
}

function Component() {
  return (
    <Interpret machine={machine}>
      <div className="flex items-center space-x-10">
        <div className="inline-block p-5 space-y-10 bg-gray-800 rounded">
          <Matches value="red" fallback={<Light color="red" />}>
            <Light color="red" active />
          </Matches>

          <Matches value="yellow" fallback={<Light color="yellow" />}>
            <Light color="yellow" active />
          </Matches>

          <Matches value="green" fallback={<Light color="green" />}>
            <Light color="green" active />
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
