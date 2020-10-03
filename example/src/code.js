export default `/*
Available in the global scope:
- jsxstate components and hooks
- XState functions
- Tailwind CSS default classes
- classnames utility function
*/

const trafficLightMachine = Machine({
  id: "trafficLight",
  initial: "red",
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
        PLAY: "red",
      },
    },
  },
  on: {
    STOP: "stopped",
  },
});

// Light
const lightClass =
  "flex items-center justify-center w-20 h-20 font-bold text-white duration-300 transform rounded-full";

function Light({ value, className }) {
  return (
    <Matches value={value}>
      {(active) => (
        <div
          className={classnames(
            lightClass,
            className,
            active ? "border-4" : "scale-75 border-2 opacity-50"
          )}
        >
          {active && <Value>{(value) => value.toUpperCase()}</Value>}
        </div>
      )}
    </Matches>
  );
}

// LightList
const lightListClass =
  "flex flex-col p-5 space-y-10 bg-gray-800 border-4 border-gray-900 rounded";

function LightList() {
  return (
    <div className={lightListClass}>
      <Light value="red" className="bg-red-500 border-red-300" />

      <Light value="yellow" className="bg-yellow-500 border-yellow-300" />

      <Light value="green" className="bg-green-500 border-green-300" />
    </div>
  );
}

// Button
const buttonClass =
  "px-10 py-3 text-white transition duration-300 rounded-full focus:outline-none focus:shadow-outline";

function Button({ className, ...props }) {
  return <button {...props} className={classnames(buttonClass, className)} />;
}

// TrafficLight
const trafficLightClass = "flex flex-col items-center w-20 mx-auto";

const stickClass = "w-1/2 h-40 bg-gray-900";

const baseClass = "w-24 h-3 bg-black rounded-full";

function TrafficLight() {
  return (
    <Interpret machine={trafficLightMachine}>
      <div className={trafficLightClass}>
        <LightList />

        <div className={stickClass} />

        <div className={baseClass} />

        <div className="mt-10">
          <Matches
            value="stopped"
            fallback={
              <Send
                as={Button}
                onClick="STOP"
                className="bg-blue-500 hover:bg-blue-400"
              >
                Stop
              </Send>
            }
          >
            <Send
              as={Button}
              onClick="PLAY"
              className="bg-purple-500 hover:bg-purple-400"
            >
              Play
            </Send>
          </Matches>
        </div>
      </div>
    </Interpret>
  );
}

render(TrafficLight);`
